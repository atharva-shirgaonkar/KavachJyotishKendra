import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@shared/schema';

export default function Blog() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'Daily Horoscope', name: 'Daily Horoscope' },
    { id: 'Spiritual Wisdom', name: 'Spiritual Wisdom' },
    { id: 'Vastu Guidance', name: 'Vastu Guidance' },
    { id: 'Gemstone Therapy', name: 'Gemstone Therapy' },
    { id: 'Astrology Tips', name: 'Astrology Tips' }
  ];

  const filteredPosts = blogPosts?.filter(post => 
    selectedCategory === 'all' || post.category === selectedCategory
  ) || [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-spiritual-purple/5 to-saffron/5 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-spiritual-purple-deep mb-4">
              Unable to Load Articles
            </h2>
            <p className="text-gray-600">
              We're having trouble loading the blog posts. Please try again later.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-purple/5 to-saffron/5">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gradient mb-4">{t('blog.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? 
                "bg-spiritual-purple hover:bg-spiritual-purple-deep" : 
                "hover:bg-spiritual-purple/10"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="bg-white shadow-lg overflow-hidden">
                <Skeleton className="w-full h-48" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Blog Posts */}
        {!isLoading && filteredPosts.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
                {post.imageUrl && (
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <CardContent className="p-6">
                  <Badge variant="secondary" className="text-saffron bg-saffron/10 mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-spiritual-purple-deep mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.createdAt && formatDate(post.createdAt.toString())}
                    </div>
                    <Button variant="ghost" size="sm" className="text-spiritual-purple hover:text-spiritual-purple-deep p-0">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-spiritual-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-spiritual-purple" />
                </div>
                <h3 className="text-xl font-bold text-spiritual-purple-deep mb-4">
                  No Articles Found
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedCategory === 'all' 
                    ? "We're working on bringing you insightful spiritual content. Please check back soon!"
                    : `No articles found in the "${selectedCategory}" category. Try selecting a different category.`
                  }
                </p>
                {selectedCategory !== 'all' && (
                  <Button 
                    onClick={() => setSelectedCategory('all')}
                    className="bg-spiritual-purple hover:bg-spiritual-purple-deep"
                  >
                    View All Articles
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Featured Daily Horoscope */}
        <div className="mt-20">
          <Card className="bg-spiritual-gradient text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Today's Cosmic Guidance</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Get personalized daily horoscope readings based on your birth chart. 
                Discover what the stars have in store for you today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-spiritual-purple hover:bg-gray-100">
                  <Clock className="mr-2 h-5 w-5" />
                  Get Daily Horoscope
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Book Personal Reading
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
