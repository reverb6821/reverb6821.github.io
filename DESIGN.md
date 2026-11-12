## Concept

"HUD / spacecraft control room" aesthetic — near-black background,
monospace text, open-corner mirror-style frames, a cyan-on-navy palette.
Every section presents itself as a system "module" (`MOD-01`, `MOD-02`,
...) with an associated `SYS.*` code, to reinforce the metaphor.

## Color palette

| Token | Hex | Use |
|---|---|---|
| Background | `#020810` | page background, near-black |
| Primary text | `#C8E8FF` | headings, high-contrast text |
| Cyan accent | `#00FFD1` | CTAs, active states, glow, interactive elements |
| Secondary text | `#4A7A9B` | body copy, labels, muted text |
| Border/container | `#0D2A44` | default borders, separators, hover background |
| Warning/alt status | `#FF9500` | project status other than "OPERATIONAL" |

Per-project accents (in `PROJECTS[].accent`, used on border/hover/tags):
`#00FFD1`, `#0066FF`, `#FF4500`, `#7B61FF`.

404 page glitch colors: `#FF2D6D` (ghost layer above) and `#0066FF` (ghost
layer below), offset over the real cyan "404" text.

Opacity is almost always expressed as a hex suffix on the color (e.g.
`#00FFD133` = cyan at 20%) instead of `rgba()`, for consistency with the
existing code style — keep this convention when adding new elements.

## Typography

Only two fonts, loaded via Google Fonts (`@import` inside the JS-generated
`<style>` block, not in `globals.css`):

- **Orbitron** (400/700/900) — headings, CTAs, digits, anything meant to
  "look like" a futuristic interface. Almost always with positive
  `letterSpacing` (1–4px) and often a cyan glow `textShadow`.
- **Share Tech Mono** — body text, labels, timestamps, codes (`SYS.LOG`,
  `LAT 41.2278 N`, experience bullets). It's also the default `<body>` font
  (set on the root container's `fontFamily`).

There are no other fonts in the system: if a third font/weight is needed,
it should be explicitly justified (it breaks the "only two technical
fonts" consistency).

## Layout & spacing

- Containers centered with a fixed `maxWidth` per section (1000–1100px),
  responsive side padding via `clamp(16px,4vw,48px)` — a pattern repeated
  in every `<section>`.
- Grids using `repeat(auto-fit, minmax(Npx, 1fr))` for Stack/Projects/
  Education — no explicit breakpoints, reflow is left to CSS grid itself.
- Only one real CSS breakpoint: `@media(max-width:640px)` to switch from
  the desktop nav to the hamburger (`.nav-desktop` / `.nav-hamburger`).

## Recurring components

- **`HudFrame` / `HudCorners`** — four mini L-shaped borders at the corners
  of a container (`border` on 2 sides only, the others `none`), simulating
  a HUD frame. It exists in two near-identical variants: `HudFrame` (with
  `children`/`color`/`size`/`style`, in `Portfolio.tsx`) and a simplified
  copy `HudCorners` in `not-found.tsx`. **Should be unified** if a shared
  `components/` folder is created (see `architecture.md`).
- **`SectionLabel`** — a 4-part section header: `mod` (a badge like
  `"projects // MOD-03"`), `sys` (a code like `"SYS.REPO"`), `title` (h2),
  `sub` (optional subtitle). A fixed pattern across all sections.
- **`Reveal`** — wrapper using `IntersectionObserver` to animate
  `opacity`/`translateY` on first entering the viewport (threshold 0.1),
  with an optional `delay` for staggering items in a list.
- **`TypeWriter`** — typewriter effect over an array of strings, cyclical
  (type → pause → delete → next string).
- **Custom cursor** — a circle + dot that follow the mouse, enlarging over
  `[data-hover]`. Automatically disabled on `pointer: coarse` (touch) and
  `prefers-reduced-motion: reduce`.
- **Glitch text** (404 page only) — two pseudo-elements (`::before`/
  `::after`) with animated `clip-path` + `transform`, red/blue offset over
  the real cyan text. Also disabled under `prefers-reduced-motion`.

## Motion

CSS keyframe animations reused throughout via class/inline `animation`:

- `fadeUp` — section entrance (`opacity 0→1`, `translateY 20px→0`).
- `pulse` — the "online" dot in the hero status badge.
- `glow` — breathing cyan `box-shadow` on primary CTAs.
- `blink` — blinking cursor for `TypeWriter` and the `█` glyph.

All animations are globally disabled via:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```
Any new animation should fall under this rule automatically (don't override
it with local `!important` rules).

## Accessibility

- Skip link (`.skip-link`, translated via `nav.skipLink`), visible only on
  focus.
- `focus-visible` with a 1px cyan outline + 3px offset on buttons/links
  with `data-hover`.
- Custom cursor disabled on touch and reduced-motion (see above) — the
  native system cursor stays fully usable in those cases.
- `aria-current="true"` on active nav items, `aria-label` on the logo and
  hamburger (both translated).

## What's not documented here yet

This file covers only `Portfolio.tsx` and `not-found.tsx`. If `components/`
holds other UI elements (forms, other card types, other patterns), they
should be added in a dedicated section — I currently have no visibility
into that folder.