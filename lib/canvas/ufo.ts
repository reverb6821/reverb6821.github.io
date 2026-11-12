import type { UfoState } from "@/types/portfolio";

export const ufoState: UfoState = {
  active: false, x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0,
  r: 22, opacity: 0, phase: "idle", nextAppear: 6.0, lastT: 0,
};

export function updateUFO(cw: number, ch: number, t: number): void {
  const u = ufoState;
  const dt = u.lastT > 0 ? Math.min(t - u.lastT, 0.1) : 0.016;
  u.lastT = t;

  if (u.phase === "idle") {
    u.nextAppear -= dt;
    if (u.nextAppear <= 0) {
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0)      { u.x = Math.random() * cw; u.y = -60; }
      else if (edge === 1) { u.x = cw + 60; u.y = Math.random() * ch; }
      else if (edge === 2) { u.x = Math.random() * cw; u.y = ch + 60; }
      else                 { u.x = -60; u.y = Math.random() * ch; }
      u.tx = cw * (0.15 + Math.random() * 0.70);
      u.ty = ch * (0.10 + Math.random() * 0.80);
      const dx = u.tx - u.x, dy = u.ty - u.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const spd = 90 + Math.random() * 60;
      u.vx = (dx / dist) * spd; u.vy = (dy / dist) * spd;
      u.opacity = 0; u.phase = "appearing"; u.active = true;
    }
  } else if (u.phase === "appearing") {
    u.opacity = Math.min(u.opacity + dt * 0.9, 1);
    u.x += u.vx * dt; u.y += u.vy * dt;
    if (u.opacity >= 1) u.phase = "flying";
  } else if (u.phase === "flying") {
    u.x += u.vx * dt; u.y += u.vy * dt;
    u.vx += (Math.random() - 0.5) * 6 * dt;
    u.vy += (Math.random() - 0.5) * 6 * dt;
    const dx2 = u.tx - u.x, dy2 = u.ty - u.y;
    const near = Math.sqrt(dx2 * dx2 + dy2 * dy2) < 60;
    const off = u.x < -140 || u.x > cw + 140 || u.y < -140 || u.y > ch + 140;
    if (near || off) u.phase = "disappearing";
  } else if (u.phase === "disappearing") {
    u.opacity = Math.max(u.opacity - dt * 1.2, 0);
    u.x += u.vx * dt; u.y += u.vy * dt;
    if (u.opacity <= 0) {
      u.phase = "idle"; u.active = false;
      u.nextAppear = 10 + Math.random() * 15;
    }
  }
}

export function drawUFO(
  ctx: CanvasRenderingContext2D, x: number, y: number, r: number, t: number
): void {
  ctx.save();
  ctx.translate(x, y + Math.sin(t * 2.2) * r * 0.18);

  const glow = ctx.createRadialGradient(0, r * 0.18, 0, 0, r * 0.18, r * 1.8);
  glow.addColorStop(0, "rgba(0,255,180,0.08)");
  glow.addColorStop(0.5, "rgba(0,200,140,0.04)");
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath(); ctx.ellipse(0, r * 0.18, r * 1.8, r * 0.7, 0, 0, Math.PI * 2);
  ctx.fillStyle = glow; ctx.fill();

  const hullG = ctx.createRadialGradient(-r * 0.22, -r * 0.06, 0, 0, 0, r);
  hullG.addColorStop(0, "rgba(80,110,120,0.75)");
  hullG.addColorStop(0.5, "rgba(30,55,65,0.80)");
  hullG.addColorStop(1, "rgba(5,15,22,0.90)");
  ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.24, 0, 0, Math.PI * 2);
  ctx.fillStyle = hullG; ctx.fill();

  ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.24, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(0,255,200,0.18)";
  ctx.lineWidth = r * 0.045; ctx.stroke();

  const domeG = ctx.createRadialGradient(-r * 0.14, -r * 0.36, 0, 0, -r * 0.20, r * 0.42);
  domeG.addColorStop(0, "rgba(120,200,255,0.22)");
  domeG.addColorStop(0.4, "rgba(40,100,160,0.18)");
  domeG.addColorStop(1, "rgba(5,15,30,0.55)");
  ctx.beginPath(); ctx.ellipse(0, -r * 0.16, r * 0.44, r * 0.34, 0, Math.PI, 0);
  ctx.fillStyle = domeG; ctx.fill();

  ctx.beginPath(); ctx.ellipse(0, -r * 0.16, r * 0.44, r * 0.34, 0, Math.PI, 0);
  ctx.strokeStyle = "rgba(80,180,255,0.14)";
  ctx.lineWidth = r * 0.03; ctx.stroke();

  const glint = ctx.createRadialGradient(-r * 0.14, -r * 0.38, 0, -r * 0.14, -r * 0.38, r * 0.13);
  glint.addColorStop(0, "rgba(255,255,255,0.28)");
  glint.addColorStop(1, "rgba(255,255,255,0)");
  ctx.beginPath(); ctx.arc(-r * 0.14, -r * 0.38, r * 0.13, 0, Math.PI * 2);
  ctx.fillStyle = glint; ctx.fill();

  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2 + t * 0.9;
    const lx = Math.cos(angle) * r * 0.68;
    const ly2 = Math.sin(angle) * r * 0.08;
    const pulse = 0.5 + 0.5 * Math.sin(t * 4 + i * 1.6);
    const lg = ctx.createRadialGradient(lx, ly2, 0, lx, ly2, r * 0.14);
    lg.addColorStop(0, `rgba(0,255,180,${0.25 + pulse * 0.12})`);
    lg.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath(); ctx.arc(lx, ly2, r * 0.14, 0, Math.PI * 2);
    ctx.fillStyle = lg; ctx.fill();
    ctx.beginPath(); ctx.arc(lx, ly2, r * 0.04, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,255,200,${0.4 + pulse * 0.3})`; ctx.fill();
  }

  const shadow = ctx.createLinearGradient(r * 0.3, -r * 0.1, -r * 0.3, r * 0.1);
  shadow.addColorStop(0, "rgba(2,8,16,0)");
  shadow.addColorStop(0.55, "rgba(2,8,16,0)");
  shadow.addColorStop(1, "rgba(2,8,16,0.55)");
  ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.24, 0, 0, Math.PI * 2);
  ctx.fillStyle = shadow; ctx.fill();

  ctx.restore();
}
