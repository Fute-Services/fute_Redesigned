# FUTÉ 2.0 — Corporate Website

Vite + React + TypeScript build of the FUTÉ 2.0 corporate website concept. A single-page
static site — no server, no framework runtime.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run typecheck  # tsc -b
```

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page shell — title, description, favicon, `#root` mount |
| `src/main.tsx` | React entry point |
| `src/App.tsx` | Section order for the single-page site |
| `src/globals.css` | The complete design system, ported verbatim from the concept |
| `src/components/sections.tsx` | All static editorial sections |
| `src/components/SiteNav.tsx` | Header with the FUTÉ logo and the scrolled/pinned state |
| `src/components/Interactive.tsx` + `AgentStage.tsx` | Interactive decision system and the FUTÉ AI glass panel |
| `src/components/AgentDialog.tsx` | "Ask FUTÉ" modal — choices, voice input concept, narration player |
| `src/components/AgentProvider.tsx` | Shares the selected answer between the stage and the dialog |
| `src/components/CompanyProfileDialog.tsx` | Footer link to the company brochure PDF |
| `src/components/ScrollEffects.tsx` | Scroll-led reveals and the cursor aura |
| `src/components/media.ts` | Image manifest and agent answers |
| `public/logo.png` | FUTÉ services brand mark (nav + footer) |
| `public/images/` | Supplied image library and the narration track, served locally |
| `public/documents/` | Company profile brochure |

`@/*` resolves to `src/*` (see `vite.config.ts` and `tsconfig.app.json`).

All motion is reduced-motion safe, and the layout is responsive down to 390px.

## Deploy

`npm run build` emits a fully static `dist/` — host it on any static host
(Vercel, Netlify, S3, nginx). No Node runtime required.
