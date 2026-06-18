# Project Guide for jaskarnnijjar.com

## What This Project Is

This is the personal business site and portfolio for Jaskarn Nijjar, a software developer based in Vancouver, BC.

The site has two audiences:

- Business owners who may hire Jaskarn to build or improve a website.
- Developers, recruiters, or technical reviewers who want to see project depth.

Business owners are the primary audience. The homepage should focus on business outcomes, recent client websites, services, process, and contact. Technical projects belong on `/projects` and should support credibility without taking over the homepage.

## Current Routing

The site is intentionally simple:

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

The current design is a dark, studio-grade developer site with a technical motion system and a focused cyan accent. It should feel custom, sharp, and built by a capable software developer without becoming noisy or gimmicky.

Current visual pieces:

- `HeroKineticBackdrop`: a non-mouse-reactive animated canvas background with source columns, packet flows, and compiler-field motion.
- `HeroGlassShowcase`: a hero-only animated glass frame display using the first three client website previews.
- `WorkShowcase`: the "Recent business websites" section with large, readable, clickable client cards. This is not the hero glass display.
- `HomeServices`: a dark studio board for business website services.
- `HomeProcess`: a production-track process section.
- `HomeCTA`: a framed contact section.
- `/projects`: dark technical project cards for software depth.

The accent system is cyan, centered on `--accent-signal: #00e5ff`. Do not reintroduce gold, orange, lime, random blue accents, or mixed accent families.

## Design Preferences

- Business-first.
- Clean, custom, and visually interesting.
- The landing should have a real "wow" moment through polished motion and composition.
- The hero background should feel fitting for a software developer.
- The hero background must not react to mouse movement.
- Glass styling is welcome, but it should be intentional and readable.
- The animated glass showcase belongs on the hero only.
- The "Recent business websites" section should stay easy to understand on mobile and desktop.
- Keep client website previews large enough to inspect.
- Do not make every section use the same layout pattern.
- Do not turn the homepage into a wall of repeated cards.
- Use real previews and real project names.
- Keep the process section visually distinct from the services section.

## Copy and Tone

Use plain language. Do not write dramatic or AI-sounding copy.

Rules:

- Do not change website copy unless explicitly asked.
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

The hero glass showcase uses the first three client projects as decorative previews. The actual client work section should keep all websites clickable and should show real previews inside clear cards.

## Technical Projects

Technical projects are defined in `src/lib/constants.ts` under `TECHNICAL_PROJECTS`.

Current technical projects:

- RepuFlow: reputation management app for small service businesses.
- NorthTunnel: Layer 3 VPN built from scratch in Python.

Each project should link to GitHub and focus on useful highlights, not the full README.

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

Package scripts:

```bash
npm run dev
npm test
npm run lint
npm run build
npm run start
```

Before writing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` because this project uses a newer Next.js version with behavior that may differ from older assumptions.

## File Map

Important files:

- `src/app/page.tsx`: homepage composition and homepage JSON-LD
- `src/app/layout.tsx`: global metadata, fonts, navbar, footer, layout shell, and `GlassFilters`
- `src/app/projects/page.tsx`: technical projects page
- `src/app/globals.css`: Tailwind setup and custom visual system
- `src/lib/constants.ts`: site info, nav links, client projects, services, and technical projects
- `src/components/effects/GlassFilters.tsx`: shared SVG filters for glass effects
- `src/components/home/Hero.tsx`: homepage hero composition
- `src/components/home/HeroKineticBackdrop.tsx`: animated canvas hero background
- `src/components/home/HeroGlassShowcase.tsx`: hero-only glass frame showcase
- `src/components/home/WorkShowcase.tsx`: recent business websites
- `src/components/home/HomeServices.tsx`: services section
- `src/components/home/HomeProcess.tsx`: process section
- `src/components/home/HomeCTA.tsx`: contact CTA
- `tests/homepage-content.test.mjs`: content and structure guardrails

## SEO Requirements

Keep SEO practical and lightweight.

Current SEO pieces:

- Global metadata in `src/app/layout.tsx`
- Homepage metadata and JSON-LD in `src/app/page.tsx`
- Projects page metadata in `src/app/projects/page.tsx`
- Open Graph image route in `src/app/opengraph-image.tsx`
- Sitemap in `src/app/sitemap.ts`
- Robots file in `src/app/robots.ts`
- Semantic section structure
- Real alt text for project previews in clickable work cards
- Redirects for `/work`, `/services`, `/contact`, and `/about`

When adding content, keep headings clear and avoid duplicate or vague page titles.

## Performance Notes

The site should stay fast. Do not add heavy animation libraries or large assets unless there is a clear reason.

Guidelines:

- Use `next/image` for real images.
- Lazy load below-fold images unless they are important for first paint.
- Respect `prefers-reduced-motion`.
- Keep hero motion self-contained and non-interactive unless the user asks otherwise.
- Avoid mouse-reactive hero effects.
- Avoid Three.js unless the user explicitly wants a 3D direction.
- Keep the dependency list short.
- Run a production build before handing off meaningful changes.

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
- No clipped hero glass frames at smaller widths
- No layout shift that makes sections feel jumpy
- No console warnings that matter

## Things to Avoid

- Using the wrong role for Jaskarn.
- Using the wrong location for Jaskarn.
- Adding filler pages.
- Changing copy when the request is design-only.
- Writing vague dramatic copy.
- Using em dashes.
- Reintroducing generic AI portfolio blocks.
- Reintroducing grid backgrounds.
- Reintroducing gold, orange, lime, or mismatched accent colors.
- Reintroducing mouse-reactive hero backgrounds.
- Moving the hero glass showcase into the work section.
- Making the "Recent business websites" section hard to use on mobile.
- Shrinking client website previews so they are hard to inspect.
- Reusing the same card layout for every section.
- Adding decorative patterns that do not serve the design.
- Making the site slower just to add effects.
