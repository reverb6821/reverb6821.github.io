"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import type { Translation, IntroLine } from "@/types/portfolio";
import { COCKPIT_SVG } from "./cockpit-svg";

function css(...objects: Array<CSSProperties | Record<string, unknown>>): CSSProperties {
  return Object.assign({}, ...objects) as CSSProperties;
}

// ─── SCROLL INTRO — COCKPIT ──────────────────────────────────────────────────
// Schermata sticky con la cabina di un'astronave. Con lo scroll: gli strumenti
// si accendono, l'OS di navigazione "boota" sul display centrale (testo scritto
// in base alla % di scroll), compare il mirino di puntamento e infine la cabina
// "salta" in avanti (zoom + dissolvenza) verso l'hero. Tutto è aggiornato via
// DOM/ref (niente setState a ogni scroll). Con prefers-reduced-motion resta attiva ma senza lo zoom finale.
// Il blocco a schermo NON usa position:sticky (si rompe con overflow su un
// antenato): lo stage passa da absolute a fixed e viceversa via JS. Se "fixed"
// non si aggancia al viewport (antenato con transform/filter) si passa da solo a
// un ripiego con translate3d.
interface IntroLabels {
  label: string;
  locked: string;
  open: string;
  lines: IntroLine[];
}

const COCKPIT_LINE_WIDTH = 30;
const BOOT_MS = 3200;      // durata della boot dell'OS di navigazione (a tempo, non legata allo scroll)
const BOOT_TRIGGER = 0.02; // quota di scroll nell'intro che avvia la boot
const LOCK_SCROLL = true;  // false = la boot non blocca lo scroll (utile se un'altra libreria gestisce lo scroll)
const ZOOM_START = 0.5;    // da qui in poi lo scroll guida lo zoom verso l'hero

function clamp01(x: number): number { return Math.min(1, Math.max(0, x)); }

interface ScrollIntroProps {
  t: Pick<Translation, "introAria" | "introEyebrow" | "introHint" | "introLabel" | "introLocked" | "introOpen" | "introLines">;
}

