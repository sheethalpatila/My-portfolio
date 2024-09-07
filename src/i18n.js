import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json'; // for English
import translationES from './locales/es/translation.json'; // for Spanish
import translationHINDI from './locales/hindi/translation.json'; // for Hindi

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  hindi: {
    translation: translationHINDI
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
