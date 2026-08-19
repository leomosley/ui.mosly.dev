# Mosly UI

A shadcn/ui theme and a live showcase of every component wearing it. Mosly UI is
a calm, Linear-inspired design language: restrained surfaces, sharp type, and one
accent. The theme installs as a shadcn registry item, so it swaps the design
tokens and leaves every component, dependency, and API exactly where it was.

The site lives at [ui.mosly.dev](https://ui.mosly.dev).

## Install

Add the theme to any shadcn project:

```sh
npx shadcn@latest add https://ui.mosly.dev/r/theme.json
```

This changes tokens only. It targets Tailwind v4 with OKLCH colors, ships light
and dark modes, and pairs Inter with Geist Mono.

## Development

```sh
bun install
bun run dev
```

Other scripts:

```text
bun run build         Build the site through Turbo
bun run typecheck     Run astro check across the workspace
bun run lint          Lint (astro check)
bun run format        Prettier write
bun run theme         Regenerate theme tokens from the source palette
bun run registry:build  Rebuild the shadcn registry output
```

The theme is generated. Edit `docs/palette.oklch.json`, run `bun run theme`, and
the token CSS and registry JSON are rebuilt from it.

## Structure

- `apps/web` — Astro + React showcase site, deployed to Vercel.
- `apps/web/public/r/theme.json` — the published shadcn registry item.
- `docs/` — design references, the palette source, and generated token tables.

## Deployment

The site deploys to Vercel from `main`.

1. Import `github.com/leomosley/ui.mosly.dev` into Vercel.
2. Leave the root directory at the repo root; `vercel.json` supplies the build
   command, output directory, and Astro framework preset.
3. Add `ui.mosly.dev` under Project → Domains and point the prompted DNS record
   to Vercel.

No runtime environment variables are required by the static site.

## License

MIT
