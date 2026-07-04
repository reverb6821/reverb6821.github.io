export const locales = ['en', 'it'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
export const defaultLocaleFallback = 'en';
export const localeCookieName = 'locale';

export function resolveLocale(locale: string | null): Locale {
  if (!locale) {
    return defaultLocale;
  }
    
    const languages = locale.toLowerCase()
        .split(',')
        .map(lang => lang.trim())
        .filter(Boolean);
    
    for (const lang of languages) {
        if(lang === 'it' || lang.startsWith('it-')) {
            return 'it';
        }
        if(lang === 'en' || lang.startsWith('en-')) {
            return 'en';
        } 
    }
  return defaultLocale;
}