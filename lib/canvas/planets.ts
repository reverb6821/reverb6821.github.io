import {
  drawAtmo, drawBand, drawCap, drawCloudBand,
  drawCrater, drawRingHalf, drawShading, drawSphere, drawStorm,
} from "./helpers";

export function drawJupiter(
  ctx: CanvasRenderingContext2D, px: number, py: number, r: number, t: number
): void {
  const lx = px - r * 0.32, ly = py - r * 0.36;
  drawAtmo(ctx, px, py, r, "#c8882a", 0.20);
  drawSphere(ctx, px, py, r, "#5a3210", "#c8882a", "#f0c870", lx, ly);
  const bands: [number, number, string, number, number][] = [
    [-0.80, 0.10, "#7a4010", 0.88, 1.1], [-0.64, 0.12, "#e4c888", 0.78, 2.3],
    [-0.47, 0.10, "#9a5820", 0.84, 3.1], [-0.30, 0.13, "#d8be70", 0.75, 4.4],
    [-0.10, 0.10, "#a86828", 0.80, 5.7], [ 0.06, 0.13, "#eacf80", 0.76, 6.2],
    [ 0.24, 0.10, "#9a5818", 0.83, 7.5], [ 0.40, 0.12, "#d4b860", 0.72, 8.1],
    [ 0.57, 0.10, "#a06020", 0.78, 9.3], [ 0.73, 0.11, "#ccaa58", 0.70, 10.2],
    [ 0.86, 0.09, "#8a4818", 0.78, 11.0],
  ];
  bands.forEach((b) => drawBand(ctx, px, py, r, b[0], b[1], b[2], b[3], t, b[4]));
  drawStorm(ctx, px, py, r, 0.20, 0.07, 0.20, 0.11, "rgba(155,55,25,0.62)");
  drawShading(ctx, px, py, r, lx, ly);
}

export function drawSaturn(
  ctx: CanvasRenderingContext2D, px: number, py: number, r: number, t: number
): void {
  const lx = px - r * 0.28, ly = py - r * 0.30;
  drawRingHalf(ctx, px, py, r, 1.28, 2.30, 0.24, false);
  drawAtmo(ctx, px, py, r, "#dcc870", 0.15);
  drawSphere(ctx, px, py, r, "#8a6820", "#c8a840", "#e8d080", lx, ly);
  const bands: [number, number, string, number, number][] = [
    [-0.72, 0.11, "#9a7828", 0.65, 1.5], [-0.52, 0.13, "#d8c068", 0.58, 2.8],
    [-0.30, 0.11, "#aa8830", 0.65, 4.0], [-0.08, 0.15, "#e0cc78", 0.55, 5.5],
    [ 0.12, 0.11, "#a88030", 0.60, 6.8], [ 0.32, 0.13, "#d4b860", 0.56, 8.0],
    [ 0.54, 0.11, "#a07828", 0.60, 9.2], [ 0.73, 0.10, "#c8a850", 0.52, 10.5],
  ];
  bands.forEach((b) => drawBand(ctx, px, py, r, b[0], b[1], b[2], b[3], t, b[4]));
  drawShading(ctx, px, py, r, lx, ly);
  drawRingHalf(ctx, px, py, r, 1.28, 2.30, 0.24, true);
}

