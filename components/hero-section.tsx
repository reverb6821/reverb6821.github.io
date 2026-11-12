"use client";

import type { CSSProperties, FC } from "react";
import type { Translation } from "@/types/portfolio";
import { SOCIALS } from "@/lib/data";
import TypeWriter from "./ui/typewriter";

interface HeroSectionProps {
  t: Translation;
  scrollTo: (id: string) => void;
}

const orbitron: CSSProperties = { fontFamily: "'Orbitron',sans-serif" };
const mono: CSSProperties = { fontFamily: "'Share Tech Mono',monospace" };
const btnReset: CSSProperties = { background: "none", border: "none", cursor: "none", padding: 0 };

const HeroSection: FC<HeroSectionProps> = ({ t, scrollTo }) => (
  <section
    id="home"
    tabIndex={-1}
    className="relative flex flex-col justify-center mx-auto hero-viewport"
    style={{
      padding: "100px clamp(16px,4vw,48px) 60px",
      maxWidth: 1100,
      zIndex: 2,
      animation: "fadeUp 0.7s ease-out both",
      outline: "none",
    }}
  >
    {/* Status bar */}
    <div className="flex items-center" style={{ gap: 16, marginBottom: 52 }}>
      <div className="flex items-center" style={{ gap: 8, border: "1px solid #0D2A44", padding: "5px 14px" }}>
        <div
          className="rounded-full"
          style={{ width: 6, height: 6, background: "#00FFD1", animation: "pulse 1.8s ease-in-out infinite", boxShadow: "0 0 7px #00FFD1" }}
        />
        <span style={{ ...mono, fontSize: 9, color: "#00FFD1", letterSpacing: 2.5 }}>{t.status}</span>
      </div>
      <div className="flex-1" style={{ height: 1, background: "linear-gradient(90deg,#0D2A44,transparent)" }} />
      <span style={{ ...mono, fontSize: 9, color: "#4A7A9B", letterSpacing: 2 }}>LAT 41.2278 N · LON 14.5278 E</span>
    </div>

    <div style={{ ...mono, fontSize: 10, color: "#4A7A9B", letterSpacing: 3, marginBottom: 16 }}>{t.unitLine}</div>

    <h1
      style={{ ...orbitron, fontWeight: 900, fontSize: "clamp(36px,6.5vw,80px)", lineHeight: 1.05, letterSpacing: 2, marginBottom: 18, textShadow: "0 0 40px #00FFD133" }}
    >
      Giuseppe<br />Gigliotti
    </h1>

    <div style={{ ...orbitron, fontSize: "clamp(14px,2vw,22px)", color: "#00FFD1", marginBottom: 32, letterSpacing: 2, textShadow: "0 0 16px #00FFD177" }}>
      {"~/ "}<TypeWriter strings={t.typewriter} />
    </div>

    <p style={{ ...mono, fontSize: 13, color: "#4A7A9B", lineHeight: 1.9, maxWidth: 560, marginBottom: 14 }}>
      {t.heroBio1[0]}<span style={{ color: "#C8E8FF" }}>{t.heroBio1[1]}</span>{t.heroBio1[2]}
    </p>
    <p style={{ ...mono, fontSize: 13, color: "#4A7A9B", lineHeight: 1.9, maxWidth: 560, marginBottom: 44 }}>
      {t.heroBio2[0]}<span style={{ color: "#C8E8FF" }}>{t.heroBio2[1]}</span>{t.heroBio2[2]}
    </p>

    <div className="flex flex-wrap" style={{ gap: 14 }}>
      <button
        data-hover
        onClick={() => scrollTo("esperienza")}
        style={{ ...orbitron, ...btnReset, color: "#00FFD1", border: "1px solid #00FFD1", padding: "13px 28px", fontWeight: 700, fontSize: 10, letterSpacing: 3, animation: "glow 3s ease-in-out infinite" }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#00FFD1"; e.currentTarget.style.color = "#020810"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#00FFD1"; }}
      >
        {t.heroBtn}
      </button>
      <a
        href={SOCIALS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        data-hover
        className="flex items-center no-underline"
        style={{ ...orbitron, color: "#4A7A9B", border: "1px solid #0D2A44", padding: "13px 24px", fontSize: 10, letterSpacing: 3, cursor: "none", transition: "all 0.2s" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#4A7A9B"; e.currentTarget.style.color = "#C8E8FF"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#0D2A44"; e.currentTarget.style.color = "#4A7A9B"; }}
      >
        LINKEDIN
      </a>
    </div>

    <div className="absolute flex justify-between" style={{ bottom: 32, left: "clamp(16px,4vw,48px)", right: "clamp(16px,4vw,48px)" }}>
      <span style={{ ...mono, fontSize: 9, color: "#4A7A9B55", letterSpacing: 3 }}>{t.heroScroll}</span>
      <span style={{ ...mono, fontSize: 9, color: "#4A7A9B55", letterSpacing: 2 }}>REACT · VUE · TYPESCRIPT · NODE.JS</span>
    </div>
  </section>
);

export default HeroSection;
