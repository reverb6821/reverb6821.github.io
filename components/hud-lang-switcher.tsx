"use client";

import { useTransition, type CSSProperties, type FC } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { setLocaleAction } from "@/i18n/actions";
import type { Locale } from "@/i18n/config";

interface HudLangSwitcherProps {
  /** Extra inline styles for the button (e.g. marginLeft). */
  style?: CSSProperties;
  /** Render the full label instead of the 2-letter code — used in the mobile drawer. */
  verbose?: boolean;
}

const mono: CSSProperties = { fontFamily: "'Share Tech Mono',monospace" };
const btnReset: CSSProperties = {
  background: "none",
  border: "none",
  cursor: "none",
  padding: 0,
};

const LABELS: Record<Locale, { short: string; full: string }> = {
  it: { short: "IT", full: "Passa all'Inglese" },
  en: { short: "EM", full: "Switch to Italian" },
};

const NEXT_LOCALE: Record<Locale, Locale> = { it: "en", en: "it" };

const HudLangSwitcher: FC<HudLangSwitcherProps> = ({ style, verbose = false }) => {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSwitch() {
    const nextLocale = NEXT_LOCALE[currentLocale];
    startTransition(async () => {
      await setLocaleAction(nextLocale);
      router.refresh();
    });
  }

  const label = LABELS[currentLocale];

  return (
    <button
      data-hover
      onClick={handleSwitch}
      disabled={isPending}
      aria-label={label.full}
      style={
        verbose
          ? {
              ...btnReset,
              ...mono,
              fontSize: 11,
              letterSpacing: 3,
              color: isPending ? "#2A5A7B" : "#4A7A9B",
              padding: "14px 0",
              textAlign: "left",
              borderTop: "1px solid #0D2A4433",
              marginTop: 4,
              opacity: isPending ? 0.5 : 1,
              transition: "color 0.2s, opacity 0.2s",
              ...style,
            }
          : {
              ...btnReset,
              ...mono,
              fontSize: 10,
              letterSpacing: 2,
              color: isPending ? "#2A5A7B" : "#4A7A9B",
              border: "1px solid #0D2A44",
              padding: "4px 10px",
              transition: "all 0.2s",
              opacity: isPending ? 0.5 : 1,
              marginLeft: 8,
              ...style,
            }
      }
      onMouseEnter={(e) => {
        if (isPending) return;
        if (verbose) {
          e.currentTarget.style.color = "#00FFD1";
        } else {
          e.currentTarget.style.borderColor = "#00FFD1";
          e.currentTarget.style.color = "#00FFD1";
        }
      }}
      onMouseLeave={(e) => {
        if (verbose) {
          e.currentTarget.style.color = "#4A7A9B";
        } else {
          e.currentTarget.style.borderColor = "#0D2A44";
          e.currentTarget.style.color = "#4A7A9B";
        }
      }}
    >
      {verbose ? (
        <>
          <span style={{ color: "#00FFD133", fontSize: 9, marginRight: 10 }}>↺</span>
          {label.full}
        </>
      ) : (
        label.short
      )}
    </button>
  );
};

export default HudLangSwitcher;