export function drawMars(
  ctx: CanvasRenderingContext2D, px: number, py: number, r: number, t: number
): void {
  const lx = px - r * 0.28, ly = py - r * 0.32;
  drawAtmo(ctx, px, py, r, "#cc4400", 0.13);
  drawSphere(ctx, px, py, r, "#5a1800", "#a03010", "#e05020", lx, ly);
  const bands: [number, number, string, number, number][] = [
    [-0.55, 0.18, "#aa3a10", 0.48, 1.2],
    [ 0.08, 0.22, "#8a2200", 0.44, 3.1],
    [ 0.55, 0.16, "#aa3000", 0.40, 5.5],
  ];
  bands.forEach((b) => drawBand(ctx, px, py, r, b[0], b[1], b[2], b[3], t, b[4]));
  ctx.save(); ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.clip();
  ([
    [0.25, -0.38, 0.13], [-0.30, 0.15, 0.10], [0.08, 0.48, 0.08],
    [-0.44, -0.22, 0.09], [0.42, 0.30, 0.07], [-0.12, -0.55, 0.08],
    [0.55, 0.04, 0.06], [-0.20, 0.40, 0.07], [0.10, -0.10, 0.09],
    [-0.35, 0.55, 0.06],
  ] as [number, number, number][]).forEach((c) =>
    drawCrater(ctx, px, py, r, c[0], c[1], c[2])
  );
  ctx.restore();
  drawCap(ctx, px, py, r, true, 0.36, "rgba(240,220,200,");
  drawCap(ctx, px, py, r, false, 0.20, "rgba(240,220,200,");
  drawShading(ctx, px, py, r, lx, ly);
}

export function drawNeptune(
  ctx: CanvasRenderingContext2D, px: number, py: number, r: number, t: number
): void {
  const lx = px - r * 0.25, ly = py - r * 0.28;
  drawAtmo(ctx, px, py, r, "#1a44cc", 0.26);
  drawSphere(ctx, px, py, r, "#081440", "#122888", "#2255cc", lx, ly);
  const bands: [number, number, string, number, number][] = [
    [-0.55, 0.17, "#1a3a8a", 0.66, 1.0], [-0.22, 0.20, "#0d2060", 0.56, 2.8],
    [ 0.12, 0.18, "#1a3a8a", 0.62, 4.5], [ 0.48, 0.16, "#0d1e58", 0.52, 6.2],
  ];
  bands.forEach((b) => drawBand(ctx, px, py, r, b[0], b[1], b[2], b[3], t, b[4]));
  drawStorm(ctx, px, py, r, -0.14, -0.10, 0.16, 0.10, "rgba(15,45,180,0.58)");
  drawShading(ctx, px, py, r, lx, ly);
}

