# jaskarnnijjar.com

Personal business site and portfolio for Jaskarn Nijjar, a software developer based in Vancouver, BC.

The site is business-first. The homepage helps business owners understand what Jaskarn builds, see recent client websites, review the process, and get in touch. The `/projects` page gives more technical detail for developer and recruiter audiences.

## Current Site Structure

- `/` is the main landing page.
- `/projects` is the technical projects page.
- `/work` redirects to `/#work`.
- `/services` redirects to `/#services`.
- `/contact` redirects to `/#contact`.
- `/about` redirects to `/projects`.

The sitemap currently includes `/` and `/projects`.

## Main Sections

The homepage is composed from these components:

- `Hero`: business-focused headline, location, CTA, animated kinetic code backdrop, and hero-only glass website showcase.
- `WorkShowcase`: recent business websites with large clickable previews.
- `HomeServices`: services for business websites, redesigns, performance and SEO, and ongoing improvements.
- `HomeProcess`: production-track project process section.
- `HomeCTA`: contact section.

The projects page includes:

- RepuFlow, a reputation management app for small service businesses.
- NorthTunnel, a Layer 3 VPN built from scratch in Python.

## Design System

The current design is a dark, studio-grade developer portfolio with a focused cyan accent system. The primary accent token is `--accent-signal: #00e5ff`.

Important visual pieces:

- Non-mouse-reactive animated hero canvas in `HeroKineticBackdrop`
- Hero-only glass frame showcase in `HeroGlassShowcase`
- Clickable work cards in `WorkShowcase`
- Studio-style services, process, and contact sections
- Dark technical project cards on `/projects`

The glass showcase belongs only to the landing hero. The "Recent business websites" section should remain clear, clickable, and easy to scan on mobile and desktop.

## Client Work

The homepage currently features these business websites:

- Mission Insulation: `https://missioninsulation.ca`
- Edge Insulation: `https://edgeinsulation.ca`
- GoViral Campaigns: `https://goviralcampaigns.com`
- NCA Tires: `https://ncatires.netlify.app`

Preview images live in `public/work-previews/`.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `next/font` with Hanken Grotesk and Spline Sans Mono
- `next/image`
- Lucide React
- Radix UI and local UI components
- `@vercel/og`

## Important Files

- `src/app/page.tsx`: homepage composition and homepage JSON-LD
- `src/app/layout.tsx`: global metadata, fonts, navbar, footer, layout shell, and `GlassFilters`
- `src/app/projects/page.tsx`: technical projects page
- `src/app/opengraph-image.tsx`: generated Open Graph image
- `src/lib/constants.ts`: site metadata, nav links, client projects, services, and technical projects
- `src/app/globals.css`: global Tailwind setup and custom visual system
- `src/components/home/HeroKineticBackdrop.tsx`: animated hero canvas
- `src/components/home/HeroGlassShowcase.tsx`: hero-only glass website showcase
- `src/components/home/WorkShowcase.tsx`: recent business websites
- `tests/homepage-content.test.mjs`: content and structure guardrails

## Commands

```bash
npm run dev
npm test
npm run lint
npm run build
npm run start
```

Run the dev server at `http://localhost:3000`.

## SEO Notes

Current SEO-related pieces:

- Global metadata in `src/app/layout.tsx`
- Homepage metadata and JSON-LD using `Person` and `LocalBusiness`
- Projects page metadata in `src/app/projects/page.tsx`
- Generated Open Graph image in `src/app/opengraph-image.tsx`
- Generated sitemap in `src/app/sitemap.ts`
- Generated robots file in `src/app/robots.ts`
- Client website previews use `next/image` with alt text in the clickable work section
- Redirect routes keep older section URLs working

## Content Rules

- Refer to Jaskarn as a software developer.
- Location should be Vancouver, BC.
- Keep the copy direct and specific.
- Avoid filler, hype, and vague agency language.
- Do not use em dashes in visible copy or documentation.
- Keep business owners as the primary audience.
- Keep technical projects available, but secondary to client work.
- Do not change site copy when the request is design-only.

## Design Guardrails

- Keep the cyan accent coherent across the site.
- Do not reintroduce gold, orange, lime, or mismatched accent colors.
- Do not reintroduce generic grid backgrounds.
- Do not make the hero background reactive to mouse movement.
- Do not move the glass showcase into the "Recent business websites" section.
- Keep the work showcase readable and mobile-friendly.
- Respect `prefers-reduced-motion`.
- Keep motion polished, purposeful, and fast.
