## Stack

- **Next.js (App Router)** + **TypeScript**, **React**.
- **next-intl** for i18n (IT/EN).
- **Tailwind CSS** for layout utilities (`flex`, `grid`, `className`), but
  almost all *visual* styling (colors, fonts, animations) is inline via
  `style={{...}}`/`CSSProperties` objects, not Tailwind classes. This is a
  deliberate choice in the existing code, not an inconsistency to fix.
- **pnpm** as the package manager (`pnpm-lock.yaml`, `pnpm-workspace.yaml`).
- **Jest** + **Playwright** for unit/e2e tests (configs present,
  `__tests__/`) — actual commands not confirmed, see `claude.md`.
- **Husky** for git hooks (`.husky/`) — presumably lint/test pre-commit,
  content not verified.
- Static export: the `out/` folder in the screenshot and the repo name
  (`reverb6821.github.io`) point to **static export on GitHub Pages**
  (`next.config.ts` with `output: "export"`, almost certainly). This has a
  direct implication for i18n, see below.

## Folder structure (observed + inferred)

```
app/
├── favicon.ico
├── globals.css
├── layout.tsx          # root layout — presumably mounts the next-intl provider
├── not-found.tsx        # 404 — see dedicated section below
└── page.tsx              # home — presumably mounts <Portfolio />
components/               # not visible: document contents once shared
hooks/                     # not visible
i18n/                      # next-intl config (request.ts?) — not visible, see i18n note
lib/                       # not visible
messages/
├── it.json
└── en.json
types/
└── portfolio.ts           # shared types? not visible — Portfolio.tsx currently
                            # defines its own types locally (see below)
```

`Portfolio.tsx` is currently a **single monolithic file** (~1300 lines)
containing: types, data, the entire canvas engine for the space background,
all sub-components (`HudFrame`, `SectionLabel`, `Reveal`, `TypeWriter`,
`ProjectCard`, `LocaleSwitcher`) and the page component itself. It hasn't
been split yet to match the existing `components/` folder in the repo —
that's the first sensible refactor if you want the file to align with the
repo's actual structure (see `claude.md`).

## `Portfolio.tsx` — data model

For every entity with visible text (stack, experience, projects, education)
the data is split into two parts:

1. **Meta, in TypeScript** (`STACK_GROUPS`, `EXPERIENCE`, `PROJECTS`) — only
   what should *not* be translated: id, accent color, tech tags, URLs,
   emoji, status enum, the `active` flag. Drives rendering (order, colors,
   links) without duplicating text across the two `messages/` files.
2. **Text, in `messages/{locale}.json`** — read with
   `useTranslations(namespace)` for single strings, `t.raw(key)` for
   arrays/objects (experience bullets, the `education.items` list,
   `hero.typewriter`). `EDUCATION` no longer exists as a TS array: it lives
   entirely in `education.items` in the JSON, read via
   `tEducation.raw("items")`.

This means "adding a language" tomorrow shouldn't require touching
`Portfolio.tsx` — just a new `messages/xx.json` with the same keys.

## `Portfolio.tsx` — canvas engine ("SpaceCanvas")

A single fixed background `<canvas>` draws: stars (parallax via random
`speed`), 5 planets (Earth/Jupiter/Saturn/Mars/Neptune) and an easter-egg
UFO. Each planet is tied to a section
(`PLANET_SECTIONS = ["home","stack","esperienza","progetti","formazione"]`);
its position is driven by scroll position relative to that section's
center (`computeTriggers` computes each section's midpoint via
`getBoundingClientRect`), not `document.scrollHeight` — a deliberate choice
to stay resilient to content whose height changes (including a language
switch, which lengthens or shortens paragraphs).

The drawing functions (`drawSphere`, `drawBand`, `drawAtmo`, `drawCrater`,
etc.) are pure functions over `CanvasRenderingContext2D`, with no state of
their own — mutable state lives only in `ufoState` (a module-level `var`)
and in local values inside `SpaceCanvas`'s `useEffect` closure.

`reduceMotion` (from `prefers-reduced-motion`) disables the continuous
`rAF` loop: the canvas only redraws in response to scroll/resize events,
not every frame.

## Internationalization (next-intl)

**Open item, not yet resolved** — flagged explicitly because it affects
both the architecture and the code already written:

- The project **does not use a `[locale]` URL segment** (confirmed by the
  screenshot: `app/not-found.tsx` sits at the root of `app/`, not under
  `app/[locale]/`). As a result, `not-found.tsx` was written without
  `useLocale()` and with a fixed `href="/"` link.
- Combined with static export (`out/`, GitHub Pages — no server at
  runtime, no middleware, no per-request cookie reading), the locale
  **cannot** be resolved server-side on each request the way the official
  next-intl "no URL prefix" pattern normally works (which still requires a
  server/middleware). The hypothesis most consistent with "static export +
  no `[locale]`" is that localization is **entirely client-side**:
  `Portfolio.tsx` is already `"use client"`, so it's plausible that `i18n/`
  exposes a `NextIntlClientProvider` fed by a locale read from
  `localStorage`/a cookie **in the browser**, with a single static HTML
  served for all languages.
- If that's the case, the `LocaleSwitcher` inside `Portfolio.tsx` (which
  currently rewrites the first pathname segment, assuming URL-based
  routing) **is wrong for this project** and needs to be rewritten to
  update that client-side state/cookie instead of calling `router.push()`
  on a locale-prefixed path.
- **Action needed**: share the contents of `i18n/` (specifically how the
  locale is resolved/set) so `LocaleSwitcher` can be fixed correctly,
  instead of proceeding on assumptions.

## `not-found.tsx`

A single file at `app/not-found.tsx` (not `app/[locale]/not-found.tsx`,
consistent with the lack of per-locale routing). It's self-contained: it
carries its own `<style>` block with the Google Fonts import and the
glitch CSS rules, so it works even if rendered before the rest of the
global CSS is ready. It reuses `useTranslations("notFound")` — which
requires `NextIntlClientProvider` to be mounted in the root `layout.tsx`
(not in a per-locale layout, which doesn't exist here).

## Messages (`messages/it.json`, `messages/en.json`)

Current namespaces: `nav`, `hero`, `stack`, `experience`, `projects`,
`education`, `contact`, `languageSwitcher`, `notFound`. Keys are kept in
sync between the two files manually (checked one by one during
development, not via an automated tool in the repo) — if you add a key,
update **both** files in the same commit, otherwise `next-intl` will
either silently fall back or throw in dev depending on the `onError`
config.

`hero.p1`/`hero.p2` use an inline `<hl>` tag (next-intl's `t.rich()`
syntax) to highlight parts of a sentence, so that word order can freely
differ between languages instead of concatenating 3 separate strings in
JS.