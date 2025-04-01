'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Try to detect user's language preference
    const detectLanguage = (): Language => {
      // Check localStorage first
      const savedLang = localStorage.getItem('preferredLanguage') as Language;
      if (savedLang && ['en', 'fr'].includes(savedLang)) {
        return savedLang;
      }

      // Check navigator language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'fr') {
        return 'fr';
      }

      // Default to English
      return 'en';
    };

    setLanguage(detectLanguage());
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
    }

    return value;
  };

  const value = {
    language,
    setLanguage: (lang: Language) => {
      setLanguage(lang);
      localStorage.setItem('preferredLanguage', lang);
    },
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
