import { locales, localeCookieName, type Locale } from '@/i18n/config';

export function setLocaleAction(locale: Locale) {
  if (!locales.includes(locale)) return;

  document.cookie = `${localeCookieName}=${locale};path=/;max-age=${
    60 * 60 * 24 * 365
  };samesite=lax`;

  const win = window as Window & { __setLocale?: (l: Locale) => void };
  win.__setLocale?.(locale);
}