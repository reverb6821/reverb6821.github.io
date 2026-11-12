"use client";

import { NextIntlClientProvider } from "next-intl";
import { useState, useEffect } from "react";
import { defaultLocale, locales, localeCookieName, resolveLocale, type Locale } from "@/i18n/config";

async function loadMessages(locale: Locale) {
  const messages = await import(`@/messages/${locale}.json`);
  return messages.default;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Record<string, unknown>>({});

  useEffect(() => {
    // 1. Controlla il cookie salvato
    const cookieLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${localeCookieName}=`))
      ?.split('=')[1];

    // 2. Fallback su Accept-Language del browser
    const resolved: Locale = locales.includes(cookieLocale as Locale)
      ? (cookieLocale as Locale)
      : resolveLocale(navigator.language ?? navigator.languages?.join(',') ?? null);

    setLocale(resolved);
    loadMessages(resolved).then(setMessages);
  }, []);

  // Esponi una funzione globale per cambiare lingua (usata da setLocaleAction)
  useEffect(() => {
    (window as Window & { __setLocale?: (l: Locale) => void }).__setLocale = (newLocale: Locale) => {
      document.cookie = `${localeCookieName}=${newLocale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
      setLocale(newLocale);
      loadMessages(newLocale).then(setMessages);
    };
  }, []);

  if (!messages || Object.keys(messages).length === 0) return null; // o uno skeleton

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}