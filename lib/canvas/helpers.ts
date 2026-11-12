// ─── Canvas drawing primitives shared by all planet renderers ─────────────────

export function hexRgba(hex: string, a: number): string {
  if (!hex || hex[0] !== "#") return `rgba(0,0,0,${a})`;
  const r = parseInt(hex.slice(1, 3), 16) || 0;
  const g = parseInt(hex.slice(3, 5), 16) || 0;
  const b = parseInt(hex.slice(5, 7), 16) || 0;
  return `rgba(${r},${g},${b},${a})`;
}

export function drawSphere(
  ctx: CanvasRenderingContext2D,
  px: number, py: number, r: number,
  dark: string, mid: string, light: string,
  lx: number, ly: number
): void {
  const g = ctx.createRadialGradient(lx, ly, r * 0.02, px, py, r);
  g.addColorStop(0, light);
  g.addColorStop(0.28, mid);
  g.addColorStop(0.72, dark);
  g.addColorStop(1, "rgba(2,8,16,1)");
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
  ctx.fillStyle = g; ctx.fill();
}

export function drawBand(
  ctx: CanvasRenderingContext2D,
  px: number, cy: number, r: number,
  by: number, bh: number, col: string, op: number, t: number, seed: number
): void {
  ctx.save();
  ctx.beginPath(); ctx.arc(px, cy, r, 0, Math.PI * 2); ctx.clip();
  const N = 72, cy2 = cy + by * r, bhr = bh * r;
  ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const w =
      Math.sin(u * Math.PI * 4 + seed + t * 0.03) * 0.055 +
      Math.sin(u * Math.PI * 9 + seed * 1.4 + t * 0.017) * 0.025 +
      Math.sin(u * Math.PI * 17 + seed * 2.1 + t * 0.009) * 0.012;
    const topY = cy2 - bhr + w * r;
    if (i === 0) ctx.moveTo(px - r + u * r * 2, topY);
    else ctx.lineTo(px - r + u * r * 2, topY);
  }
  for (let i = N; i >= 0; i--) {
    const u = i / N;
    const w =
      Math.sin(u * Math.PI * 4 + seed * 1.6 + t * 0.025) * 0.055 +
      Math.sin(u * Math.PI * 8 + seed * 0.8 + t * 0.015) * 0.025 +
      Math.sin(u * Math.PI * 16 + seed * 2.5 + t * 0.008) * 0.012;
    ctx.lineTo(px - r + u * r * 2, cy2 + bhr + w * r);
  }
  ctx.closePath();
  ctx.fillStyle = hexRgba(col, op); ctx.fill();
  ctx.restore();
}

export function drawAtmo(
  ctx: CanvasRenderingContext2D,
  px: number, py: number, r: number,
  col: string, thick: number
): void {
  const g = ctx.createRadialGradient(px, py, r * 0.88, px, py, r * (1 + thick));
  g.addColorStop(0, hexRgba(col, 0.65));
  g.addColorStop(0.45, hexRgba(col, 0.20));
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath(); ctx.arc(px, py, r * (1 + thick), 0, Math.PI * 2);
  ctx.fillStyle = g; ctx.fill();
}

export function drawShading(
  ctx: CanvasRenderingContext2D,
  px: number, py: number, r: number,
  lx: number, ly: number
): void {
  const sg = ctx.createRadialGradient(lx, ly, 0, lx, ly, r * 0.5);
  sg.addColorStop(0, "rgba(255,255,255,0.18)");
  sg.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
  ctx.fillStyle = sg; ctx.fill();

  const tdx = px - lx, tdy = py - ly, tl = Math.sqrt(tdx * tdx + tdy * tdy) || 1;
  const tg = ctx.createRadialGradient(
    px + (tdx / tl) * r * 0.3, py + (tdy / tl) * r * 0.3, r * 0.05,
    px, py, r
  );
  tg.addColorStop(0, "rgba(2,8,16,0)");
  tg.addColorStop(0.4, "rgba(2,8,16,0)");
  tg.addColorStop(0.68, "rgba(2,8,16,0.48)");
  tg.addColorStop(1, "rgba(2,8,16,0.94)");
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
  ctx.fillStyle = tg; ctx.fill();

  const lg = ctx.createRadialGradient(px, py, r * 0.65, px, py, r);
  lg.addColorStop(0, "rgba(0,0,0,0)");
  lg.addColorStop(1, "rgba(2,8,16,0.60)");
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
  ctx.fillStyle = lg; ctx.fill();
}

export function drawCap(
  ctx: CanvasRenderingContext2D,
  px: number, cy: number, r: number,
  north: boolean, size: number, col: string
): void {
  ctx.save(); ctx.beginPath(); ctx.arc(px, cy, r, 0, Math.PI * 2); ctx.clip();
  const yc = north ? cy - r * 0.76 : cy + r * 0.76;
  const g = ctx.createRadialGradient(px, yc, 0, px, yc, r * size);
  g.addColorStop(0, col + "0.96)");
  g.addColorStop(0.55, col + "0.45)");
  g.addColorStop(1, col + "0)");
  ctx.fillStyle = g;
  if (north) ctx.fillRect(px - r, cy - r, r * 2, r);
  else ctx.fillRect(px - r, cy, r * 2, r);
  ctx.restore();
}

