import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDark ? 'bg-gray-950 text-white' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">CessarAuto</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              {t('footer.premiumCarRental')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>info@cessarauto.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {[
                { name: t('footer.aboutUs'), path: '/portfolio' },
                { name: t('footer.ourFleet'), path: '/fleet' },
                { name: t('nav.contact'), path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {[
                { name: t('footer.luxuryCars'), path: '/fleet' },
                { name: t('footer.sportsCars'), path: '/fleet' },
                { name: t('footer.electricVehicles'), path: '/fleet' },
                { name: t('footer.suvs'), path: '/fleet' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-3">
              {[
                { name: t('footer.faq'), path: '/contact' },
                { name: t('footer.termsOfService'), path: '/' },
                { name: t('footer.privacyPolicy'), path: '/' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {t('footer.allRightsReserved')}
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
