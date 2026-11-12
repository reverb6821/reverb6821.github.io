// Cockpit SVG statico (Nostromo-style) per ScrollIntro. Nessun input utente.

// Cockpit in stile Nostromo (monitor CRT, LED, tastiera, pannelli). SVG statico
// generato una volta e iniettato con dangerouslySetInnerHTML (nessun input
// utente). Gli elementi animati si riconoscono dagli attributi data-*:
// data-led (soglia di accensione), data-needle, data-line, data-bar, data-pct,
// data-glow, data-screen, data-fade.
function buildCockpitSvg(): string {
  const mono = "var(--font-share-tech-mono),'Share Tech Mono',monospace", orb = "var(--font-orbitron),'Orbitron',sans-serif";
  let s = '<svg viewBox="0 0 1200 700" width="100%" aria-hidden="true" style="display:block">';
  s += '<defs>'
    + '<linearGradient id="cpMetal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#121820"/><stop offset="1" stop-color="#06080b"/></linearGradient>'
    + '<radialGradient id="cpVig" cx="50%" cy="50%" r="70%"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".75"/></radialGradient>'
    + '<pattern id="cpScan" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="2" fill="#000" fill-opacity=".28"/></pattern>'
    + '</defs>';
  // fondo metallico, giunture e rivetti
  s += '<rect width="1200" height="700" fill="url(#cpMetal)"/>';
  s += '<path d="M0 98H1200M0 646H1200M330 98V700M870 98V700" stroke="#1b2229" stroke-width="2" fill="none"/>';
  for (let rv = 0; rv < 12; rv++) s += '<circle cx="' + (50 + rv * 100) + '" cy="82" r="3" fill="#222a31"/>';
  // pannelli laterali inclinati
  s += '<path d="M40 110L330 170V640L40 700Z" fill="#10151a" stroke="#2c353d" stroke-width="2"/>';
  s += '<path d="M1160 110L870 170V640L1160 700Z" fill="#10151a" stroke="#2c353d" stroke-width="2"/>';
  // pannello sinistro: colonne di LED ambra / bianchi / strisce cyan
  const lc = ["#ffb43d", "#fff2d0", "#2fc9ff"];
  for (let c = 0; c < 3; c++) {
    const cx0 = 90 + c * 60, sl = 0.207 * (cx0 - 40), yT = 110 + sl + 60, yB = 700 - sl - 130;
    for (let i = 0; i < 10; i++) {
      const ly = yT + (yB - yT) * i / 9, thr = 0.05 + c * 0.1 + i * 0.04;
      if (c === 2) s += '<rect data-led="' + thr + '" x="' + (cx0 - 14) + '" y="' + (ly - 4) + '" width="28" height="9" rx="2" fill="' + lc[c] + '" style="opacity:.12"/>';
      else s += '<circle data-led="' + thr + '" cx="' + cx0 + '" cy="' + ly + '" r="5" fill="' + lc[c] + '" style="opacity:.12"/>';
    }
  }
  // pannello destro: griglia di interruttori
  for (let sr = 0; sr < 7; sr++) {
    for (let sc = 0; sc < 4; sc++) {
      const sx = 895 + sc * 62, sy = 205 + sr * 58;
      s += '<rect x="' + sx + '" y="' + sy + '" width="38" height="22" rx="3" fill="#1b2127" stroke="#3a444d"/>'
        + '<rect data-led="' + (0.08 + (sr * 4 + sc) * 0.03) + '" x="' + (sx + 14) + '" y="' + (sy - 8) + '" width="10" height="18" rx="2" fill="#c9d3db" style="opacity:.12"/>';
    }
  }
  // quadranti
  const dials = [[190, 640, 1], [1010, 640, 0.9]];
  for (let di = 0; di < dials.length; di++) {
    const dx = dials[di][0], dy = dials[di][1], dk = dials[di][2];
    s += '<circle cx="' + dx + '" cy="' + dy + '" r="26" fill="#0a0e12" stroke="#3a444d" stroke-width="2"/>'
      + '<circle cx="' + dx + '" cy="' + dy + '" r="21" fill="none" stroke="#3dff7a" stroke-opacity=".35"/>'
      + '<line data-needle data-cx="' + dx + '" data-cy="' + dy + '" data-k="' + dk + '" x1="' + dx + '" y1="' + dy + '" x2="' + dx + '" y2="' + (dy - 18) + '" stroke="#3dff7a" stroke-width="2" stroke-linecap="round" transform="rotate(-130 ' + dx + ' ' + dy + ')"/>'
      + '<circle cx="' + dx + '" cy="' + dy + '" r="3" fill="#3dff7a"/>';
  }
  // monitor CRT
  s += '<rect x="355" y="28" width="490" height="364" rx="18" fill="#161c22" stroke="#2c353d" stroke-width="3"/>';
  s += '<rect x="375" y="48" width="450" height="324" rx="26" fill="#07090c"/>';
  s += '<rect data-glow x="391" y="64" width="418" height="292" rx="36" fill="none" stroke="#ff4d78" stroke-width="10" style="opacity:0"/>';
  s += '<rect x="395" y="68" width="410" height="284" rx="34" fill="#2a0a14"/>';
  s += '<rect data-screen x="395" y="68" width="410" height="284" rx="34" fill="#c4365e" style="opacity:0"/>';
  s += '<g data-fade=".05" style="opacity:0">'
    + '<path d="M440 92H760V170H440Z" fill="none" stroke="#fdeff3" stroke-width="1.6"/>'
    + '<text x="600" y="145" text-anchor="middle" font-size="34" font-weight="900" letter-spacing="4" fill="none" stroke="#fdeff3" stroke-width="1.3" style="font-family:' + orb + '">PORTFOLIO</text>'
    + '<text x="600" y="198" text-anchor="middle" font-size="22" letter-spacing="3" fill="none" stroke="#fdeff3" stroke-width="1" style="font-family:' + orb + '">6821 0924 609</text></g>';
  s += '<text data-pct x="785" y="86" text-anchor="end" font-size="11" fill="#ffd9e2" style="font-family:' + mono + '">000%</text>';
  for (let ti = 0; ti < 5; ti++) s += '<text data-line x="420" y="' + (232 + ti * 21) + '" font-size="13" fill="#fff4f7" style="font-family:' + mono + '"></text>';
  s += '<rect x="420" y="332" width="360" height="4" fill="#fff" fill-opacity=".18"/><rect data-bar x="420" y="332" width="0" height="4" fill="#fff4f7"/>';
  s += '<rect x="395" y="68" width="410" height="284" rx="34" fill="url(#cpScan)"/>';
  s += '<rect x="395" y="68" width="410" height="284" rx="34" fill="url(#cpVig)"/>';
  // doppia fila di LED sotto il monitor (verde sopra, rossa sotto)
  s += '<rect x="345" y="408" width="510" height="48" rx="6" fill="#11161b" stroke="#2c353d"/>';
  for (let li = 0; li < 28; li++) {
    const lx = 365 + li * 17.5;
    s += '<circle data-led="' + (0.05 + li * 0.025) + '" cx="' + lx + '" cy="422" r="4.5" fill="#3dff7a" style="opacity:.12"/>'
      + '<circle data-led="' + (0.07 + li * 0.025) + '" cx="' + lx + '" cy="442" r="4.5" fill="#ff3b3b" style="opacity:.12"/>';
  }
  // tastiera
  s += '<rect x="330" y="470" width="540" height="160" rx="8" fill="#14191e" stroke="#2c353d" stroke-width="2"/>';
  for (let kr = 0; kr < 4; kr++) {
    for (let kc = 0; kc < 20; kc++) {
      const kx = 340 + kc * 26, ky = 482 + kr * 30;
      s += '<rect x="' + kx + '" y="' + ky + '" width="22" height="22" rx="3" fill="#232b32" stroke="#3a444d"/>';
      if ((kr * 7 + kc * 3) % 11 === 0) s += '<rect data-led="' + (0.3 + ((kr * 5 + kc) % 10) * 0.05) + '" x="' + kx + '" y="' + ky + '" width="22" height="22" rx="3" fill="#ff5252" style="opacity:.12"/>';
    }
  }
  s += '<rect x="470" y="604" width="260" height="16" rx="3" fill="#232b32" stroke="#3a444d"/>';
  return s + '</svg>';
}

export const COCKPIT_SVG: string = buildCockpitSvg();