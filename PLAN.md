# PLAN.md — ui.mosly.dev

Implementation plan and full context for building **ui.mosly.dev**: a shadcn/ui
component showcase (a clone-in-spirit of ui.shadcn.com) that renders every shadcn
component in Leo Mosley's personal design language ("Mosly"), plus a one-command
importable shadcn theme.

This document is written so an agent can implement the project end-to-end without
re-deriving decisions. Read it fully before starting.

---

## 1. Goals

1. **A theme, not a component library.** We ship _theming only_ — no components
   beyond what shadcn already provides. The deliverable theme is importable into
   any shadcn project via `npx shadcn@latest add https://ui.mosly.dev/r/theme.json`.
2. **A showcase site** (Astro + React) that:
   - **Home page** — a curated, real-looking UI (dashboard-style composition) that
     demonstrates the theme in context, à la a product screenshot but live.
   - **Components section** — a searchable list of _every_ shadcn component, each
     with its own demo view, mirroring ui.shadcn.com's docs/components experience.
3. **High polish**: ⌘K command palette, light/dark toggle (light default), Open
   Graph configured for the `ui.mosly.dev` domain, SEO, fast static output.
4. **Deploy target: Vercel** (static + `@astrojs/vercel`). No infra code.

Non-goals: authoring net-new components, MDX docs per component (short demos are
enough), server/backend features.

---

## 2. Current state (what the skeleton already contains)

Everything below is DONE and committed as the `init` skeleton:

- **Monorepo**: Turborepo + Bun workspaces. Root `package.json`, `turbo.json`,
  `tsconfig.json`, `bunfig.toml`, prettier (with astro + tailwind plugins),
  `.gitignore`, `.vscode/`, `.github/` (CODEOWNERS, dependabot, `ci.yml`).
- **App**: `apps/web` — Astro 7 + React 19 + Tailwind v4, `@astrojs/vercel`
  adapter, `site: https://ui.mosly.dev`. Builds green (`bun run build`).
- **Theme (the core deliverable)** — generated from one source of truth:
  - `scripts/convert-palette.ts` — converts the Mosly palette (hex, from the
    `ui-design` skill) to **OKLCH** and emits all theme artifacts. No deps.
  - `apps/web/src/styles/globals.css` — live Tailwind v4 + shadcn theme
    (`@theme inline` mapping, `:root` light, `.dark` dark). **Generated.**
  - `apps/web/public/r/theme.json` — the importable `registry:theme` item.
    **Generated.** Served at `https://ui.mosly.dev/r/theme.json`.
  - `docs/theme-tokens.md`, `docs/palette.oklch.json`, `docs/theme.css`,
    `docs/theme.registry.json` — human/machine references. **Generated.**
- **shadcn config**: `apps/web/components.json` (new-york style, css variables,
  `@/` aliases, lucide icons). `apps/web/src/lib/utils.ts` (`cn`).
- **Design skill**: `skills/ui-design/SKILL.md` — the Mosly methodology + how to
  import the theme. Ship/sync this as the repo's design skill.
- **Docs**: `docs/component-inventory.md` — the full component list to build.

> **Regenerating the theme:** edit the palette in `scripts/convert-palette.ts`,
> then `bun run scripts/convert-palette.ts`. Never hand-edit `globals.css` or
> `public/r/theme.json` — they are overwritten. Wire this into `package.json` as
> a `theme` script and consider a CI check that the artifacts are up to date.

---

## 3. Tech stack & versions

