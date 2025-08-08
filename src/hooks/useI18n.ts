// src/hooks/useI18n.ts
import { useTranslation } from 'react-i18next';

export function useI18n() {
  const { t, i18n, ready } = useTranslation();

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return {
    t,
    i18n,
    ready,
    changeLanguage,
    currentLanguage: i18n.language,
  };
}
