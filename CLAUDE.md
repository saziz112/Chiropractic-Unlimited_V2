# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chiropractic Unlimited marketing website — a React 19 SPA for a chiropractic clinic in Valley, AL. Originally scaffolded via Google AI Studio.

## Commands

```bash
npm run dev      # Start dev server (port 3000, host 0.0.0.0)
npm run build    # Production build via Vite
npm run preview  # Preview production build
```

No test runner or linter is configured.

## Architecture

**Tech stack:** React 19, TypeScript 5.8, Vite 6, Tailwind CSS (via CDN in index.html), React Router v7, react-helmet-async for SEO.

**Routing** (client-side, defined in `App.tsx`):
- `/` — HomePage (assembles all section components)
- `/conditions/:slug` — ConditionDetailPage
- `/services/:slug` — ServiceDetailPage
- `/patients/:slug` — PatientDetailPage
- Hash anchors (`/#about`, `/#booking`) for in-page navigation

**Data layer:** All business content lives in `constants.tsx` — a single source of truth for business info, services, conditions, testimonials, navigation items, hours, and bio text. Components are stateless and consume this data directly. There is no state management library and no API layer.

**Component patterns:**
- Section components (`Hero`, `Services`, `Conditions`, `About`, `Location`, etc.) compose the HomePage
- Detail pages (`ConditionDetailPage`, `ServiceDetailPage`, `PatientDetailPage`) use slug-based routing to look up data from `constants.tsx`
- `RevealOnScroll` wraps sections with Intersection Observer fade-in animations
- `Navbar` handles desktop dropdowns and mobile hamburger menu

**Styling:** Tailwind CSS is loaded via CDN with custom theme colors configured inline in `index.html` (not via tailwind.config). Brand colors: `brand-primary` (#164E63), `brand-secondary` (#0891B2), `brand-accent` (#059669). Custom fonts: Figtree, Noto Sans, Playfair Display.

**Path aliases:** `@/*` resolves to the project root (configured in both `vite.config.ts` and `tsconfig.json`).

## Key Files

- `constants.tsx` — All business data; edit here to change content site-wide
- `types.ts` — TypeScript interfaces for data structures
- `App.tsx` — Router setup and page-level layout
- `HomePage.tsx` — Orchestrates section components in order
- `index.html` — Tailwind config, fonts, custom CSS, and meta tags

## Environment Variables

`GEMINI_API_KEY` is defined in Vite config but not actively used. Expected in `.env.local`.
