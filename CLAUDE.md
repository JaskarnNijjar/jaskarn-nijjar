# Project Guide for jaskarnnijjar.com

## What This Project Is

This is the personal business site and portfolio for Jaskarn Nijjar, a software developer based in Vancouver, BC.

The site has two audiences:

- Business owners who may hire Jaskarn to build or improve a website.
- Developers, recruiters, or technical reviewers who want to see project depth.

Business owners are the primary audience. The homepage should focus on business outcomes, recent client websites, services, process, and contact. Technical projects belong on `/projects` and should support credibility without taking over the homepage.

## Current Routing

The site is intentionally simple right now:

- `/` is the main landing page.
- `/projects` is the technical projects page.
- `/work` redirects to `/#work`.
- `/services` redirects to `/#services`.
- `/contact` redirects to `/#contact`.
- `/about` redirects to `/projects`.

Do not add filler pages just because nav labels exist. If a topic can be handled well on the homepage, keep it there.

## Current Homepage Structure

The homepage is assembled in `src/app/page.tsx`:

1. `Hero`
2. `WorkShowcase`
3. `HomeServices`
4. `HomeProcess`
5. `HomeCTA`

The homepage also includes JSON-LD structured data for `Person` and `LocalBusiness`.

## Current Visual Direction

The current design is a dark glass site with animated technical details. Keep it polished, but do not make it loud just for the sake of motion.

Current visual pieces:

- Hero build-stage animation in `HeroBuildStage`
- Animated project preview deck in `ProjectSignalDeck`
- Large clickable client website previews in `WorkShowcase`
- Glass services board in `HomeServices`
- Route-style process board in `HomeProcess`
- Dark technical project cards on `/projects`

Avoid generic grid backgrounds, random symbols, radar-style icons, diagonal line patterns, and decoration that does not support the section.

## Design Preferences

- Business-first.
- Clean, custom, and visually interesting.
- Glass styling is welcome, but it should look intentional and readable.
- Motion should be noticeable where it matters, but the site still needs to feel fast.
- Do not make every section use the same layout pattern.
- Do not turn the homepage into a wall of sections.
- Use real previews and real project names.
- Keep the recent business websites previews large and easy to inspect.
- Keep the process section visually distinct from the services section.

## Copy and Tone

Use plain language. Do not write dramatic or AI-sounding copy.

Rules:

- Refer to Jaskarn as a software developer.
- Location is Vancouver, BC.
- Say what the work does in practical terms.
- Keep sentences short.
- Avoid filler and hype.
- Avoid vague, dramatic lines that sound like placeholder marketing.
- Do not frame the business around being a one-person shop.
- Do not use em dashes anywhere in docs, copy, metadata, or visible UI text.

Good CTA examples:

- Start a project
- Visit site
- View on GitHub
- Back to home

## Client Work

Client websites are defined in `src/lib/constants.ts` under `CLIENT_PROJECTS`.

Current client projects:

- Mission Insulation: `https://missioninsulation.ca`
- Edge Insulation: `https://edgeinsulation.ca`
- GoViral Campaigns: `https://goviralcampaigns.com`
- NCA Tires: `https://ncatires.netlify.app`

Preview images live in `public/work-previews/`.

The client work section should keep these websites clickable and should show real previews inside the site.

## Technical Projects

Technical projects are defined in `src/lib/constants.ts` under `TECHNICAL_PROJECTS`.

Current technical projects:

- RepuFlow: reputation management app for small service businesses.
- NorthTunnel: Layer 3 VPN built from scratch in Python.

Each project should link to GitHub and focus on a few useful highlights, not the full README.

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

Package scripts:

```bash
npm run dev
npm test
npm run lint
npm run build
```

## File Map

Important files:

- `src/app/page.tsx`: homepage composition and homepage JSON-LD
- `src/app/layout.tsx`: global metadata, fonts, navbar, footer, and layout shell
- `src/app/projects/page.tsx`: technical projects page
- `src/app/globals.css`: Tailwind setup and custom visual system
- `src/lib/constants.ts`: site info, nav links, client projects, services, and technical projects
- `src/components/home/Hero.tsx`: homepage hero
- `src/components/home/HeroBuildStage.tsx`: animated hero background
- `src/components/home/WorkShowcase.tsx`: recent business websites
- `src/components/home/HomeServices.tsx`: services section
- `src/components/home/HomeProcess.tsx`: process section
- `src/components/home/HomeCTA.tsx`: contact CTA
- `tests/homepage-content.test.mjs`: content and structure guardrails

## SEO Requirements

Keep SEO practical and lightweight.

Current SEO pieces:

- Global metadata in `src/app/layout.tsx`
- Projects page metadata in `src/app/projects/page.tsx`
- Homepage JSON-LD in `src/app/page.tsx`
- Sitemap in `src/app/sitemap.ts`
- Robots file in `src/app/robots.ts`
- Semantic section structure
- Real alt text for project previews
- Redirects for `/work`, `/services`, `/contact`, and `/about`

When adding content, keep headings clear and avoid duplicate or vague page titles.

## Performance Notes

The site should stay fast. Do not add heavy animation libraries or large assets unless there is a clear reason.

Guidelines:

- Use `next/image` for real images.
- Lazy load below-fold images unless they are important for first paint.
- Respect `prefers-reduced-motion`.
- Keep animations mostly CSS-based unless interactivity needs React state.
- Avoid canvas or Three.js unless the user explicitly wants that direction again.
- Run a production build before handing off changes.

## Testing and Verification

Before handing off meaningful changes, run:

```bash
npm test
npm run lint
npm run build
```

For visual changes, also check the site in the browser at desktop and mobile widths. Look for:

- No horizontal overflow
- No text overlap
- No unreadable text over backgrounds
- No broken images
- No layout shift that makes sections feel jumpy
- No console warnings that matter

## Things to Avoid

- Using the wrong role for Jaskarn.
- Using the wrong location for Jaskarn.
- Adding filler pages.
- Writing vague dramatic copy.
- Using em dashes.
- Making sections look like generic AI portfolio blocks.
- Shrinking client website previews so they are hard to inspect.
- Reusing the same card layout for every section.
- Adding decorative patterns that do not serve the design.
- Making the site slower just to add effects.
