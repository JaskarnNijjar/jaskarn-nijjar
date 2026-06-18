# jaskarnnijjar.com

Personal business site and portfolio for Jaskarn Nijjar, a software developer based in Vancouver, BC.

The site is business-first. The homepage is meant to help business owners understand what Jaskarn builds, see recent client websites, review the process, and get in touch. The `/projects` page gives more technical detail for developer and recruiter audiences.

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

- `Hero`: business-focused headline, location, CTA, and animated build-stage background.
- `WorkShowcase`: recent business websites with large clickable previews.
- `HomeServices`: services for business websites, redesigns, SEO and speed cleanup, and ongoing improvements.
- `HomeProcess`: a route-style project process section.
- `HomeCTA`: contact section.

The projects page includes:

- RepuFlow, a reputation management app for small service businesses.
- NorthTunnel, a Layer 3 VPN built from scratch in Python.

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
- `next/font` with Geist and Geist Mono
- `next/image`
- Framer Motion
- Lucide React
- Radix UI and local UI components
- `@vercel/og`

## Important Files

- `src/app/page.tsx`: homepage composition and homepage JSON-LD
- `src/app/layout.tsx`: global metadata, fonts, navbar, footer, and layout shell
- `src/app/projects/page.tsx`: technical projects page
- `src/lib/constants.ts`: site metadata, nav links, client projects, services, and technical projects
- `src/app/globals.css`: global Tailwind setup and custom visual system
- `tests/homepage-content.test.mjs`: content and structure guardrails

## Commands

```bash
npm run dev
npm test
npm run lint
npm run build
```

Run the dev server at `http://localhost:3000`.

## SEO Notes

Current SEO-related pieces:

- Global metadata in `src/app/layout.tsx`
- Projects page metadata in `src/app/projects/page.tsx`
- Homepage JSON-LD using `Person` and `LocalBusiness`
- Generated sitemap in `src/app/sitemap.ts`
- Generated robots file in `src/app/robots.ts`
- Client website previews use `next/image` with alt text
- Redirect routes keep older section URLs working

## Content Rules

- Refer to Jaskarn as a software developer.
- Location should be Vancouver, BC.
- Keep the copy direct and specific.
- Avoid filler, hype, and vague agency language.
- Do not use em dashes in visible copy or documentation.
- Keep business owners as the primary audience.
- Keep technical projects available, but secondary to client work.

## Design Notes

The current design uses a dark glass style with teal, blue, violet, and gold accents. It should feel polished and custom, but still load quickly.

Important current visual pieces:

- Animated hero build-stage background
- Large glass-framed client website previews
- Glass services board
- Route-style process board
- Dark project page with technical project cards

When changing visuals, keep the site coherent with those pieces and avoid generic grid backgrounds or filler decoration.