export function drawCrater(
  ctx: CanvasRenderingContext2D,
  px: number, cy: number, r: number,
  fx: number, fy: number, fr: number
): void {
  const cx2 = px + fx * r, cy2 = cy + fy * r, cr = fr * r;
  const rim = ctx.createRadialGradient(cx2, cy2, cr * 0.7, cx2, cy2, cr * 1.1);
  rim.addColorStop(0, "rgba(0,0,0,0)");
  rim.addColorStop(0.8, "rgba(210,130,80,0.28)");
  rim.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath(); ctx.arc(cx2, cy2, cr * 1.1, 0, Math.PI * 2);
  ctx.fillStyle = rim; ctx.fill();
  const bowl = ctx.createRadialGradient(cx2 + cr * 0.1, cy2 + cr * 0.1, 0, cx2, cy2, cr);
  bowl.addColorStop(0, "rgba(0,0,0,0.05)");
  bowl.addColorStop(0.7, "rgba(0,0,0,0.22)");
  bowl.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath(); ctx.arc(cx2, cy2, cr, 0, Math.PI * 2);
  ctx.fillStyle = bowl; ctx.fill();
}

export function drawStorm(
  ctx: CanvasRenderingContext2D,
  px: number, cy: number, r: number,
  fx: number, fy: number, rw: number, rh: number, col: string
): void {
  ctx.save(); ctx.beginPath(); ctx.arc(px, cy, r, 0, Math.PI * 2); ctx.clip();
  const sx = px + fx * r, sy = cy + fy * r;
  const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, rw * r);
  g.addColorStop(0, col);
  g.addColorStop(0.6, col.replace(/[\d.]+\)$/, "0.25)"));
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath(); ctx.ellipse(sx, sy, rw * r, rh * r, 0, 0, Math.PI * 2);
  ctx.fillStyle = g; ctx.fill();
  ctx.beginPath(); ctx.ellipse(sx, sy, rw * r * 0.5, rh * r * 0.5, 0, 0, Math.PI * 2);
  ctx.strokeStyle = col.replace(/[\d.]+\)$/, "0.55)");
  ctx.lineWidth = r * 0.02; ctx.stroke();
  ctx.restore();
}

export function drawRingHalf(
  ctx: CanvasRenderingContext2D,
  px: number, py: number, r: number,
  inner: number, outer: number, tilt: number, front: boolean
): void {
  ctx.save(); ctx.translate(px, py); ctx.scale(1, tilt);
  const ri = r * inner, ro = r * outer;
  const bands = [
    { i: ri,       o: ri * 1.10, op: 0.18 },
    { i: ri * 1.12, o: ri * 1.35, op: 0.62 },
    { i: ri * 1.38, o: ri * 1.55, op: 0.35 },
    { i: ri * 1.57, o: ro * 0.94, op: 0.70 },
    { i: ro * 0.95, o: ro,        op: 0.22 },
  ];
  bands.forEach((b) => {
    const g = ctx.createRadialGradient(0, 0, b.i, 0, 0, b.o);
    g.addColorStop(0, "rgba(235,205,128,0)");
    g.addColorStop(0.2, `rgba(235,205,128,${b.op})`);
    g.addColorStop(0.8, `rgba(235,205,128,${b.op})`);
    g.addColorStop(1, "rgba(235,205,128,0)");
    ctx.beginPath();
    if (front) { ctx.arc(0, 0, b.o, Math.PI, 0); ctx.arc(0, 0, b.i, 0, Math.PI, true); }
    else        { ctx.arc(0, 0, b.o, 0, Math.PI); ctx.arc(0, 0, b.i, Math.PI, 0, true); }
    ctx.fillStyle = g; ctx.fill();
  });
  ctx.restore();
}

export function drawCloudBand(
  ctx: CanvasRenderingContext2D,
  px: number, cy: number, r: number,
  by: number, bh: number, op: number, t: number, seed: number
): void {
  ctx.save(); ctx.beginPath(); ctx.arc(px, cy, r, 0, Math.PI * 2); ctx.clip();
  const N = 72, cy2 = cy + by * r, bhr = bh * r;
  ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const w =
      Math.sin(u * Math.PI * 5 + seed + t * 0.04) * 0.06 +
      Math.sin(u * Math.PI * 11 + seed * 1.5 + t * 0.02) * 0.025;
    if (i === 0) ctx.moveTo(px - r + u * r * 2, cy2 - bhr + w * r);
    else ctx.lineTo(px - r + u * r * 2, cy2 - bhr + w * r);
  }
  for (let i = N; i >= 0; i--) {
    const u = i / N;
    const w =
      Math.sin(u * Math.PI * 5 + seed * 1.7 + t * 0.035) * 0.06 +
      Math.sin(u * Math.PI * 10 + seed * 2 + t * 0.018) * 0.025;
    ctx.lineTo(px - r + u * r * 2, cy2 + bhr + w * r);
  }
  ctx.closePath();
  ctx.fillStyle = `rgba(255,255,255,${op})`; ctx.fill();
  ctx.restore();
}
