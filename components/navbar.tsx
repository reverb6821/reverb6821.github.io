"use client";

import type { CSSProperties, FC, RefObject } from "react";
import type { Translation } from "@/types/portfolio";
import { NAV } from "@/lib/data";
import HudLangSwitcher from "./hud-lang-switcher";

interface NavBarProps {
  t: Translation;
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  drawerRef: RefObject<HTMLDivElement>;
  drawerH: number;
  activeSection: string;
  scrollTo: (id: string) => void;
}

const orbitron: CSSProperties = { fontFamily: "'Orbitron',sans-serif" };
const mono: CSSProperties = { fontFamily: "'Share Tech Mono',monospace" };
const btnReset: CSSProperties = { background: "none", border: "none", cursor: "none", padding: 0 };

const NavBar: FC<NavBarProps> = ({
  t,
  scrolled, mobileOpen, setMobileOpen,
  drawerRef, drawerH,
  activeSection, scrollTo,
}) => (
  <nav
    className="fixed top-0 left-0 right-0 transition-all duration-300"
    style={{
      zIndex: 100,
      background: scrolled || mobileOpen ? "rgba(2,8,16,0.96)" : "transparent",
      borderBottom: scrolled || mobileOpen ? "1px solid #0D2A4466" : "none",
      backdropFilter: scrolled || mobileOpen ? "blur(16px)" : "none",
    }}
  >
    {/* ── Top bar ── */}
    <div
      className="flex items-center justify-between"
      style={{ padding: "0 clamp(16px,4vw,40px)", height: 58 }}
    >
      {/* Logo */}
      <button
        data-hover
        onClick={() => scrollTo("home")}
        style={{ ...btnReset, display: "flex", alignItems: "center", gap: 10 }}
        aria-label="Torna all'inizio"
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: 28, height: 28,
            border: "1px solid #00FFD1",
            transform: "rotate(45deg)",
            boxShadow: "0 0 10px #00FFD133",
          }}
        >
          <div style={{ width: 12, height: 12, background: "#00FFD1", transform: "rotate(-45deg)" }} />
        </div>
        <span
          style={{
            ...orbitron,
            fontWeight: 900, fontSize: 13, letterSpacing: 3,
            color: "#00FFD1", textShadow: "0 0 14px #00FFD177",
          }}
        >
          GG.DEV
        </span>
      </button>

      {/* Desktop links + lang switcher */}
      <div className="flex nav-desktop" style={{ gap: 28, alignItems: "center" }}>
        {NAV.map((item, i) => {
          const isActive = activeSection === item;
          const label = t.navLabels[item] ?? item;
          return (
            <button
              key={item}
              data-hover
              onClick={() => scrollTo(item)}
              aria-current={isActive ? "true" : undefined}
              style={{
                ...btnReset, ...mono,
                fontSize: 11, letterSpacing: 2,
                color: isActive ? "#00FFD1" : "#4A7A9B",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = "#00FFD1"; }}
              onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = isActive ? "#00FFD1" : "#4A7A9B"; }}
            >
              <span style={{ color: "#00FFD155", fontSize: 9, marginRight: 6 }}>{`0${i + 1}`}</span>
              {label}
            </button>
          );
        })}

        {/* Desktop lang switcher — compact "EN" / "IT" button */}
        <HudLangSwitcher />
      </div>

      {/* Hamburger */}
      <button
        className="flex-col items-center justify-center nav-hamburger"
        onClick={() => setMobileOpen((v) => !v)}
        style={{ ...btnReset, display: "none", gap: 5, width: 36, height: 36, padding: 6 }}
        aria-label="Menu"
        aria-expanded={mobileOpen}
      >
        <div
          className="transition-all duration-200"
          style={{
            width: 22, height: 1,
            background: mobileOpen ? "#00FFD1" : "#C8E8FF",
            transform: mobileOpen ? "rotate(45deg) translate(4px,4px)" : "none",
            transformOrigin: "center",
          }}
        />
        <div
          className="transition-all duration-200"
          style={{ width: 22, height: 1, background: "#C8E8FF", opacity: mobileOpen ? 0 : 1 }}
        />
        <div
          className="transition-all duration-200"
          style={{
            width: 22, height: 1,
            background: mobileOpen ? "#00FFD1" : "#C8E8FF",
            transform: mobileOpen ? "rotate(-45deg) translate(4px,-4px)" : "none",
            transformOrigin: "center",
          }}
        />
      </button>
    </div>

    {/* ── Mobile drawer ── */}
    <div
      className="overflow-hidden"
      style={{
        maxHeight: mobileOpen ? drawerH : 0,
        transition: mobileOpen
          ? "max-height 300ms var(--ease-out-quint)"
          : "max-height 200ms var(--ease-in-out-cubic)",
        borderTop: mobileOpen ? "1px solid #0D2A44" : "none",
      }}
    >
      <div ref={drawerRef} className="flex flex-col" style={{ padding: "12px clamp(16px,4vw,40px) 20px" }}>
        {NAV.map((item, i) => {
          const isActive = activeSection === item;
          const label = t.navLabels[item] ?? item;
          return (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              aria-current={isActive ? "true" : undefined}
              style={{
                ...btnReset, ...mono,
                fontSize: 13, letterSpacing: 3,
                color: isActive ? "#00FFD1" : "#4A7A9B",
                padding: "14px 0",
                borderBottom: "1px solid #0D2A4433",
                textAlign: "left",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#00FFD1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#00FFD1" : "#4A7A9B"; }}
            >
              <span style={{ color: "#00FFD133", fontSize: 9, marginRight: 10 }}>{`0${i + 1}`}</span>
              {label}
            </button>
          );
        })}

        {/* Mobile lang switcher — verbose "↺ Switch to English" */}
        <HudLangSwitcher verbose />
      </div>
    </div>
  </nav>
);

export default NavBar;