export function drawEarth(
  ctx: CanvasRenderingContext2D, px: number, py: number, r: number, t: number
): void {
  const lx = px - r * 0.32, ly = py - r * 0.34;

  const ag = ctx.createRadialGradient(px, py, r * 0.85, px, py, r * 1.32);
  ag.addColorStop(0, "rgba(50,120,255,0.72)");
  ag.addColorStop(0.35, "rgba(30,80,200,0.25)");
  ag.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath(); ctx.arc(px, py, r * 1.32, 0, Math.PI * 2);
  ctx.fillStyle = ag; ctx.fill();

  const og = ctx.createRadialGradient(lx, ly, r * 0.02, px, py, r);
  og.addColorStop(0, "#1a80d0");
  og.addColorStop(0.25, "#0d5aaa");
  og.addColorStop(0.60, "#083a7a");
  og.addColorStop(1, "rgba(2,8,16,1)");
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
  ctx.fillStyle = og; ctx.fill();

  ctx.save();
  ctx.beginPath(); ctx.arc(px, py, r * 0.998, 0, Math.PI * 2); ctx.clip();

  function landBlob(pts: [number, number][], dark: string, light: string): void {
    const n = pts.length;
    ctx.beginPath();
    const mx = px + ((pts[n - 1][0] + pts[0][0]) * 0.5) * r;
    const my = py + ((pts[n - 1][1] + pts[0][1]) * 0.5) * r;
    ctx.moveTo(mx, my);
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      ctx.quadraticCurveTo(
        px + a[0] * r, py + a[1] * r,
        px + (a[0] + b[0]) * 0.5 * r, py + (a[1] + b[1]) * 0.5 * r
      );
    }
    ctx.closePath();
    const g = ctx.createLinearGradient(lx, ly, px + r * 0.4, py + r * 0.4);
    g.addColorStop(0, light); g.addColorStop(1, dark);
    ctx.fillStyle = g; ctx.fill();
  }

  landBlob([[-0.05,-0.55],[0.12,-0.62],[0.30,-0.58],[0.50,-0.48],[0.58,-0.32],[0.55,-0.14],[0.44,-0.02],[0.30,0.04],[0.15,0.00],[0.04,-0.08],[-0.04,-0.20],[-0.08,-0.38]], "#2d5c30", "#4a8845");
  landBlob([[0.20,-0.02],[0.30,-0.04],[0.34,0.10],[0.26,0.24],[0.18,0.18],[0.14,0.06]], "#306035", "#4a7a40");
  landBlob([[0.06,-0.14],[0.20,-0.08],[0.28,0.06],[0.30,0.24],[0.24,0.44],[0.14,0.58],[0.04,0.58],[-0.06,0.44],[-0.08,0.26],[-0.04,0.06]], "#3a6030", "#558040");
  landBlob([[-0.60,-0.50],[-0.42,-0.60],[-0.22,-0.56],[-0.16,-0.42],[-0.22,-0.28],[-0.32,-0.14],[-0.28,-0.02],[-0.38,0.08],[-0.52,0.02],[-0.64,-0.16],[-0.68,-0.34]], "#2e5a28", "#48783a");
  landBlob([[-0.28,0.14],[-0.18,0.10],[-0.12,0.24],[-0.14,0.44],[-0.20,0.64],[-0.32,0.68],[-0.42,0.56],[-0.44,0.38],[-0.36,0.20]], "#2a5a24", "#448035");
  landBlob([[0.28,0.32],[0.46,0.28],[0.58,0.36],[0.56,0.52],[0.44,0.58],[0.28,0.52],[0.22,0.40]], "#7a6030", "#a08040");
  landBlob([[-0.14,-0.66],[-0.02,-0.72],[0.06,-0.64],[0.00,-0.56],[-0.12,-0.56]], "#6a7a68", "#8a9a85");
  ctx.restore();

  ctx.save();
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.clip();
  const ds = ctx.createRadialGradient(px + r * 0.1, py + r * 0.1, 0, px, py, r);
  ds.addColorStop(0, "rgba(0,0,0,0)");
  ds.addColorStop(0.55, "rgba(0,20,60,0.18)");
  ds.addColorStop(1, "rgba(0,10,40,0.45)");
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
  ctx.fillStyle = ds; ctx.fill();
  ctx.restore();

  const clouds = [
    { y: -0.66, h: 0.065, s: 0.3, o: 0.50 }, { y: -0.34, h: 0.075, s: 2.0, o: 0.44 },
    { y: -0.06, h: 0.080, s: 3.6, o: 0.42 }, { y:  0.22, h: 0.075, s: 5.2, o: 0.44 },
    { y:  0.50, h: 0.070, s: 6.9, o: 0.40 }, { y:  0.72, h: 0.060, s: 8.3, o: 0.36 },
  ];
  clouds.forEach((c) => drawCloudBand(ctx, px, py, r, c.y, c.h, c.o, t, c.s));

  drawCap(ctx, px, py, r, true, 0.33, "rgba(230,245,255,");
  drawCap(ctx, px, py, r, false, 0.18, "rgba(230,245,255,");

  const og2 = ctx.createRadialGradient(lx, ly, 0, lx, ly, r * 0.55);
  og2.addColorStop(0, "rgba(180,220,255,0.22)");
  og2.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
  ctx.fillStyle = og2; ctx.fill();

  drawShading(ctx, px, py, r, lx, ly);

  const rim = ctx.createRadialGradient(px, py, r * 0.94, px, py, r * 1.08);
  rim.addColorStop(0, "rgba(70,140,255,0.40)");
  rim.addColorStop(0.6, "rgba(40,100,220,0.14)");
  rim.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath(); ctx.arc(px, py, r * 1.08, 0, Math.PI * 2);
  ctx.fillStyle = rim; ctx.fill();
}
