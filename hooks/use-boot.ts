"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-boot-seen";

/** true = la boot parte una sola volta per sessione; false = a ogni caricamento. */
const ONCE_PER_SESSION = false;

/**
 * Boot intro: parte attiva. Si salta solo se:
 * - l'utente ha prefers-reduced-motion (è un filmato automatico), oppure
 * - ONCE_PER_SESSION è attivo e l'ha già vista in questa sessione.
 * `?boot` nell'URL la forza sempre (utile per provarla).
 */
export function useBoot() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const force = new URLSearchParams(window.location.search).has("boot");
    if (force) return;

    let seen = false;
    if (ONCE_PER_SESSION) {
      try {
        seen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
      } catch {
        /* storage non disponibile */
      }
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) setBooting(false);
  }, []);

  const finishBoot = () => {
    if (ONCE_PER_SESSION) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* storage non disponibile */
      }
    }
    setBooting(false);
  };

  return { booting, finishBoot };
}