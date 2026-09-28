# FUTÉ 2.0 corporate website

Plain HTML, CSS and JavaScript. No framework, no build step.

```
npm run dev   # http://localhost:5173 (npx serve over public/)
```

| Path | Purpose |
| --- | --- |
| `public/index.html` | The whole single-page site |
| `public/styles.css` | The complete design system |
| `public/main.js` | Nav, scroll reveals, cursor aura, "Ask FUTÉ" dialog, voice input, narration |
| `public/images`, `public/documents`, `public/logo.png` | Assets |

Deploy `public/` on any static host (`vercel.json` already points at it).

`mobile-app/` is the separate React Native (Expo) app and is unchanged.
