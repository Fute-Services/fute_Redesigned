# FUTÉ 2.0 — Corporate Website

Next.js (App Router) rebuild of the FUTÉ 2.0 corporate website concept.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Structure

| Path | Purpose |
| --- | --- |
| `app/globals.css` | The complete design system, ported verbatim from the concept |
| `app/page.tsx` | Section order for the single-page site |
| `components/sections.tsx` | All static editorial sections |
| `components/SiteNav.tsx` | Header with the FUTÉ logo and the scrolled/pinned state |
| `components/Interactive.tsx` + `AgentStage.tsx` | Interactive decision system and the FUTÉ AI glass panel |
| `components/AgentDialog.tsx` | "Ask FUTÉ" modal — choices, voice input concept, narration player |
| `components/AgentProvider.tsx` | Shares the selected answer between the stage and the dialog |
| `components/ScrollEffects.tsx` | Scroll-led reveals and the cursor aura |
| `components/media.ts` | Image manifest and agent answers |
| `public/logo.png` | FUTÉ services brand mark (nav + footer) |
| `public/images/` | Supplied image library and the narration track, served locally |

All motion is reduced-motion safe, and the layout is responsive down to 390px.
