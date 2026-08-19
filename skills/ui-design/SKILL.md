---
name: ui-design
description: >-
  Leo Mosley's personal UI design language (the "Mosly" system) and how to apply
  it via the shadcn theme published at https://ui.mosly.dev. Use when building or
  styling any UI that should match mosly.dev — a dark, restrained, Linear-inspired
  aesthetic with a single lavender-blue accent — or when importing the Mosly theme
  into a shadcn project.
---

# Skill: ui-design (Mosly system)

## What this is

A software-craft design language with light as the site default and a deep dark mode: a restrained canvas, a single
lavender-blue accent (`#5e6ad2`), a four-step surface ladder, hairline borders,
and tight negative-tracked display type. Restraint over decoration. It ships as a
shadcn `registry:theme` so any shadcn project can adopt it in one command.

## Importing the theme

The theme is served as a shadcn registry item:

```sh
npx shadcn@latest add https://ui.mosly.dev/r/theme.json
```

This writes the OKLCH `:root` / `.dark` CSS variables and `--radius` into the
project's global stylesheet. Requirements in the target project:

- shadcn/ui initialised (`npx shadcn@latest init`) with **CSS variables** enabled.
- **Tailwind v4** (the theme uses OKLCH values and the `@theme inline` mapping).
- A `.dark` class strategy for dark mode (default shadcn setup). Light is the
  intended default; add `.dark` only when the user selects dark mode.

Fonts are not installed by the theme. Add **Inter** (sans) and **Geist Mono**
(mono) and wire them to `--font-sans` / `--font-mono`.

## Design methodology

**Palette (semantic, not decorative).** One accent only. Never introduce a second
chromatic hue for emphasis; use the surface ladder and ink hierarchy instead.

- `primary` = `#5e6ad2` (lavender-blue) — brand mark, focus rings, primary CTA only.
- Ink hierarchy: `ink` → `ink-muted` → `ink-subtle` → `ink-tertiary`.
- Surface ladder: `canvas` → `surface-1` → `surface-2` → `surface-3` → `surface-4`.
- Borders are **hairlines** (1px), never heavy. `hairline` → `hairline-strong`.
- Only semantic color beyond primary is `semantic-success` (`#27a644`).
- `destructive` red exists for shadcn compatibility but is used sparingly.

**Hierarchy through surface, not shadow.** Lift elements by stepping up the
surface ladder + a hairline border. Avoid drop shadows and glows. No atmospheric
gradients, no spotlight cards.

**Typography.** Display type is weight 500–700 with aggressive negative
letter-spacing (−3px at 80px, easing to ~0 at body). Body holds at −0.011em. Use
`Inter` for display + body, `Geist Mono` for code.

**Radius.** Cards use `rounded.lg` (12px, the default `--radius`). Rarely 16px
(`xl`). Pills only for tabs/badges. Never fully-round general surfaces.

**Spacing & rhythm.** Dense but calm. Section rhythm ~96px. Let content (real UI,
component demos) do the work; keep chrome minimal.

## Full token reference

The canonical hex → OKLCH token tables live in the repo at
`docs/theme-tokens.md`, and the machine-readable palette at
`docs/palette.oklch.json`. The generator is `scripts/convert-palette.ts` — edit
the palette there and re-run `bun run scripts/convert-palette.ts` to regenerate
the theme, `globals.css`, and the published registry file.

## Do / Don't

- DO default to light. DO use one accent. DO lean on hairlines + surface steps.
- DO keep type tight and quiet; large headings, calm body.
- DON'T add a second accent color or saturated status colors beyond success.
- DON'T use shadows/glows for elevation. DON'T round everything into pills.
