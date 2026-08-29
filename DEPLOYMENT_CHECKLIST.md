# Deployment Checklist — Samina Batool Portfolio

## Before Deployment

- [x] Production build passes (`npm run build`)
- [x] TypeScript validation passes (`npx tsc --noEmit` -> 0 errors)
- [x] ESLint validation passes (`npm run lint` -> 0 errors/warnings)
- [x] Environment variables configured (`.env.example` created)
- [x] Canonical domain configured (`NEXT_PUBLIC_SITE_URL`)
- [x] Granular metadata & OpenGraph tags verified across all routes
- [x] Dynamic XML sitemap verified (`/sitemap.xml`)
- [x] Robots crawler directives verified (`/robots.txt`)
- [x] Public document downloads verified (`/documents/Samina-Batool-CV.pdf`, etc.)
- [x] No secrets, private keys, or API tokens committed in repository
- [x] `.gitignore` updated and clean

---

## Deployment Instructions

### Standard Node.js / Server Deployment
```bash
# 1. Install dependencies
npm ci

# 2. Build production assets
npm run build

# 3. Start production server
npm run start
```

### Vercel / Netlify / Cloudflare Deployment
* **Framework Preset**: Next.js
* **Build Command**: `npm run build`
* **Output Directory**: `.next`
* **Environment Variable**: `NEXT_PUBLIC_SITE_URL=https://saminabatool.org`

---

## After Deployment Verification

- [ ] Homepage (`/`) loads with HTTP 200
- [ ] All 11 application routes load without console or runtime errors
- [ ] Desktop navigation and dropdown transitions operate smoothly
- [ ] Mobile navigation drawer opens, closes, locks scroll, and navigates correctly
- [ ] Case study pages (`/work/koh-e-zan`, `/work/saheli-first-responder`, `/work/saheli-circles`) render completely
- [ ] Visualizations (Snowflake Network, Stakeholder Matrix, Timelines) render with accessible text fallbacks
- [ ] Document download links (`/documents/Samina-Batool-CV.pdf`, etc.) download cleanly without 404s
- [ ] Contact email (`mailto:`) and phone (`tel:`) links function properly
- [ ] Zero horizontal overflow on mobile viewports (320px, 375px, 430px)
- [ ] Lighthouse Performance & Accessibility audit scores $\ge 95$