| Concern     | Choice                                                       |
| ----------- | ------------------------------------------------------------ |
| Runtime/PM  | Bun 1.2 (workspaces), Turborepo                              |
| Framework   | Astro 7 (static output), React 19 islands                    |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`), OKLCH theme           |
| Components  | shadcn/ui (new-york), Base UI primitives, `lucide-react` icons |
| Fonts       | Inter (sans), Geist Mono (mono)                              |
| Deploy      | Vercel via `@astrojs/vercel` (static)                        |
| Search / ⌘K | `cmdk` (via shadcn `command`)                                |
| Toast       | `sonner` (shadcn `toast`)                                    |

---

## 4. Repository layout (target)

```
apps/web/
  public/
    r/theme.json            # registry theme (generated)
    favicon.svg
    og/                     # static OG fallback image(s)
  src/
    components/
      ui/                   # shadcn components (added via CLI)
      demos/                # one demo per shadcn component (<name>.tsx)
      showcase/             # home-page composed "real UI" sections
      site/                 # nav, footer, theme-toggle, command-palette
    data/
      components.ts         # the component registry: name, group, demo, meta
    layouts/
      Base.astro            # <head>, OG/SEO, theme no-flash script, fonts
    lib/
      utils.ts              # cn()
      seo.ts                # buildMeta() helper for OG/twitter tags
    pages/
      index.astro           # home: composed real-UI showcase
      components/
        index.astro         # searchable list of all components
        [component].astro   # individual component demo page
      og/[...].ts           # (optional) dynamic OG image endpoint
    styles/
      globals.css           # theme (generated)
  astro.config.mjs
  components.json
scripts/convert-palette.ts
skills/ui-design/SKILL.md
docs/
```

---

## 5. Design system (summary — full detail in `skills/ui-design/SKILL.md`)

- **Light by default.** Add `.dark` only after the user explicitly selects dark mode.
- **One accent**: lavender-blue `--primary` = `oklch(0.5674 0.1585 275.21)`.
- **Surface ladder** carries hierarchy (canvas→surface-1..4), **hairline borders**
  (1px), **no shadows/glows**, no second chromatic hue.
- **Type**: Inter, tight negative tracking on display; body at −0.011em. Geist
  Mono for code.
- **Radius**: `--radius: 0.75rem` (12px) default.
- Token tables: `docs/theme-tokens.md`. Palette JSON: `docs/palette.oklch.json`.

When building any UI, follow the `ui-design` skill. Prefer composing shadcn
primitives; do not invent new components.

---

## 6. shadcn setup & adding components

1. Verify `components.json` (already present). It targets Tailwind v4 + CSS vars.
2. Because the theme is already in `globals.css`, do **not** let `shadcn init`
   overwrite it — if running init, decline the base-color overwrite or restore
   `globals.css` from the generator afterward (`bun run scripts/convert-palette.ts`).
3. Add every component from `docs/component-inventory.md`:
   ```sh
   cd apps/web
   bunx shadcn@latest add button card input ... # full list from the inventory
   ```
   Add them in batches; some (data-table, chart, form) pull extra deps
   (`@tanstack/react-table`, `recharts`, `react-hook-form`, `zod`). Install as
   prompted.
4. Components land in `src/components/ui/`. They consume the theme variables
   automatically — **do not restyle them**; the theme does the work.
5. Astro note: shadcn components are React. Render them inside `.astro` via React
   islands (`client:load` / `client:visible` / `client:idle`). Interactive demos
   (dialogs, ⌘K, toggles) need `client:load` or `client:idle`.

---

## 7. The component registry (data model)

Create `src/data/components.ts` — the single source that drives the components
list, search, and individual pages:

```ts
export type ComponentGroup = "Forms" | "Data Display" | "Navigation" | "Overlays" | "Layout";

