import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/pt/pt-br.json';
import enUS from './locales/en/en-us.json';

const resources = {
  pt: ptBR,
  'pt-BR': ptBR,
  en: enUS,
  'en-US': enUS,
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lng') || navigator.language,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
