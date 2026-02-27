import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, changeLanguage, t, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.fleet'), path: '/fleet' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setShowTranslate(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? isDark ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg'
        : isDark ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${scrolled ? (isDark ? 'bg-primary-600' : 'bg-primary-600') : (isDark ? 'bg-gray-800' : 'bg-primary-600')}`}>
              <Car className={`w-6 h-6 ${scrolled ? 'text-white' : (isDark ? 'text-primary-600' : 'text-white')}`} />
            </div>
            <span className={`text-2xl font-bold ${scrolled ? (isDark ? 'text-white' : 'text-gray-900') : (isDark ? 'text-white' : 'text-gray-900')}`}>
              CessarAuto
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  scrolled
                    ? isActive(link.path)
                      ? 'text-primary-600'
                      : isDark ? 'text-gray-300 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? isDark ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                  : isDark ? 'text-yellow-400 hover:bg-gray-800' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Translate Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowTranslate(!showTranslate)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  scrolled
                    ? isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">{t('nav.translate')}</span>
              </button>

              {showTranslate && (
                <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl border py-2 z-50 max-h-64 overflow-y-auto ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between ${
                        language === lang.code
                          ? isDark ? 'bg-primary-600 text-white' : 'bg-primary-600 text-white'
                          : isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{lang.name}</span>
                      {language === lang.code && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="btn-primary">
              {t('nav.bookNow')}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? (isDark ? 'text-white' : 'text-gray-900') : (isDark ? 'text-white' : 'text-gray-900')}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-medium ${
                    isActive(link.path)
                      ? 'text-primary-600'
                      : isDark ? 'text-gray-300 hover:text-primary-600' : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-2 w-full py-2 px-3 rounded-lg transition-colors ${
                  isDark ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="font-medium">{isDark ? t('theme.lightMode') : t('theme.darkMode')}</span>
              </button>

              {/* Mobile Translate */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('nav.translate')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                        language === lang.code
                          ? 'bg-primary-600 text-white'
                          : isDark ? 'text-gray-300 bg-gray-800 hover:bg-gray-700' : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center btn-primary"
              >
                {t('nav.bookNow')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
