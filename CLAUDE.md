# CLAUDE.md — jaskarnnijjar.com

## What this project is

Personal portfolio and business website for Jaskarn Nijjar, a web developer based in Surrey, BC. The site serves two audiences: business owners looking to hire a developer (primary), and other developers or recruiters evaluating technical skill (secondary). The primary goal is lead generation — turning visitors into clients.

The site lives at jaskarnnijjar.com and deploys on Vercel.

---

## Design direction

### Aesthetic
Cinematic dark premium. Think Aceternity-style dramatic glows, spotlights, and depth — but grounded in real content, not just effects for effects' sake. The site should feel like a high-end studio's portfolio, not a developer's side project.

### Signature element
An interactive 3D element in the hero (particles, geometry, globe, or similar). This is the one place we go all-out. It should be performant, responsive, and feel like it belongs — not bolted on.

### Color
- Background: near-black (#0A0A0A or similar, not pure #000)
- Surface: subtle gray layers for cards and sections (#111, #151515, #1A1A1A)
- Text: white (#FAFAFA) for headings, muted gray (#888, #666) for secondary text
- Accent color: TBD — will be decided during the design phase. Until then, use white as the primary interactive color and avoid committing to a hue
- Glow/atmosphere effects: soft radial gradients, light bleeds, spotlight effects in cool or neutral tones

### Typography
Geometric sans-serif. Clean, techy, precise.
- Display/headings: Geist Sans or similar geometric sans. Tight tracking on large sizes, semibold or bold weight.
- Body: Same family at regular weight, or Inter for long-form readability.
- Mono: Geist Mono or JetBrains Mono for code snippets, tech stack labels, eyebrow text, and metadata.
- Use next/font for all fonts. No external font loading.

### Motion philosophy
Heavy where it counts, subtle everywhere else. The hero, page transitions, and one or two standout section reveals can be dramatic. Everything else — hover states, scroll fades, card interactions — should be smooth and restrained. The site should feel alive but never slow or chaotic.

**Motion rules:**
- Hero: animated 3D element, dramatic entrance sequence. Go big.
- Section reveals: staggered fade-up on scroll, using Framer Motion `whileInView`. Keep durations 0.4-0.6s. Don't animate every single element — pick the important ones.
- Hover states: subtle scale, glow, or border shifts. 200ms transitions.
- Page transitions: smooth crossfade or slide if using View Transitions or Framer layout animations.
- Backgrounds: animated gradients, grain, or particle fields are fine in specific sections, but not on every section.
- Never: jarring bounces, excessive parallax, animation that blocks content from being read, motion that makes the page feel slow.
- Always respect `prefers-reduced-motion`.

---

## Tech stack

### Core
- **Framework:** Next.js (App Router, latest stable)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui as the base component system. Components are copied into the codebase and customized — not imported from a package.
- **Animation:** Framer Motion for most interactions. GSAP only for advanced hero-level or scroll-timeline effects. Three.js / React Three Fiber only for the hero 3D element.
- **Content:** MDX files in `src/content/` for project case studies. Parsed with `next-mdx-remote` and `gray-matter`.
- **Fonts:** `next/font` — no external font requests.
- **Images:** `next/image` for all images. Optimize everything.
- **Deployment:** Vercel.

### Component and inspiration sources
- **shadcn/ui** — base primitives (buttons, cards, dialogs, forms, navigation).
- **Aceternity UI** — primary inspiration for dramatic effects (spotlight cards, glowing borders, animated backgrounds, text reveals, hero sections).
- **Magic UI** — animated micro-interactions (marquees, beams, orbiting elements, shiny buttons).
- **21st.dev / Magic MCP** — for generating polished components from descriptions when needed.
- **Animate UI** — tasteful motion on standard UI elements.

**Critical rule:** Never copy a component from any library and use it as-is. Every component must be adapted to match the site's design system — same colors, same typography, same spacing, same motion timing. The site must look like one cohesive product, not a collage of different component libraries.

### Quality tools
- ESLint + Prettier for code formatting
- TypeScript strict checks
- Build must pass (`next build`) before any PR
- Lighthouse target: 90+ on Performance, Accessibility, Best Practices, SEO

---

## Site structure

```
/                       → Homepage (hero + value prop + client work preview + CTA)
/work                   → Client project showcase grid
/work/[slug]            → Individual client case study (MDX)
/projects               → Personal/dev projects (separate from client work)
/projects/[slug]        → Individual project deep-dive (MDX)
/services               → What Jaskarn offers + pricing signals
/about                  → Bio, stack, process
/contact                → Lead capture form
```

### Information hierarchy
The homepage is the most important page. It must convert visitors into leads. Structure:
1. Hero with 3D element and headline
2. Brief value proposition (what I do, who it's for)
3. Client work showcase (the proof)
4. Services overview
5. CTA (contact)

`/work` is the business-facing section — client websites built for real businesses. This is what potential clients see.

`/projects` is the technical section — personal projects like RepuFlow and NorthTunnel. This is secondary and linked from the work page and nav, but not the homepage hero flow.

---

## Content

### Client work (in /work)
| Project | Client | Industry | Stack | URL |
|---|---|---|---|---|
| Mission Insulation | Mission Insulation | Home Services | Next.js, Tailwind, Vercel | missioninsulation.ca |
| Edge Insulation | Edge Insulation | Home Services | Next.js, Tailwind, Vercel | edgeinsulation.ca |
| GoViral Campaigns | GoViral Campaigns | Marketing Agency | Next.js, Tailwind, Vercel | goviralcampaigns.com |
| NCA Tires | NCA Tires | Commercial Distribution | Next.js, Tailwind, Netlify | ncatires.netlify.app |

### Personal projects (in /projects)
| Project | Description | Stack |
|---|---|---|
| RepuFlow | Reputation management SaaS for trades businesses. Review monitoring, sentiment analysis, SMS review requests. | React, Vite, Node/Express, Supabase, Twilio, Google Places API, VADER, Groq |
| NorthTunnel | Layer 3 VPN built from scratch. Encrypted tunnel using TUN interfaces, raw UDP sockets, iptables NAT. | Python, Docker, Fernet, iptables, TUN, UDP |

All projects were built solo by Jaskarn.

---

## Copy and tone

### Voice
One-person premium studio. Not a freelancer begging for work. Not a corporate agency with jargon. Confident, direct, specific. Talk about what the work does, not what it "leverages" or "empowers."

### Rules
- No buzzwords: "cutting-edge," "leveraging," "synergy," "solutions," "empowering," "next-level"
- No filler: "In today's digital landscape," "In the modern world," "As businesses grow"
- No over-promising: say what you actually do, specifically
- Active voice always
- Short sentences. Short paragraphs. Let the work speak.
- CTAs should be direct: "Start a project," "Get in touch," "See my work" — not "Let's embark on a journey together"

### About Jaskarn
Web developer based in Surrey, BC. Builds custom websites for businesses — fast, SEO-optimized, designed to convert. Works directly with business owners, no middlemen. Also builds full-stack applications and has systems-level experience (VPN from scratch, sentiment analysis SaaS). The range is a selling point.

---

## SEO requirements

- `generateMetadata()` on every route with unique title and description
- Dynamic OG images via `@vercel/og` for all pages
- `sitemap.xml` auto-generated
- `robots.txt` auto-generated
- JSON-LD structured data: `Person` + `LocalBusiness` schema on homepage
- Semantic HTML: proper heading hierarchy (one `h1` per page), `<main>`, `<article>`, `<section>`, `<nav>`
- All images have alt text
- Core Web Vitals first: no layout shift, no render-blocking resources, lazy load below-fold content

---

## File organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata, nav, footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind + custom styles
│   ├── work/
│   ├── projects/
│   ├── services/
│   ├── about/
│   └── contact/
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Hero, Services, FeaturedWork, CTA
│   ├── ui/                 # shadcn/ui base components (Button, Card, etc.)
│   └── effects/            # Animated/3D components (spotlight, glow, particles)
├── content/
│   ├── work/               # MDX files for client projects
│   └── projects/           # MDX files for personal projects
├── lib/
│   ├── mdx.ts              # MDX parsing utilities
│   └── constants.ts        # Site-wide constants
└── types/
    └── index.ts            # Shared TypeScript types
```

### Naming conventions
- Components: PascalCase (`HeroSection.tsx`)
- Utilities/lib: camelCase (`mdx.ts`)
- Content files: kebab-case (`mission-insulation.mdx`)
- CSS: Tailwind utilities. No custom CSS classes unless absolutely necessary.

---

## What to avoid

- **Generic portfolio look:** No cream backgrounds, no terracotta accents, no newspaper layouts. This is a dark, techy, premium site.
- **Template energy:** If a section looks like it could be on any developer's portfolio, it's not good enough. Every section should feel intentional and specific to Jaskarn's work.
- **Component soup:** Don't pull from 5 different component libraries and stitch them together. Adapt everything into one visual language.
- **Over-animation:** The hero can be dramatic. Everything else should be smooth and purposeful. If an animation doesn't serve a function (drawing attention, revealing hierarchy, providing feedback), cut it.
- **Walls of text:** The site is not a resume. Show, don't tell. Use the work to prove the skill.
- **Placeholder content:** Use real project names, real descriptions, real URLs. No "Project Alpha" or "Lorem ipsum."
- **Slow loading:** The 3D hero must be lazy-loaded or progressively enhanced. The site should feel instant on first load even if the hero takes a moment to initialize. Target sub-2s LCP.

---

## Quality checklist (run before any PR)

- [ ] `npm run build` passes with zero errors
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Responsive: looks correct at 375px, 768px, 1024px, 1440px
- [ ] All links work
- [ ] All images have alt text
- [ ] Heading hierarchy is correct (one h1 per page, sequential h2/h3)
- [ ] `prefers-reduced-motion` is respected
- [ ] Lighthouse: 90+ across all categories
- [ ] No layout shift on page load
- [ ] The site feels fast — no jank, no loading spinners on navigation