export default function ScrollIntro({ t }: ScrollIntroProps) {
  const wrapRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const readRef = useRef<HTMLDivElement>(null);
  const applyRef = useRef<(() => void) | null>(null);
  const lines = t.introLines;
  const labels = useRef<IntroLabels>({ label: "", locked: "", open: "", lines: [] });
  labels.current = { label: t.introLabel, locked: t.introLocked, open: t.introOpen, lines: lines };
  const mono: CSSProperties = { fontFamily: "var(--font-share-tech-mono), 'Share Tech Mono', monospace" };

  useEffect(() => {
    // Con prefers-reduced-motion l'intro resta attiva (è guidata dallo scroll, quindi
    // dall'utente) ma senza lo zoom finale.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stage = stageRef.current;
    if (!stage) return;
    // L'SVG viene iniettato qui (non da React con dangerouslySetInnerHTML): così
    // nessun re-render o hydration lo tocca. Se comunque qualcosa lo svuota o lo
    // sostituisce, ensure() lo rimette e rinfresca i riferimenti ai nodi animati.
    let svgRoot: Element | null = null;
    let leds: SVGElement[] = [];
    let needles: SVGElement[] = [];
    let textLines: SVGElement[] = [];
    let fades: SVGElement[] = [];
    let bar: SVGElement | null = null;
    let pct: SVGElement | null = null;
    let glow: SVGElement | null = null;
    let screenEl: SVGElement | null = null;
    const ensure = (): void => {
      const ship = shipRef.current;
      if (!ship) return;
      if (!ship.firstElementChild) ship.innerHTML = COCKPIT_SVG;
      if (ship.firstElementChild === svgRoot) return;
      svgRoot = ship.firstElementChild;
      leds = Array.from(ship.querySelectorAll<SVGElement>("[data-led]"));
      needles = Array.from(ship.querySelectorAll<SVGElement>("[data-needle]"));
      textLines = Array.from(ship.querySelectorAll<SVGElement>("[data-line]"));
      fades = Array.from(ship.querySelectorAll<SVGElement>("[data-fade]"));
      bar = ship.querySelector<SVGElement>("[data-bar]");
      pct = ship.querySelector<SVGElement>("[data-pct]");
      glow = ship.querySelector<SVGElement>("[data-glow]");
      screenEl = ship.querySelector<SVGElement>("[data-screen]");
    };
    ensure();
    let raf = 0;
    let pin: "fixed" | "transform" = "fixed";

    // Boot a tempo: parte al primo scroll nell'intro e poi va avanti da sola. Finché
    // gira, lo scroll resta fermo (altrimenti con un colpo di dito la si salta in
    // pochi fotogrammi); a fine boot lo scroll guida lo zoom.
    let started = false;
    let initialised = false;
    let bootStart = 0;
    let bt = 0; // progresso della boot 0..1
    let locked = false;
    let lockY = 0;
    let loop = 0;
    let scrollEvents = 0;
    // ?debug nell'URL: pannello con i valori in tempo reale (per capire cosa non va)
    let dbg: HTMLDivElement | null = null;
    if (new URLSearchParams(window.location.search).has("debug")) {
      dbg = document.createElement("div");
      dbg.style.cssText = "position:fixed;left:6px;top:70px;z-index:99999;background:rgba(0,0,0,.8);color:#0f8;font:10px/1.35 monospace;padding:6px;pointer-events:none;white-space:pre";
      document.body.appendChild(dbg);
    }
    const stopEvent = (e: Event): void => { if (e.cancelable) e.preventDefault(); };
    const stopKey = (e: KeyboardEvent): void => {
      if ([" ", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(e.key)) e.preventDefault();
    };
    const lock = (y: number): void => {
      if (locked || !LOCK_SCROLL) return;
      locked = true;
      lockY = y;
      window.addEventListener("wheel", stopEvent, { passive: false });
      window.addEventListener("touchmove", stopEvent, { passive: false });
      window.addEventListener("keydown", stopKey);
    };
    const unlock = (): void => {
      if (!locked) return;
      locked = false;
      window.removeEventListener("wheel", stopEvent);
      window.removeEventListener("touchmove", stopEvent);
      window.removeEventListener("keydown", stopKey);
    };
    const tick = (): void => {
      apply();
      if (bt < 1) loop = requestAnimationFrame(tick);
    };

    const apply = (): void => {
      ensure();
      const wrap = wrapRef.current;
      if (!wrap) return;
      const total = wrap.offsetHeight - stage!.offsetHeight;
      const y = -wrap.getBoundingClientRect().top;
      // blocco a schermo: prima/dopo la sezione lo stage è absolute, in mezzo fixed
      const pinned = y > 0 && y < total;
      if (pin === "fixed") {
        stage!.style.transform = "";
        stage!.style.position = pinned ? "fixed" : "absolute";
        stage!.style.top = y >= total ? total + "px" : "0px";
        // Se un antenato ha transform/filter/will-change, "fixed" non si aggancia al
        // viewport e lo stage scorrerebbe via: lo rileviamo e passiamo al ripiego.
        if (pinned && Math.abs(stage!.getBoundingClientRect().top) > 1) pin = "transform";
      }
      if (pin === "transform") {
        // Ripiego: stage assoluto, traslato dello scroll corrente (funziona ovunque).
        stage!.style.position = "absolute";
        stage!.style.top = "0px";
        stage!.style.transform = "translate3d(0," + Math.min(Math.max(y, 0), total) + "px,0)";
      }
      const p = total > 0 ? clamp01(y / total) : 1;

      if (!initialised) {
        initialised = true;
        if (p > 0.3) { started = true; bt = 1; } // pagina ripristinata a metà: niente boot
      }
      if (!started && p > BOOT_TRIGGER) {
        started = true;
        bootStart = performance.now();
        // riporta lo scroll subito dopo l'inizio dell'intro, così la boot si vede tutta
        lock(Math.round(window.scrollY - y + total * 0.03));
        loop = requestAnimationFrame(tick);
      }
      if (locked && Math.abs(window.scrollY - lockY) > 1) window.scrollTo({ top: lockY, behavior: "instant" as ScrollBehavior });
      if (started && bt < 1) {
        bt = clamp01((performance.now() - bootStart) / BOOT_MS);
        if (bt >= 1) unlock();
      }
      if (locked && performance.now() - bootStart > BOOT_MS + 1500) unlock(); // sicurezza: non restare mai bloccati

      const b = bt;                                                            // avvio dell'OS di navigazione
      const j = bt >= 1 ? clamp01((p - ZOOM_START) / (1 - ZOOM_START)) : 0;   // salto verso l'hero
      const ej = reduced ? 0 : j * j;
      const now = performance.now();
      const L = labels.current;

      if (glow) glow.style.opacity = String(0.5 * clamp01(b * 8));
      if (screenEl) screenEl.style.opacity = String(clamp01(b * 6) * 0.92 * (0.96 + 0.04 * Math.sin(now / 60)));
      fades.forEach((el) => { el.style.opacity = String(clamp01((b - parseFloat(el.dataset.fade || "0")) * 12)); });
      textLines.forEach((el, i) => {
        const l = L.lines[i];
        if (!l) { el.textContent = ""; return; }
        const full = "> " + l.text + (l.status ? " " + ".".repeat(Math.max(3, COCKPIT_LINE_WIDTH - l.text.length - l.status.length)) + " " + l.status : "");
        el.textContent = full.slice(0, Math.floor(clamp01((b - i * 0.17) / 0.15) * full.length));
      });
      if (bar) bar.setAttribute("width", String(360 * b));
      if (pct) pct.textContent = ("00" + Math.round(b * 100)).slice(-3) + "%";
      leds.forEach((el) => { el.style.opacity = String(0.12 + 0.88 * clamp01((b - parseFloat(el.dataset.led || "0")) * 14)); });
      needles.forEach((el) => {
        const k = parseFloat(el.dataset.k || "1");
        const a = -130 + 150 * k * (1 - Math.pow(1 - b, 2)) + (b > 0.5 ? Math.sin(now / 250 + k * 3) * 2.5 : 0);
        el.setAttribute("transform", "rotate(" + a + " " + el.dataset.cx + " " + el.dataset.cy + ")");
      });

      if (shipRef.current) {
        const fade = String(1 - clamp01((j - 0.55) / 0.45));
        shipRef.current.style.transform = "scale(" + (1 + ej * 2.4) + ")"; // zoom dentro lo schermo
        shipRef.current.style.opacity = fade;
        if (bgRef.current) bgRef.current.style.opacity = fade;
      }
      const o = 1 - clamp01(Math.max(p / 0.12, bt * 5));
      if (hintRef.current) hintRef.current.style.opacity = String(o);
      if (dbg) {
        dbg.textContent =
          "scrollY " + Math.round(window.scrollY) + "   eventi scroll " + scrollEvents +
          "\ny intro " + Math.round(y) + " / " + Math.round(total) + "   p " + p.toFixed(2) +
          "\nstarted " + started + "  locked " + locked + "  bt " + bt.toFixed(2) +
          "\npin " + pin + "  stageTop " + Math.round(stage!.getBoundingClientRect().top) +
          "\nnodi led " + leds.length + " righe " + textLines.length + " bar " + !!bar + " pct " + !!pct + " connessi " + (!!pct && pct.isConnected) +
          "\nscroller " + (document.scrollingElement ? document.scrollingElement.tagName : "?") +
          "\nhtml ovf " + getComputedStyle(document.documentElement).overflowY + "  body ovf " + getComputedStyle(document.body).overflowY;
      }
      if (readRef.current) {
        readRef.current.textContent = L.label + " " + ("00" + Math.round(bt * 100)).slice(-3) + "%  X " + (ej * 1.8).toFixed(2) + "  Y " + (-ej * 0.6).toFixed(2) + "  Z " + (ej * 12).toFixed(2) + "  " + (bt >= 1 ? L.open : L.locked);
      }
    };
    applyRef.current = apply;
    const onScroll = (): void => { scrollEvents++; if (!raf) raf = requestAnimationFrame(() => { raf = 0; apply(); }); };
    window.addEventListener("scroll", onScroll, { passive: true, capture: true }); // capture: prende lo scroll anche da contenitori interni
    window.addEventListener("resize", apply);
    apply();
    return () => {
      if (dbg) dbg.remove();
      unlock();
      if (loop) cancelAnimationFrame(loop);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", apply);
    };
  }, []);

  // Cambio lingua: riscrive subito schermo e readout senza aspettare uno scroll.
  const labelKey = t.introLabel + t.introLocked + t.introOpen + lines.map((l) => { return l.text + l.status; }).join("|");
  useEffect(() => { if (applyRef.current) applyRef.current(); }, [labelKey]);

  return (
    <section ref={wrapRef} id="intro" aria-label={t.introAria} style={{ position: "relative", height: "200vh", zIndex: 3 }}>
      <div ref={stageRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", overflow: "hidden", pointerEvents: "none" }}>
        <div ref={bgRef} className="absolute inset-0" style={{ background: "linear-gradient(#04070a,#0a0e12)" }} />
        {/* eyebrow + hint: il contenitore sfuma con lo scroll (la pulsazione sta sul figlio, altrimenti sovrascrive l'opacity) */}
        <div ref={hintRef} className="absolute text-center" style={{ top: 76, left: 0, right: 0 }}>
          <div style={css({}, mono, { fontSize: 10, color: "#4A7A9B", letterSpacing: 4 })}>{t.introEyebrow}</div>
          <div style={css({}, mono, { marginTop: 12, fontSize: 11, color: "#00FFD1", letterSpacing: 4, animation: "pulse 2s ease-in-out infinite" })}>{t.introHint + " ↓"}</div>
        </div>

        <div className="absolute inset-0 flex justify-center items-end">
          <div ref={shipRef} style={{ flexShrink: 0, width: "min(max(100%, 130vh), 171vh)", transformOrigin: "50% 30%", willChange: "transform, opacity" }} />
        </div>

        <div ref={readRef} className="absolute text-center" style={css({}, mono, { left: 0, right: 0, bottom: 12, fontSize: 10, color: "#4A7A9B", letterSpacing: 2, whiteSpace: "nowrap" })} />
      </div>
    </section>
  );
}