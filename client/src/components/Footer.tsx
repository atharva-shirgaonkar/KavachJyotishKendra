import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Star, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('footer.quickLinks.about'), href: '/about' },
    { name: t('footer.quickLinks.services'), href: '/services' },
    { name: t('footer.quickLinks.book'), href: '/book' },
    { name: t('footer.quickLinks.blog'), href: '/blog' },
    { name: t('footer.quickLinks.testimonials'), href: '/testimonials' },
    { name: t('footer.quickLinks.contact'), href: '/contact' }
  ];

  const services = [
    t('footer.services.kundli'),
    t('footer.services.gemstone'),
    t('footer.services.vastu'),
    t('footer.services.kavach'),
    t('footer.services.matchmaking')
  ];

  return (
    <footer className="bg-spiritual-purple-deep text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center">
                <Star className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t('footer.siteName')}</h3>
                <p className="text-purple-200">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-purple-200 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-spiritual-purple rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-spiritual-purple rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-spiritual-purple rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                className="w-10 h-10 bg-spiritual-purple rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2 text-purple-200">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-purple-200">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  {t('footer.admin')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-spiritual-purple mt-12 pt-8 text-center">
          <p className="text-purple-200">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
