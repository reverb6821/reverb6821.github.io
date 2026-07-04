import { cookies, headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, Locale, localeCookieName, locales, resolveLocale } from './config';

export default getRequestConfig(async () => {
    const cookieStore = (await cookies()).get(localeCookieName)?.value;
    const headerStore = (await headers()).get('accept-language')
    const locale = locales.includes(cookieStore as Locale) ? (cookieStore as Locale) : resolveLocale(headerStore) ?? defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});