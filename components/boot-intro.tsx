"use client";

import { useState, useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import type { Translation, IntroLine } from "@/types/portfolio";

function css(...objects: Array<CSSProperties | Record<string, unknown>>): CSSProperties {
  return Object.assign({}, ...objects) as CSSProperties;
}

// ─── BOOT INTRO ──────────────────────────────────────────────────────────────
// Sequenza di avvio in stile terminale mostrata una volta per sessione.
// Saltabile (click, qualsiasi tasto tranne Tab, bottone). Disattivata del
// tutto con prefers-reduced-motion (vedi Portfolio).

function BootFrame({ children }: { children?: ReactNode }) {
  const b: CSSProperties = { position: "absolute", width: 16, height: 16, border: "1px solid #00FFD133" };
  return (
    <div className="relative" style={{ width: "100%", maxWidth: 460 }}>
      <div className="absolute" style={css(b, { top: 0, left: 0, borderRight: "none", borderBottom: "none" })} />
      <div className="absolute" style={css(b, { top: 0, right: 0, borderLeft: "none", borderBottom: "none" })} />
      <div className="absolute" style={css(b, { bottom: 0, left: 0, borderRight: "none", borderTop: "none" })} />
      <div className="absolute" style={css(b, { bottom: 0, right: 0, borderLeft: "none", borderTop: "none" })} />
      {children}
    </div>
  );
}

interface BootIntroProps {
  t: Pick<Translation, "bootAria" | "bootProgress" | "bootSkip" | "bootLines">;
  onDone: () => void;
}

const BOOT_LINE_STEP = 420;  // ms tra una riga e la successiva
const BOOT_DURATION = 2400;  // ms per portare il contatore da 000 a 100
const BOOT_LEAVE = 450;      // ms di dissolvenza finale
const BOOT_LINE_WIDTH = 34;  // larghezza in caratteri fino allo status

export default function BootIntro({ t, onDone }: BootIntroProps) {
  const lines = t.bootLines;
  const [visible, setVisible] = useState(0);
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(false);
  const skipRef = useRef<HTMLButtonElement>(null);
  const orbitron: CSSProperties = { fontFamily: "var(--font-orbitron), 'Orbitron', sans-serif" };
  const mono: CSSProperties = { fontFamily: "var(--font-share-tech-mono), 'Share Tech Mono', monospace" };

  const finish = (): void => {
    if (doneRef.current) return;
    doneRef.current = true;
    setProgress(100);
    setVisible(lines.length);
    setLeaving(true);
    setTimeout(onDone, BOOT_LEAVE);
  };

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (skipRef.current) skipRef.current.focus();

    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((_line, i) => {
      timers.push(setTimeout(() => { setVisible(i + 1); }, 200 + i * BOOT_LINE_STEP));
    });

    const start = Date.now();
    const iv = setInterval(() => {
      const p = Math.min(100, Math.floor(((Date.now() - start) / BOOT_DURATION) * 100));
      setProgress(p);
      if (p >= 100) { clearInterval(iv); finish(); }
    }, 40);

    const onKey = (e: KeyboardEvent) => { if (e.key !== "Tab") finish(); };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      timers.forEach(clearTimeout);
      clearInterval(iv);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pad = ("00" + progress).slice(-3);

  return (
    <div role="dialog" aria-modal="true" aria-label={t.bootAria} onClick={finish}
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 9998, background: "#020810", padding: 24, opacity: leaving ? 0 : 1, transition: "opacity " + BOOT_LEAVE + "ms ease-out", pointerEvents: leaving ? "none" : "auto" }}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      <BootFrame>
        <div style={{ padding: "clamp(22px,5vw,36px)" }}>
          <div style={{ minHeight: lines.length * 24 }}>
            {lines.map((l, i) => {
              if (i >= visible) return null;
              const n = Math.max(3, BOOT_LINE_WIDTH - l.text.length - l.status.length);
              const isLast = i === visible - 1 && !leaving;
              return (
                <div key={i} style={css({}, mono, { fontSize: "clamp(10px,2.9vw,12px)", color: "#4A7A9B", letterSpacing: 0.5, lineHeight: 2, whiteSpace: "nowrap", animation: "fadeUp 0.25s ease-out both" })}>
                  <span style={{ color: "#00FFD155" }}>{"> "}</span>{l.text}
                  {l.status ? (
                    <span>{" " + ".".repeat(n) + " "}<span style={{ color: "#00FFD1", textShadow: "0 0 10px #00FFD177" }}>{l.status}</span></span>
                  ) : null}
                  {isLast ? <span style={{ color: "#00FFD1", marginLeft: 6, animation: "blink 1s step-end infinite" }}>█</span> : null}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 22 }}>
            <div className="flex items-baseline justify-between" style={{ marginBottom: 10 }}>
              <span style={css({}, orbitron, { fontSize: 10, letterSpacing: 3, color: "#4A7A9B" })}>{t.bootProgress}</span>
              <span style={css({}, orbitron, { fontSize: 22, fontWeight: 900, color: "#00FFD1", letterSpacing: 2, textShadow: "0 0 16px #00FFD177", fontVariantNumeric: "tabular-nums" })}>{pad}</span>
            </div>
            <div style={{ height: 2, background: "#0D2A44" }}>
              <div style={{ height: "100%", width: progress + "%", background: "#00FFD1", boxShadow: "0 0 10px #00FFD1" }} />
            </div>
          </div>
        </div>
      </BootFrame>

      <button ref={skipRef} data-hover type="button"
        style={css({}, mono, { position: "absolute", bottom: 28, background: "none", border: "1px solid #0D2A44", color: "#4A7A9B", fontSize: 10, letterSpacing: 3, padding: "8px 14px", cursor: "none" })}>
        {t.bootSkip}
      </button>
    </div>
  );
}