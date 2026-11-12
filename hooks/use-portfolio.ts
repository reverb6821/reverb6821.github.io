"use client";

import { useState, useEffect, useRef } from "react";
import { NAV } from "@/lib/data";

/**
 * Root hook for the Portfolio page.
 *
 * Language state has been removed — it is now handled server-side by
 * next-intl (request.ts cookie logic) and client-side by HudLangSwitcher
 * via setLocaleAction + router.refresh().
 *
 * Each section component receives the translation object `t` from the
 * parent page, which calls `useTranslations('portfolio')` from next-intl.
 */
export function usePortfolio() {
  // ── Scroll ────────────────────────────────────────────────────────────────
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Custom cursor ─────────────────────────────────────────────────────────
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [cursorHover, setCursorHover] = useState(false);
  const [reduceCursorFx, setReduceCursorFx] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceCursorFx(coarse.matches || reduced.matches);
    update();
    coarse.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      coarse.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (reduceCursorFx) return;
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) =>
      setCursorHover(!!(e.target as Element).closest("[data-hover]"));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [reduceCursorFx]);

  // ── Active nav section ────────────────────────────────────────────────────
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const ids = ["home", ...NAV];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ── Mobile drawer ─────────────────────────────────────────────────────────
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [drawerH, setDrawerH] = useState(0);

  useEffect(() => {
    if (!drawerRef.current || typeof ResizeObserver === "undefined") return;
    const el = drawerRef.current;
    const ro = new ResizeObserver(() => setDrawerH(el.scrollHeight));
    ro.observe(el);
    setDrawerH(el.scrollHeight);
    return () => ro.disconnect();
  }, []);

  // ── Smooth scroll helper ──────────────────────────────────────────────────
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return {
    scrolled,
    cursor, cursorHover, reduceCursorFx,
    activeSection,
    mobileOpen, setMobileOpen, drawerRef, drawerH,
    scrollTo,
  };
}
