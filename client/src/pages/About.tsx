import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Target, Award } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: Clock, value: "25+", label: "Years Experience" },
    { icon: Users, value: "10K+", label: "Consultations" },
    { icon: Target, value: "5000+", label: "Happy Clients" },
    { icon: Award, value: "98%", label: "Accuracy Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-spiritual-purple/5 to-saffron/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gradient mb-4">{t('about.title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Guru Profile" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-spiritual-purple-deep">Pandit Rajesh Sharma</h2>
              <p className="text-xl text-gray-600">Certified Jyotish Acharya & Spiritual Guide</p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 25 years of experience in Vedic astrology and spiritual sciences, 
                  Pandit Rajesh Sharma has guided thousands of individuals towards clarity, 
                  prosperity, and spiritual growth. His deep understanding of ancient texts 
                  combined with modern psychological insights makes him a unique spiritual mentor.
                </p>
                <p>
                  Specializing in Kundli analysis, gemstone consultation, Vastu Shastra, 
                  and spiritual healing, he combines traditional knowledge with practical modern solutions. 
                  His approach is holistic, addressing not just astrological concerns but also 
                  emotional and spiritual well-being.
                </p>
                <p>
                  Born into a family of traditional astrologers in Varanasi, Pandit Rajesh 
                  studied under renowned gurus and obtained his Jyotish Acharya degree from 
                  the prestigious Sampurnanand Sanskrit Vishwavidyalaya. He has been practicing 
                  and teaching Vedic astrology for over two decades.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-spiritual-purple-deep mb-4">Specializations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vedic Astrology & Birth Chart Analysis</li>
                  <li>• Gemstone Therapy & Remedial Measures</li>
                  <li>• Vastu Shastra for Home & Business</li>
                  <li>• Marriage Compatibility & Relationship Counseling</li>
                  <li>• Career Guidance & Financial Astrology</li>
                  <li>• Spiritual Healing & Meditation Guidance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-white shadow-lg">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-spiritual-purple mx-auto mb-4" />
                  <div className="text-3xl font-bold text-spiritual-purple mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-spiritual-purple-deep mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To bridge the gap between ancient Vedic wisdom and modern life challenges, 
                  providing authentic spiritual guidance that empowers individuals to make 
                  informed decisions and live fulfilling lives aligned with their cosmic purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-spiritual-purple-deep mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To create a world where ancient wisdom guides modern living, where every 
                  individual has access to spiritual insights that help them navigate life's 
                  journey with confidence, clarity, and purpose.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-spiritual-purple-deep mb-6 text-center">
                Why Choose Kavach Jyotish Kendra?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-spiritual-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-spiritual-purple" size={32} />
                  </div>
                  <h4 className="font-bold text-spiritual-purple-deep mb-2">Authentic Expertise</h4>
                  <p className="text-gray-600 text-sm">
                    25+ years of experience with traditional training and modern insights
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-saffron" size={32} />
                  </div>
                  <h4 className="font-bold text-spiritual-purple-deep mb-2">Personalized Approach</h4>
                  <p className="text-gray-600 text-sm">
                    Every consultation is tailored to your unique birth chart and circumstances
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-spiritual-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-spiritual-purple" size={32} />
                  </div>
                  <h4 className="font-bold text-spiritual-purple-deep mb-2">Practical Solutions</h4>
                  <p className="text-gray-600 text-sm">
                    Ancient wisdom applied to modern life challenges with actionable remedies
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
