import { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/locales/en.json';
import es from '../i18n/locales/es.json';
import fr from '../i18n/locales/fr.json';
import de from '../i18n/locales/de.json';
import it from '../i18n/locales/it.json';
import pt from '../i18n/locales/pt.json';
import zh from '../i18n/locales/zh.json';
import ja from '../i18n/locales/ja.json';
import ko from '../i18n/locales/ko.json';
import ar from '../i18n/locales/ar.json';

const translations = {
  en,
  es,
  fr,
  de,
  it,
  pt,
  zh,
  ja,
  ko,
  ar
};

const defaultLanguage = 'en';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved && translations[saved] ? saved : defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    return value || key;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const languages = [
    { code: 'en', name: translations[language]?.languages?.en || 'English' },
    { code: 'es', name: translations[language]?.languages?.es || 'Español' },
    { code: 'fr', name: translations[language]?.languages?.fr || 'Français' },
    { code: 'de', name: translations[language]?.languages?.de || 'Deutsch' },
    { code: 'it', name: translations[language]?.languages?.it || 'Italiano' },
    { code: 'pt', name: translations[language]?.languages?.pt || 'Português' },
    { code: 'zh', name: translations[language]?.languages?.zh || '中文' },
    { code: 'ja', name: translations[language]?.languages?.ja || '日本語' },
    { code: 'ko', name: translations[language]?.languages?.ko || '한국어' },
    { code: 'ar', name: translations[language]?.languages?.ar || 'العربية' }
  ];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};
