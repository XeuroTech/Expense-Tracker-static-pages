# AI-Expense Tracker — Marketing Site

Next.js (App Router) static site for the AI-Expense Tracker mobile app.

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:3000
npm run build    # Next.js production build (standalone output)
npm run lint     # oxlint
```

`next.config.js` sets `output: 'standalone'` so Cloudflare's OpenNext adapter
can package the app for Workers. Run `npm start` after a build to serve it
locally.

## Structure

- `src/app/` — routes (App Router). Each `page.jsx` exports its own
  `metadata` (title, description, canonical URL) using Next's Metadata API.
- `src/components/` — UI components, grouped by section. All are Client
  Components (`'use client'`) since the site is fully interactive (hover
  previews, accordions, mobile drawer, etc.).
- `src/data/` — plain content/config objects consumed by the components
  (features, FAQs, pricing plans, legal copy, etc.) — edit these to change
  copy without touching component code.
- `src/theme/theme.js` — MUI theme (colors, typography) mirrored from the
  mobile app's own design system.
- `public/` — static assets: real app screenshots (`screens/real/`), store
  badges, favicon, `robots.txt`, `sitemap.xml`.
