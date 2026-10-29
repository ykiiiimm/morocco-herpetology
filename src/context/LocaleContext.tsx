'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, TRANSLATIONS, TranslationDictionary } from '@/data/translations';

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationDictionary;
  dir: 'ltr' | 'rtl';
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang') as Locale | null;
      if (langParam && (langParam === 'en' || langParam === 'fr' || langParam === 'ar')) {
        setLocaleState(langParam);
        localStorage.setItem('mh_locale', langParam);
        return;
      }
      const saved = localStorage.getItem('mh_locale') as Locale | null;
      if (saved && (saved === 'en' || saved === 'fr' || saved === 'ar')) {
        setLocaleState(saved);
      }
    } catch (e) {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('mh_locale', newLocale);
    } catch (e) {}
    
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {}

    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    }
  }, [locale]);

  const value: LocaleContextType = {
    locale,
    setLocale,
    t: TRANSLATIONS[locale] || TRANSLATIONS.en,
    dir: locale === 'ar' ? 'rtl' : 'ltr'
  };

  return (
    <LocaleContext.Provider value={value}>
      <div dir={value.dir} className={`w-full min-h-screen flex flex-col ${locale === 'ar' ? 'font-arabic' : ''}`}>
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
