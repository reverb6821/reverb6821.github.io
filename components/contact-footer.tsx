"use client";

import type { CSSProperties, FC } from "react";
import type { Translation } from "@/types/portfolio";
import { SOCIALS } from "@/lib/data";

interface ContactFooterProps {
  t: Translation;
}

const orbitron: CSSProperties = { fontFamily: "'Orbitron',sans-serif" };
const mono: CSSProperties = { fontFamily: "'Share Tech Mono',monospace" };

// Claude icon — path from Simple Icons (simpleicons.org), CC0 license
const ClaudeIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="currentColor"
    style={{ display: "inline-block", verticalAlign: "middle", margin: "0 3px 1px" }}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"><path d="M21 10.5h3v3h-3v3h-1.5v3H18v-3h-1.5v3H15v-3H9v3H7.5v-3H6v3H4.5v-3H3v-3H0v-3h3v-6h18Zm-15 0h1.5v-3H6Zm10.5 0H18v-3h-1.5z" /></svg>

);

const ContactFooter: FC<ContactFooterProps> = ({ t }) => (
  <footer
    id="contatti"
    className="relative text-center"
    style={{ padding: "90px clamp(16px,4vw,48px) 60px", borderTop: "1px solid #0D2A4466", zIndex: 2 }}
  >
    <div className="mx-auto" style={{ maxWidth: 700 }}>
      <div style={{ ...mono, fontSize: 9, color: "#4A7A9B", letterSpacing: 4, marginBottom: 16 }}>
        {t.contactMod}
      </div>

      <h2
        style={{ ...orbitron, fontWeight: 900, fontSize: "clamp(28px,4vw,52px)", color: "#C8E8FF", letterSpacing: 2, marginBottom: 12, lineHeight: 1.15 }}
      >
        Giuseppe<br />
        <span style={{ color: "#00FFD1", textShadow: "0 0 24px #00FFD177" }}>Gigliotti</span>
      </h2>

      <div style={{ ...mono, fontSize: 10, color: "#4A7A9B", letterSpacing: 3, marginBottom: 40 }}>
        {t.location}
      </div>

      <div className="flex flex-wrap justify-center" style={{ gap: 12, marginBottom: 48 }}>
        {(
          [
            { label: t.linkedin, href: SOCIALS.linkedin },
            { label: t.github, href: SOCIALS.github },
            { label: t.codeberg, href: SOCIALS.codeberg },
            { label: "Mastodon", href: "https://mastodon.uno/@reverb6821" },
          ] as { label: string; href: string }[]
        ).map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer me"
            data-hover
            className="no-underline transition-all duration-150"
            style={{ ...mono, fontSize: 11, color: "#4A7A9B", border: "1px solid #0D2A44", padding: "10px 18px", letterSpacing: 1, cursor: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00FFD1"; e.currentTarget.style.color = "#00FFD1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#0D2A44"; e.currentTarget.style.color = "#4A7A9B"; }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div style={{ ...mono, fontSize: 10, color: "#4A7A9B33", letterSpacing: 2, marginBottom: 10 }}>
        {t.copyright}
      </div>

      {/* Made with ♥ and Claude */}
      <div className="flex items-center justify-center" style={{ gap: 1, color: "#4A7A9B33" }}>
        <span style={{ ...mono, fontSize: 9, letterSpacing: 1.5 }}>MADE WITH</span>
        <span style={{ fontSize: 10, margin: "0 4px" }}>♥</span>
        <span style={{ ...mono, fontSize: 9, letterSpacing: 1.5 }}>AND</span>
        <ClaudeIcon />
      </div>
    </div>
  </footer>
);

export default ContactFooter;