"use client";

// app/not-found.tsx
// Nessun segmento [locale] nell'URL in questo progetto: la lingua viene
// risolta lato server (cookie/header) dentro il layout root, che avvolge
// anche questo file con NextIntlClientProvider — per questo useTranslations()
// funziona qui senza bisogno di route params.

import { type CSSProperties, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

function css(...objects: Array<CSSProperties | Record<string, unknown>>): CSSProperties {
  return Object.assign({}, ...objects) as CSSProperties;
}

interface HudCornersProps {
  children?: ReactNode;
  size?: number;
}

function HudCorners({ children, size }: HudCornersProps) {
  var s = size || 18;
  var color = "#00FFD133";
  var b: CSSProperties = { position: "absolute", width: s, height: s, border: "1px solid " + color };
  return (
    <div className="relative" style={{ padding: "clamp(28px,6vw,64px)" }}>
      <div className="absolute" style={css(b, { top: 0, left: 0, borderRight: "none", borderBottom: "none" })} />
      <div className="absolute" style={css(b, { top: 0, right: 0, borderLeft: "none", borderBottom: "none" })} />
      <div className="absolute" style={css(b, { bottom: 0, left: 0, borderRight: "none", borderTop: "none" })} />
      <div className="absolute" style={css(b, { bottom: 0, right: 0, borderLeft: "none", borderTop: "none" })} />
      {children}
    </div>
  );
}

var CSS: string = [
  "@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');",
  "*{box-sizing:border-box;margin:0;padding:0;}",
  "html{scroll-behavior:smooth;}",
  "@keyframes blink{0%,100%{opacity:1}50%{opacity:0.35}}",
  "@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}",
  "@keyframes glow{0%,100%{box-shadow:0 0 10px #00FFD122}50%{box-shadow:0 0 22px #00FFD166}}",
  // Glitch leggero: due copie del "404" traslate a scatti su assi opposti,
  // niente librerie — solo clip-path + transform su ::before/::after.
  "@keyframes glitchTop{0%,100%{clip-path:inset(0 0 60% 0);transform:translate(0,0)}20%{clip-path:inset(0 0 60% 0);transform:translate(-2px,-1px)}40%{clip-path:inset(0 0 60% 0);transform:translate(2px,1px)}60%{clip-path:inset(0 0 60% 0);transform:translate(-1px,0)}80%{clip-path:inset(0 0 60% 0);transform:translate(1px,-1px)}}",
  "@keyframes glitchBottom{0%,100%{clip-path:inset(60% 0 0 0);transform:translate(0,0)}25%{clip-path:inset(60% 0 0 0);transform:translate(2px,1px)}50%{clip-path:inset(60% 0 0 0);transform:translate(-2px,0)}75%{clip-path:inset(60% 0 0 0);transform:translate(1px,-1px)}}",
  ".glitch-wrap{position:relative;display:inline-block;}",
  ".glitch-wrap::before,.glitch-wrap::after{content:attr(data-text);position:absolute;left:0;top:0;width:100%;}",
  ".glitch-wrap::before{color:#FF2D6D;animation:glitchTop 2.6s infinite linear;opacity:0.7;}",
  ".glitch-wrap::after{color:#0066FF;animation:glitchBottom 3.1s infinite linear;opacity:0.7;}",
  "@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;}.glitch-wrap::before,.glitch-wrap::after{display:none;}}",
  "a[data-hover]:focus-visible, button[data-hover]:focus-visible{outline:1px solid #00FFD1;outline-offset:3px;}",
].join("\n");

export default function NotFound() {
  var router = useRouter();
  var t = useTranslations("notFound");

  var orbitron: CSSProperties = { fontFamily: "'Orbitron',sans-serif" };
  var mono: CSSProperties = { fontFamily: "'Share Tech Mono',monospace" };

  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#020810", color: "#C8E8FF", fontFamily: "'Share Tech Mono',monospace", padding: "24px" }}
    >
      <style>{CSS}</style>

      {/* griglia di sfondo, coerente con l'hero del portfolio */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative text-center" style={{ zIndex: 1, maxWidth: 560, animation: "fadeUp 0.6s ease-out both" }}>
        <HudCorners>
          <div style={css({}, mono, { fontSize: 10, color: "#4A7A9B", letterSpacing: 3, marginBottom: 20 })}>
            {t("eyebrow")}
          </div>

          <div
            className="glitch-wrap"
            data-text={t("code")}
            style={css({}, orbitron, {
              fontWeight: 900,
              fontSize: "clamp(72px,16vw,160px)",
              lineHeight: 1,
              letterSpacing: 4,
              color: "#00FFD1",
              textShadow: "0 0 40px #00FFD155",
              marginBottom: 20,
            })}
          >
            {t("code")}
          </div>

          <h1
            style={css({}, orbitron, {
              fontWeight: 700,
              fontSize: "clamp(18px,3vw,26px)",
              color: "#C8E8FF",
              letterSpacing: 1,
              marginBottom: 14,
            })}
          >
            {t("title")}
          </h1>

          <p style={css({}, mono, { fontSize: 13, color: "#4A7A9B", lineHeight: 1.8, marginBottom: 22 })}>
            {t("message")}
          </p>

          <div
            style={css({}, mono, {
              fontSize: 10,
              color: "#4A7A9B77",
              letterSpacing: 2,
              marginBottom: 36,
            })}
          >
            <span style={{ color: "#FF450099", marginRight: 6 }}>▸</span>
            {t("errorLine")}
          </div>

          <div className="flex flex-wrap items-center justify-center" style={{ gap: 14 }}>
            <a
              href="/"
              data-hover
              style={css({}, orbitron, {
                display: "inline-block",
                color: "#00FFD1",
                border: "1px solid #00FFD1",
                padding: "13px 28px",
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: 3,
                textDecoration: "none",
                animation: "glow 3s ease-in-out infinite",
                transition: "all 0.2s",
              })}
              onMouseEnter={function (e) {
                e.currentTarget.style.background = "#00FFD1";
                e.currentTarget.style.color = "#020810";
              }}
              onMouseLeave={function (e) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#00FFD1";
              }}
            >
              {t("cta")}
            </a>

            <button
              data-hover
              onClick={function () {
                router.back();
              }}
              style={css({}, mono, {
                background: "none",
                border: "none",
                color: "#4A7A9B",
                fontSize: 11,
                letterSpacing: 1.5,
                cursor: "pointer",
                padding: "13px 10px",
                transition: "color 0.2s",
              })}
              onMouseEnter={function (e) {
                e.currentTarget.style.color = "#C8E8FF";
              }}
              onMouseLeave={function (e) {
                e.currentTarget.style.color = "#4A7A9B";
              }}
            >
              {t("backLabel")}
            </button>
          </div>
        </HudCorners>
      </div>
    </div>
  );
}

// ─── Nota ────────────────────────────────────────────────────────────────────
// Un solo file basta in questa struttura (niente app/[locale]/not-found.tsx
// duplicato): Next.js lo usa per qualsiasi rotta non trovata sotto app/.