export interface ComponentEntry {
  slug: string; // "button"
  name: string; // "Button"
  group: ComponentGroup;
  description: string; // one-liner for cards + search
  keywords?: string[]; // extra search terms
  shadcnUrl: string; // link to upstream docs
}
```

Populate from `docs/component-inventory.md` (58 stable components and documented compositions). Each `slug` maps to a
demo component in `src/components/demos/<slug>.tsx`. Use a demo map:

```ts
// src/components/demos/index.ts
export const demos: Record<string, React.ComponentType> = { button: ButtonDemo, ... };
```

Demos should be small, realistic, and show the common variants/states (e.g.
Button: default/secondary/outline/ghost/destructive + sizes + loading). Keep them
themed by the tokens only.

---

## 8. Pages

### 8.1 Home (`/`) — the "real UI" showcase

A single, composed, believable product UI that shows the theme in context (this
is the site's hero, replacing static screenshots with live UI). Suggested
composition, built from shadcn primitives inside `src/components/showcase/`:

- Top app bar (logo, nav, ⌘K trigger, theme toggle, avatar/dropdown).
- Left `sidebar` with nav sections.
- Main: a dashboard — stat `card`s, a `chart` (area/bar), a `data-table` with
  `badge` statuses, `tabs`, a `dialog`/`sheet` trigger, `command` palette.
- A secondary panel showing forms (`input`, `select`, `switch`, `slider`).
- Hero copy above/around it: display type, one primary CTA, a "Copy install
  command" button (`npx shadcn add https://ui.mosly.dev/r/theme.json`).

Goal: someone lands, sees a gorgeous dark product UI, and immediately gets the
theme. Keep chrome minimal; let the UI carry the page.

### 8.2 Components list (`/components`)

- Mirrors ui.shadcn.com/docs/components: a sidebar or grouped grid of all
  components with a **search box** (client-side fuzzy filter over the registry).
- Each item is a card linking to `/components/<slug>`, ideally with a tiny live
  preview or a representative icon.
- Groups from §7. The search box and ⌘K share the same index.

### 8.3 Component page (`/components/[component]`)

- Static path generation from the registry (`getStaticPaths`).
- Renders: title, description, a **live interactive demo** (React island), and a
  link to the upstream shadcn docs. Optionally show the install command for that
  component. No need for full prop tables/MDX — the demo is the point.

---

## 9. Fonts

- Self-host via `@fontsource-variable/inter` and `geist` (Geist Mono), imported
  in `Base.astro`, or use Fontsource CSS. Wire to `--font-sans` / `--font-mono`
  (already referenced by `globals.css`). Preload the primary weights. Avoid FOUT
  by `font-display: swap` + preloading the variable font.

---

## 10. Dark / light mode

- **Light is default.** Leave `<html>` unclassed in `Base.astro`.
- Add a **no-flash inline script** in `<head>` that reads `localStorage.theme`
  (defaulting to light) and sets/removes `.dark` before
  paint.
- A `ThemeToggle` React island toggles `.dark` on `documentElement` and persists
  to `localStorage`. Use lucide `Sun`/`Moon`. Place it in the top nav.
- Both palettes already exist in `globals.css` (`:root` = light, `.dark` = dark).

---

## 11. ⌘K command palette

- Use shadcn `command` (`cmdk`) inside a `dialog` → the standard `CommandDialog`.
- A React island mounted globally (in `Base.astro`, `client:idle`) listening for
  `⌘K` / `Ctrl+K` and `/`.
- Index: all components (jump to `/components/<slug>`), primary nav, theme
  actions ("Toggle theme"), and a "Copy install command" action.
- Reuse the same search index as the components list (`src/data/components.ts`).

---

## 12. SEO & Open Graph (domain: ui.mosly.dev)

- `site: "https://ui.mosly.dev"` is set in `astro.config.mjs`; use `Astro.site`
  to build absolute URLs.
- `src/lib/seo.ts` → `buildMeta({ title, description, path, image })` returning
  the full tag set. `Base.astro` renders:
  - `<title>`, `<meta name="description">`, canonical `<link rel="canonical">`.
  - Open Graph: `og:type`, `og:site_name` = "ui.mosly.dev", `og:title`,
    `og:description`, `og:url` (absolute), `og:image` (absolute, 1200×630).
  - Twitter: `twitter:card=summary_large_image`, title/description/image.
  - `theme-color` = canvas (`#010102`).
- **OG images**: start with a static `public/og/default.png` (1200×630, dark,
  brand mark + tagline). Optionally add per-page dynamic OG via an Astro endpoint
  using `@vercel/og` / `satori` at `src/pages/og/[...].ts`. Static is acceptable
  for v1.
