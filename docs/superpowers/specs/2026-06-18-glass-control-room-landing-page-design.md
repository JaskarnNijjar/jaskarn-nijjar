# Glass Control Room Landing Page Design

## Purpose

Redesign the homepage for jaskarnnijjar.com as a business-first landing page for Jaskarn Nijjar, a web developer in Surrey, BC who builds custom websites for local businesses. The page should attract business owners first, while still giving recruiters and technical visitors enough proof that Jaskarn can build serious software.

Primary outcome: a visitor should understand what Jaskarn offers, trust the quality of the work, and have a clear path to contact him.

Secondary outcome: a recruiter or developer should see enough technical range to keep exploring the portfolio.

## Audience

Primary audience: business owners who need a website, redesign, SEO cleanup, or performance improvement.

Secondary audience: recruiters, developers, and technical evaluators who want to see craft, stack depth, and independent project work.

## Design Direction

Use the approved "Glass Control Room" direction: cinematic dark premium, with glass treated as a precise interface material rather than oversized decorative shapes. The current hero issue is that the glass field visually overwhelms the copy. The redesign must keep text readable and make the animated glass dashboard serve the business message.

The first viewport should feel like a polished studio cockpit:

- Left side: direct business copy and CTAs.
- Right side: an animated glass project console with real client work.
- Background: dark, atmospheric, restrained, with subtle grid/light details.
- Motion: meaningful hero entrance and dashboard movement, restrained section reveals.

Avoid cream palettes, terracotta accents, newspaper layouts, generic portfolio grids, filler claims, and visible site copy that explains the UI itself.

## Palette

Use a cool dark premium palette with restrained accent color.

- Background black: `#08090B`
- Surface black: `#101216`
- Glass surface: `rgba(255, 255, 255, 0.06)`
- Hairline border: `rgba(255, 255, 255, 0.10)`
- Primary text: `#FAFAFA`
- Muted text: `#9A9AA0`
- Subtle text: `#6F727A`
- Electric teal accent: `#5FF7D2`
- Cool blue accent: `#7AA7FF`
- Soft violet atmosphere: `#8E6CFF`

The accent should appear in small controlled amounts: status dots, active lines, glows, card metadata, and focus states. The page should not become a teal or purple site.

## Typography

Keep the existing `next/font` setup with Geist Sans and Geist Mono.

Use Geist Sans for headings and body. Use Geist Mono for metadata, small labels, project stack chips, and dashboard readouts.

Typography should feel precise and premium:

- Hero heading: large, tight, high contrast, no negative letter spacing beyond Tailwind `tracking-tight`.
- Section headings: compact and confident.
- Body copy: short sentences with visible hierarchy.
- No em dashes in visible copy.

## Homepage Structure

### 1. Hero

Hero headline:

`Websites that make local businesses look established and get found.`

Hero copy:

`I build fast, custom websites for businesses that need more than a template. Clear design, strong performance, and pages built to turn visitors into customers.`

Primary CTA: `Start a project` linking to `/contact`.

Secondary CTA: `See client work` linking to `/work`.

Supporting signals near the CTAs:

- `Surrey, BC`
- `Solo builder`
- `Websites, SEO, full-stack apps`

Right-side signature element: `ProjectConsole`.

The console should show real projects from CLAUDE.md:

- Mission Insulation
- Edge Insulation
- GoViral Campaigns
- NCA Tires

Each project tile should include industry, stack, and a short outcome-oriented line. The console may animate a scan line, active project state, subtle floating cards, or rotating highlight. It must stay readable and must not cover the headline on mobile.

On mobile, the hero stacks:

- Copy first.
- Console second.
- No content overlap.
- CTA buttons full-width or comfortably tappable.

### 2. Value Proposition

Section title:

`Built for the parts of a website that actually matter.`

Four compact value items:

- `Design`: A site that makes the business look established before a visitor reads a word.
- `Build`: Fast pages, clean code, responsive layouts, and no bloated theme stack.
- `Rank`: Technical SEO, structure, speed, and local search basics handled from the start.
- `Convert`: Clear calls to action, service pages, and copy that helps visitors take the next step.

The layout should be dense and scan-friendly, not card soup. Use glass dividers, small icons from lucide-react, and subtle hover/focus states.

### 3. Featured Client Work

Section title:

`Client sites with real businesses behind them.`

Show the four client projects as premium glass cards or wide case-study rows. Each item should include:

- Project/client name
- Industry
- Stack
- Link text where available
- One concise line about what the site was built to do

This section is the main proof for business owners. It should feel more substantial than a generic portfolio grid.

