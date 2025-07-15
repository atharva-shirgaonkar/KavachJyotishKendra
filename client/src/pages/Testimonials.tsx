import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, Quote, MapPin } from 'lucide-react';
import type { Testimonial } from '@shared/schema';

export default function Testimonials() {
  const { t } = useTranslation();

  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-saffron fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-spiritual-purple/5 to-saffron/5 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-spiritual-purple-deep mb-4">
              Unable to Load Testimonials
            </h2>
            <p className="text-gray-600">
              We're having trouble loading the testimonials. Please try again later.
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
          <h1 className="text-4xl font-bold text-gradient mb-4">{t('testimonials.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Skeleton className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <Skeleton className="h-5 w-32 mb-2" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-20 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-40" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Testimonials */}
        {!isLoading && testimonials && testimonials.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-spiritual-purple rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <h4 className="font-bold text-spiritual-purple-deep text-lg">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-spiritual-purple/20" />
                    <p className="text-gray-700 italic leading-relaxed pl-4">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <Badge variant="outline" className="text-saffron border-saffron/30 bg-saffron/5">
                    {testimonial.service}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!testimonials || testimonials.length === 0) && (
          <div className="text-center py-16">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-spiritual-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-spiritual-purple" />
                </div>
                <h3 className="text-xl font-bold text-spiritual-purple-deep mb-4">
                  No Testimonials Yet
                </h3>
                <p className="text-gray-600 mb-6">
                  We're building our collection of client experiences. 
                  Be among the first to share your spiritual journey with us!
                </p>
                <Button className="bg-spiritual-purple hover:bg-spiritual-purple-deep">
                  Book Your Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20">
          <Card className="bg-spiritual-gradient text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Share Your Experience?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Have you experienced the transformative power of our spiritual guidance? 
                We'd love to hear about your journey and how it has impacted your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-spiritual-purple hover:bg-gray-100">
                  Share Your Story
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Book Your First Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