- Add `@astrojs/sitemap` and a `robots.txt` (`public/robots.txt`) pointing to
  `https://ui.mosly.dev/sitemap-index.xml`.

---

## 13. Vercel deployment

- Adapter `@astrojs/vercel` already wired; `output: "static"`.
- Vercel project settings: framework = Astro, root directory = `apps/web`
  (monorepo), build = `bun run build`, install = `bun install` (from repo root).
  Because it's a Bun/Turbo monorepo, set the Vercel **Root Directory** to
  `apps/web` OR use a root `vercel.json` / Turbo remote cache. Simplest: point
  Vercel at `apps/web`.
- Domain: add `ui.mosly.dev` in Vercel and configure DNS (CNAME → Vercel).
- Confirm `public/r/theme.json` is served at `/r/theme.json` (static passthrough).
- The registry JSON must be reachable + CORS-friendly for the shadcn CLI (static
  files on Vercel are fine).

---

## 14. Registry / theme distribution

- The theme item is `apps/web/public/r/theme.json` (generated). It is a
  `registry:theme` with `cssVars.theme.radius`, `cssVars.light`, `cssVars.dark`.
- Verified install path: `npx shadcn@latest add https://ui.mosly.dev/r/theme.json`.
- If we later add a `registry.json` index (multiple items), use
  `shadcn build` to emit `public/r/*.json` and keep `theme.json` as the theme.
  Root script `registry:build` already stubs this.
- Test the install against a scratch shadcn app before launch (see §16).

---

## 15. Tooling / CI

- `bun run typecheck` = `astro check` (also used as lint in CI). Keep it green.
- Prettier with astro + tailwind plugins; `bun run format`.
- `ci.yml` runs typecheck + lint on PRs to `main`. Consider adding a job that
  runs `bun run scripts/convert-palette.ts` and fails if `git diff` is dirty
  (ensures generated theme is committed).

---

## 16. QA / launch checklist

- [ ] Every component in `docs/component-inventory.md` has a demo and a page.
- [ ] `/components` search filters correctly; ⌘K opens and navigates.
- [ ] Theme toggle works with no flash on reload; light is default.
- [ ] Home page renders a convincing composed UI in both themes.
- [ ] OG tags present + absolute; link preview renders on Slack/Twitter/iMessage.
- [ ] `sitemap` + `robots.txt` correct for ui.mosly.dev.
- [ ] `npx shadcn add https://ui.mosly.dev/r/theme.json` applied to a fresh
      Tailwind-v4 shadcn app reproduces the exact look.
- [ ] Lighthouse: performance/SEO/accessibility all strong; no CLS from fonts.
- [ ] `bun run build` + `bun run typecheck` green in CI.

---

## 17. Suggested milestones

1. **Foundation**: add all shadcn components; fonts; `Base.astro` layout with
   SEO/OG + no-flash theme script; theme toggle island. Verify build.
2. **Registry model + demos**: `src/data/components.ts` + one demo per component.
3. **Components pages**: `/components` list with search; `/components/[slug]`.
4. **⌘K palette**: global command dialog wired to the registry.
5. **Home showcase**: composed dashboard UI; hero + copy-install CTA.
6. **Polish**: OG images, sitemap/robots, accessibility, performance, dark/light
   parity pass following the `ui-design` skill.
7. **Distribution QA**: install the theme into a scratch app; fix mismatches.
8. **Deploy**: Vercel project + `ui.mosly.dev` domain.

---

## 18. Open decisions (resolve during implementation)

- **Static vs dynamic OG images** — start static, upgrade to `@vercel/og` if per
  component previews are wanted.
- **Per-component code snippets** — optional; the interactive demo is the primary
  artifact. Add copy-able source later if desired.
- **shadcn canary/base naming** — some components (attachment, bubble, message,
  questionnaire, marker) are canary-only; include them only if present in the
  installed shadcn version, else omit and note in the registry data.
- **Sidebar vs grid** for `/components` — grid of grouped cards is recommended for
  a showcase; a left sidebar (shadcn `sidebar`) also doubles as a component demo.
