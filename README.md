# L&LL – French Language Center

Premium production website for **L&LL**, a French language education brand.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion + GSAP ScrollTrigger + Lenis
- Three.js + React Three Fiber + Drei + postprocessing
- React Hook Form + Zod + TanStack Query

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development (Turbopack)
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Architecture

```
src/
  app/                 # Routes, SEO, sitemap, robots
  components/
    cursor/            # Custom cursor
    forms/             # Contact form
    layout/            # Shell, navbar, footer, page hero
    loader/            # Cinematic loader
    providers/         # Query, cursor, Lenis
    sections/          # Home & shared sections
    three/             # Paris 3D scene
    ui/                # Magnetic buttons, reveal, ambient
  data/                # Content & navigation
  lib/                 # Utils, site constants
```

## Design system

- French Blue `#103A71`
- Luxury Gold `#C8A646`
- Dark Navy `#091420`
- French Red `#E63946`
- Background `#F7F9FC`

Typography: Playfair Display · Manrope · Inter · Space Grotesk
