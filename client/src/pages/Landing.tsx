import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Calendar, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Landing() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-purple/5 to-saffron/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-spiritual-purple/90 to-spiritual-purple-deep/90"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="yantra-pattern p-8 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <Star className="text-4xl text-saffron" size={48} />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto opacity-80">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-saffron hover:bg-saffron-dark text-white">
                <Link href="/book">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('hero.cta1')}
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/50"
              >
                <Link href="/blog">
                  <Star className="mr-2 h-5 w-5" />
                  {t('hero.cta2')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-spiritual-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="text-spiritual-purple text-2xl" size={32} />
                </div>
                <h3 className="text-xl font-bold text-spiritual-purple-deep mb-4">
                  {t('services.kundli.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('services.kundli.description')}
                </p>
                <div className="text-saffron font-semibold text-lg mb-4">
                  {t('services.kundli.price')}
                </div>
                <Button asChild className="w-full bg-spiritual-purple hover:bg-spiritual-purple-deep">
                  <Link href="/book">
                    {t('nav.book')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="text-saffron text-2xl" size={32} />
                </div>
                <h3 className="text-xl font-bold text-spiritual-purple-deep mb-4">
                  {t('services.gemstone.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('services.gemstone.description')}
                </p>
                <div className="text-saffron font-semibold text-lg mb-4">
                  {t('services.gemstone.price')}
                </div>
                <Button asChild className="w-full bg-spiritual-purple hover:bg-spiritual-purple-deep">
                  <Link href="/book">
                    {t('nav.book')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-spiritual-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="text-spiritual-purple text-2xl" size={32} />
                </div>
                <h3 className="text-xl font-bold text-spiritual-purple-deep mb-4">
                  {t('services.vastu.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('services.vastu.description')}
                </p>
                <div className="text-saffron font-semibold text-lg mb-4">
                  {t('services.vastu.price')}
                </div>
                <Button asChild className="w-full bg-spiritual-purple hover:bg-spiritual-purple-deep">
                  <Link href="/book">
                    {t('nav.book')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-spiritual-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Begin Your Spiritual Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience authentic astrological guidance from certified experts who have helped thousands find their path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-spiritual-purple hover:bg-gray-100">
                <Link href="/book">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
