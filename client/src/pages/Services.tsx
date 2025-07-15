import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Gem, 
  Home, 
  Shield, 
  Calendar, 
  Heart,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Star,
      title: t('services.kundli.title'),
      description: t('services.kundli.description'),
      price: t('services.kundli.price'),
      color: 'spiritual-purple',
      features: [
        'Complete birth chart analysis',
        'Detailed life predictions',
        'Career and marriage guidance',
        'Health and wealth insights',
        'Remedial measures'
      ]
    },
    {
      icon: Gem,
      title: t('services.gemstone.title'),
      description: t('services.gemstone.description'),
      price: t('services.gemstone.price'),
      color: 'saffron',
      features: [
        'Personalized gemstone selection',
        'Planetary strength analysis',
        'Wearing guidelines',
        'Alternative remedies',
        'Quality certification guidance'
      ]
    },
    {
      icon: Home,
      title: t('services.vastu.title'),
      description: t('services.vastu.description'),
      price: t('services.vastu.price'),
      color: 'spiritual-purple',
      features: [
        'Complete property analysis',
        'Room-wise recommendations',
        'Color and direction guidance',
        'Business Vastu consultation',
        'Remedial solutions'
      ]
    },
    {
      icon: Shield,
      title: t('services.kavach.title'),
      description: t('services.kavach.description'),
      price: t('services.kavach.price'),
      color: 'saffron',
      features: [
        'Protective mantras',
        'Sacred amulets',
        'Spiritual cleansing',
        'Energy balancing',
        'Regular guidance'
      ]
    },
    {
      icon: Calendar,
      title: t('services.horoscope.title'),
      description: t('services.horoscope.description'),
      price: t('services.horoscope.price'),
      color: 'spiritual-purple',
      features: [
        'Daily predictions',
        'Weekly forecasts',
        'Monthly guidance',
        'Planetary transit effects',
        'Lucky dates and times'
      ]
    },
    {
      icon: Heart,
      title: t('services.matchmaking.title'),
      description: t('services.matchmaking.description'),
      price: t('services.matchmaking.price'),
      color: 'saffron',
      features: [
        'Complete compatibility analysis',
        'Guna Milan scoring',
        'Doshas and remedies',
        'Marriage timing',
        'Relationship counseling'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-purple/5 to-saffron/5">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gradient mb-4">{t('services.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-${service.color}/10 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <service.icon className={`text-${service.color} text-2xl`} size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-spiritual-purple-deep">
                        {service.title}
                      </h3>
                      <div className="text-2xl font-bold text-saffron">
                        {service.price}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-spiritual-purple-deep mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-saffron rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full bg-spiritual-purple hover:bg-spiritual-purple-deep">
                      <Link href="/book">
                        Book This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gradient text-center mb-12">
                Our Consultation Process
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-spiritual-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-bold text-spiritual-purple-deep mb-2">Book Appointment</h3>
                  <p className="text-gray-600 text-sm">
                    Choose your preferred service and schedule a convenient time
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-bold text-spiritual-purple-deep mb-2">Consultation</h3>
                  <p className="text-gray-600 text-sm">
                    Detailed discussion about your concerns and birth chart analysis
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-spiritual-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-bold text-spiritual-purple-deep mb-2">Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive study using traditional methods and modern insights
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    4
                  </div>
                  <h3 className="font-bold text-spiritual-purple-deep mb-2">Guidance</h3>
                  <p className="text-gray-600 text-sm">
                    Personalized recommendations and ongoing support
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-spiritual-purple-deep mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the transformative power of authentic Vedic guidance. 
            Book your consultation today and take the first step towards clarity and prosperity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-spiritual-purple hover:bg-spiritual-purple-deep">
              <Link href="/book">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Have Questions? Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
