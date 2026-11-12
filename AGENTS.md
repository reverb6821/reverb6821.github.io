## Before editing `Portfolio.tsx`, read

- `design.md` — palette, fonts, component patterns.
- `architecture.md` — data model, canvas engine, the open i18n question.
- `messages/it.json` + `messages/en.json` — must always have the **same
  keys**.

## Existing code style conventions

These aren't generic "good TypeScript" preferences — they're the style
*already used* in `Portfolio.tsx` and `not-found.tsx`: keep them for
consistency when editing these files, even where they differ from how
React would "normally" be written.

- **`var` + function expressions, not `const`/arrow functions**, for the
  vast majority of the code (`var scrollTo = function(id) {...}`, not
  `const scrollTo = (id) => {...}`). Deliberate, present throughout the
  file.
- **Manual `useState` destructuring**, not direct array-destructuring:
  `var _sc = useState(false); var scrolled = _sc[0], setScrolled = _sc[1];`.
  Also consistent throughout the file — don't "fix" it to
  `const [scrolled, setScrolled] = useState(false)` unless asked.
- **Inline styling**, no CSS Modules or styled-components. Repeated colors
  and fonts go through the local `orbitron`/`mono` variables
  (`CSSProperties` objects) and the `css(...)` helper (a typed wrapper
  around `Object.assign`) to merge multiple style objects into one JSX
  `style={}`.
- **No external animation libraries**: everything is CSS keyframes inside
  the `CSS` string injected via `<style>{CSS}</style>`, not in
  `globals.css`. If a component needs a new local animation, follow this
  pattern rather than adding a global class.
- Files are **client components** (`"use client"` at the top) — required
  for next-intl's client-side hooks (`useTranslations`, `useLocale`) and
  for `next/navigation`.

## Visible text → always in `messages/`, never hardcoded

Any string shown to the user belongs in `messages/it.json` **and**
`messages/en.json`, with the same key in both. Before hardcoding text in
JSX, check whether an existing namespace (`nav`, `hero`, `stack`,
`experience`, `projects`, `education`, `contact`, `languageSwitcher`,
`notFound`) already fits; otherwise create a new one consistent with the
rest (mod/sys/title/sub for a new section, for example).

For lists/objects (bullets, card arrays) use `t.raw(key)` cast to the
expected TS type, don't rebuild the array in JS. See `educationItems` in
`Portfolio.tsx` as an example.

Data that should **not** be translated (id, colors, URLs, product names,
tech tags, status enum) stays in the TS arrays (`STACK_GROUPS`,
`EXPERIENCE`, `PROJECTS`) as "meta" — don't move it into the JSON files.

## Open item — do not resolve by guessing

`LocaleSwitcher` in `Portfolio.tsx` currently manipulates the pathname
assuming `[locale]`-prefixed URL routing. **This project does not use that
structure** (confirmed: `app/not-found.tsx` sits at the root, not under
`app/[locale]/`). Before touching that component, read `i18n/` to
understand how the locale is actually resolved/set (cookie?
`localStorage`? header?) — the current hypothesis (see `architecture.md`)
is "client-side, given the static export", but it needs to be confirmed
against the real code, not assumed again.

## Tests, lint, build

The repo has `jest.config.ts`, `playwright.config.ts`, `eslint.config.mjs`,
`.husky/`, `AGENTS.md` present — **I have no visibility into the contents
of these files or the scripts in `package.json`**. Before proposing or
running commands (`pnpm test`, `pnpm lint`, `pnpm build`, etc.), verify
them in `package.json` instead of assuming by convention: the project uses
`pnpm`, not `npm`/`yarn` (see `pnpm-lock.yaml` + `pnpm-workspace.yaml`), so
every command should run through `pnpm`.

## Static output (GitHub Pages)

The repo is named `reverb6821.github.io` and has an `out/` folder: almost
certainly built with `output: "export"` in `next.config.ts`. This rules
out anything that requires a Next.js server at runtime — no "real" Server
Actions, no dynamic API routes, no middleware running per-request. Keep
this in mind for any proposed solution (including the `LocaleSwitcher` fix
above).

## What's missing from this set of docs

I have no visibility into `components/`, `hooks/`, `lib/`, `i18n/`,
`types/`, `__tests__/`, `.claude/`, the existing `AGENTS.md`/`CLAUDE.md`,
or `package.json`. These three files (`design.md`, `architecture.md`, this
`claude.md`) describe only `Portfolio.tsx` and `not-found.tsx`, i.e. what
was written so far in this conversation. They should be extended as the
rest of the repo gets shared or modified.