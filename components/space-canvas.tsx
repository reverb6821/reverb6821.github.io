"use client";

import { useEffect, useRef, type FC } from "react";
import type { Star } from "@/types/portfolio";
import { PLANET_CONFIGS, PLANET_SECTIONS } from "@/lib/canvas/config";
import { drawUFO, ufoState, updateUFO } from "@/lib/canvas/ufo";

const SpaceCanvas: FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animId: number;
    let scrollY = 0;
    const triggers = new Array<number>(PLANET_SECTIONS.length).fill(0);

    function computeTriggers(): void {
      PLANET_SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          triggers[i] = rect.top + window.scrollY + rect.height * 0.5 - window.innerHeight * 0.5;
        }
      });
    }

    function resize(): void {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      computeTriggers();
    }

    resize();
    window.addEventListener("resize", resize);
    setTimeout(computeTriggers, 600);
    setTimeout(computeTriggers, 1800);

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      if (reduceMotion) loop();
    }, { passive: true });

    const stars: Star[] = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.0 + 0.2,
      speed: Math.random() * 0.20 + 0.03,
      phase: Math.random() * Math.PI * 2,
      op: Math.random() * 0.6 + 0.25,
    }));

    function loop(): void {
      const cw = canvas.width, ch = canvas.height;
      const t = Date.now() / 1000;
      ctx.clearRect(0, 0, cw, ch);

      stars.forEach((s) => {
        const a = s.op * (0.5 + 0.5 * Math.sin(t * 1.2 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,232,255,${a})`;
        ctx.fill();
        s.y += s.speed;
        if (s.y > ch) { s.y = 0; s.x = Math.random() * cw; }
      });

      PLANET_CONFIGS.forEach((p, i) => {
        const viewY = ch * 0.5 + (triggers[i] - scrollY) * p.speed;
        if (viewY + p.r * 3 < 0 || viewY - p.r * 3 > ch) return;
        p.draw(ctx, cw * p.xFrac, viewY, p.r, t);
      });

      if (!reduceMotion) {
        updateUFO(cw, ch, t);
        if (ufoState.active && ufoState.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = ufoState.opacity;
          drawUFO(ctx, ufoState.x, ufoState.y, ufoState.r, t);
          ctx.restore();
        }
        animId = requestAnimationFrame(loop);
      }
    }

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default SpaceCanvas;