### 4. Services

Section title:

`What I can build for your business.`

Service groups:

- `New business websites`: custom pages for services, location, credibility, and contact.
- `Website redesigns`: sharper visual identity, clearer structure, better conversion paths.
- `SEO and performance cleanup`: speed, metadata, local search basics, technical fixes.
- `Ongoing improvements`: new sections, landing pages, content updates, and conversion tweaks.

Use quiet full-width bands or rows rather than nested cards. Each service should have a direct business benefit.

### 5. Technical Credibility

Section title:

`More than polished pages.`

Purpose: reassure recruiters and technical evaluators without hijacking the business flow.

Feature two personal projects:

- `RepuFlow`: reputation management SaaS for trades businesses with review monitoring, sentiment analysis, and SMS review requests.
- `NorthTunnel`: Layer 3 VPN built from scratch with TUN interfaces, UDP sockets, encryption, and NAT.

This section should visually differ from client work by using mono labels, stack lines, and a more technical console treatment.

### 6. Final CTA

Headline:

`Need a site that makes your business easier to trust?`

Copy:

`Tell me what you do, what is not working, and what you want the site to accomplish. I will help you map the next step.`

CTA: `Start a project`

Secondary link: `Email me`

## Component Architecture

Keep `src/app/page.tsx` as a Server Component that composes homepage sections. Isolate browser-only motion into Client Components so the whole homepage does not become a large client bundle.

Recommended files:

- `src/app/page.tsx`: homepage composition and static metadata if needed.
- `src/components/home/HomePage.tsx`: Server Component wrapper for the homepage content if composition becomes large.
- `src/components/home/Hero.tsx`: Server Component for hero markup, copy, CTAs, and layout.
- `src/components/home/ProjectConsole.tsx`: Client Component for the animated glass dashboard.
- `src/components/home/ValueGrid.tsx`: Server Component for value proposition.
- `src/components/home/FeaturedWork.tsx`: Server Component for client work preview.
- `src/components/home/ServicesOverview.tsx`: Server Component for service rows.
- `src/components/home/TechnicalProof.tsx`: Server Component for RepuFlow and NorthTunnel proof.
- `src/components/home/HomeCTA.tsx`: Server Component for final CTA.
- `src/components/effects/*`: reusable visual effects only when they serve multiple sections.
- `src/lib/constants.ts`: project, service, and CTA data if shared across sections.

If keeping fewer files is simpler for the current repo, split only at meaningful boundaries. Do not create abstractions for one-off decorative elements.

## Motion

Use Framer Motion only where interactivity or client-side animation is needed.

Required motion:

- Hero copy reveal with staggered fade-up.
- Project console entrance and subtle active highlight.
- Section reveal on important sections only.

Optional motion:

- Console scan line.
- Slow ambient light movement.
- Hover glow on project cards.

Constraints:

- Respect `prefers-reduced-motion`.
- Avoid animation that blocks reading.
- Keep durations around `0.4s` to `0.6s` for reveals.
- Do not animate every small element.

## Accessibility And SEO

The page must have one `h1` and sequential section headings.

All links must have clear accessible names.

Interactive dashboard elements should be real links or non-interactive decorative elements. Do not create fake buttons.

Decorative effects must use `aria-hidden`.

Focus states must be visible on dark/glass backgrounds.

The homepage metadata should remain business-first:

- Title should identify Jaskarn as a web developer in Surrey, BC.
- Description should mention custom websites, performance, SEO, and conversion.

## Performance

The first viewport must render useful text quickly.

Avoid heavy 3D for this pass unless it is progressively enhanced. If a future 3D scene is added, it should be lazy-loaded and not block LCP.

The initial redesign should rely on CSS, Tailwind, lightweight Framer Motion, and local/static data. No external image or font requests.

Avoid full-page blur layers that make text illegible or cause jank.

## Testing And Verification

Minimum verification:

- `npm run lint`
- `npm run build`
- Browser visual check at desktop width.
- Browser visual check around `390px` mobile width.
- Confirm hero text is visible and not covered by glass effects.
- Confirm page has one `h1`.
- Confirm links to `/contact`, `/work`, client URLs where included, and email links are correct.
- Confirm reduced-motion users do not get continuous disruptive animation.

## Out Of Scope For This Redesign

- Building all secondary pages (`/work`, `/services`, `/about`, `/contact`).
- Adding a real contact form backend.
- Generating new case-study MDX content.
- Adding Three.js or React Three Fiber unless the implementation remains lightweight and progressively enhanced.
- Implementing dynamic OG image generation.
