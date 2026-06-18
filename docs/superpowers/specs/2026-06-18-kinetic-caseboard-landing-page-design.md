# Kinetic Caseboard Landing Page Design

## Purpose

Revamp jaskarnnijjar.com into a more distinctive studio-grade builder site. The redesign must replace the current glass/blue hero system entirely and remove the generic "AI portfolio" feeling from the landing page.

Primary outcome: business owners should immediately trust that Jaskarn can ship polished, custom websites.

Secondary outcome: recruiters and technical visitors should see clear craft, taste, and implementation ability without the page becoming an abstract developer-effects demo.

## Audience

Primary audience: business owners who need a new website, redesign, SEO cleanup, or performance improvement.

Secondary audience: recruiters, developers, and technical evaluators who want proof that Jaskarn can build real software and present work with taste.

## Approved Direction

Use the "Kinetic Caseboard" direction.

The page should feel like a sharp studio wall where finished work, service thinking, and technical proof are composed with control. It should be animated, dynamic, and aesthetic, but grounded in real project artifacts instead of fake UI theater.

The hero background must change entirely. Remove the drifting glass background, frosted dashboards, fake build-stage details, random teal/blue accents, and sci-fi control-room language.

## Design Thesis

The first viewport should say: this developer ships polished work.

The signature element is an animated caseboard made from real client screenshots. Project screenshots sit in cropped editorial strips and precision frames that drift, mask, and snap into a composed layout behind and beside the hero copy. The movement should feel deliberate, like a design studio arranging finished work, not like a screensaver.

## Visual Language

### Palette

Use a dark studio palette with warm, restrained accents.

- Graphite black: `#090909`
- Studio charcoal: `#141311`
- Ink panel: `#1C1A17`
- Warm paper text: `#F4EFE6`
- Muted stone text: `#A7A098`
- Brass accent: `#D6A84F`
- Signal ruby: `#D95C45`
- Cool cyan: `#67D8C1`

The dominant read should be graphite, warm paper, and brass. Ruby and cyan are small signal colors only. The site must not read as blue, purple, beige, or glass-themed.

### Typography

Keep the existing font setup for performance and consistency:

- Display and body: Hanken Grotesk via `next/font`.
- Utility and metadata: Spline Sans Mono via `next/font`.

Make the type feel more designed through composition rather than new font dependencies:

- Hero headline: large, editorial, compact line-height, confident weight.
- Section headings: strong but quieter than the hero.
- Labels: small mono captions that describe real things, such as project type, stack, location, and output.
- Body copy: short, plain sentences written from the visitor's side of the screen.

Do not use visible copy that explains the visual effects.

### Shape And Texture

Replace rounded frosted glass with:

- Sharp rectangular frames.
- Slightly rounded project image masks, no more than 8px.
- Fine rules and registration marks.
- Warm paper-tinted overlays.
- Subtle grain or noise through CSS only.
- Offset frames and cropped screenshot strips.

Cards are allowed for project items, but page sections should not become nested card stacks.

## Homepage Structure

### 1. Hero

Hero headline:

`Websites with the polish of a studio and the speed of a solo builder.`

Hero copy:

`I design and build custom websites for businesses that need to look established, load fast, and turn visitors into real inquiries.`

Primary CTA: `Start a project`, linking to `/#contact`.

Secondary CTA: `See the work`, linking to `/#work`.

Supporting signals:

- `Vancouver, BC`
- `Custom websites`
- `SEO and performance`
- `Full-stack builds`

Signature background: `HeroCaseboard`.

`HeroCaseboard` should use real screenshots from `CLIENT_PROJECTS`. It should present them as overlapping editorial strips and framed previews with slow CSS motion, pointer-responsive depth, and one active project caption. It must not use glass blur, fake terminals, fake browsers, or abstract blue glow.

Mobile hero behavior:

- Copy stays first.
- Caseboard becomes a compact horizontal collage below the CTAs.
- No overlap with the headline.
- Buttons remain easy to tap.

### 2. Work Showcase

Section title:

`Real sites, shipped for real businesses.`

Show the four client projects as substantial image-led rows. Each project should include:

- Project name.
- Industry.
- Short business outcome.
- Stack.
- External link.
- Screenshot.

Use the caseboard language from the hero: precision frames, image crops, warm overlays, and restrained hover movement.

### 3. Services

Section title:

`What I can build for your business.`

Keep the existing four service groups:

- New websites.
- Website redesigns.
- SEO and speed cleanup.
- Ongoing improvements.

Present these as a studio capabilities board, not floating glass instruments. Use full-width rows or a clean asymmetric grid with icons, service labels, and concise benefits.

### 4. Process

Section title:

`How a project moves.`

Keep the four-step process, but make it feel like a production track rather than a sci-fi signal line. Use rules, output tags, and a simple progress spine. Numbering is appropriate here because the content is a real sequence.

### 5. Final CTA

Headline:

`Bring the rough version. I will help shape the site.`

Copy:

`Tell me what the business does, what is not working, and what the site needs to accomplish next.`

Primary CTA: `Start a project`.

Secondary link: `See developer projects`.

Use one strong framed CTA band with warm accent details. Avoid glass blur.

## Component Architecture

Keep the homepage modular and close to the existing structure:

- `src/app/page.tsx`: homepage composition and structured data.
- `src/components/home/Hero.tsx`: hero layout, copy, and CTAs.
- `src/components/home/HeroCaseboard.tsx`: client component for the animated screenshot collage and pointer-responsive motion.
- `src/components/home/ProjectSignalDeck.tsx`: remove or replace with the new caseboard treatment if no longer needed.
- `src/components/home/WorkShowcase.tsx`: image-led client work rows using the new visual language.
- `src/components/home/HomeServices.tsx`: service capability board.
- `src/components/home/HomeProcess.tsx`: production-track process.
- `src/components/home/HomeCTA.tsx`: final framed CTA.
- `src/app/globals.css`: consolidate the new design tokens and remove obsolete glass/build-stage styles.
- `src/lib/constants.ts`: continue using existing project and service data.

Do not add new dependencies for this pass. Use React, CSS, Tailwind, lucide-react, and the existing Next.js setup.

## Motion

Motion should be memorable but controlled.

Required:

- Hero caseboard slow drift and mask movement.
- Pointer-responsive caseboard depth on desktop.
- Project screenshot hover movement in work rows.
- Subtle section entrance through CSS only where useful.

Constraints:

- Respect `prefers-reduced-motion`.
- Do not animate every card.
- Avoid continuous high-contrast scan lines.
- Avoid fake code, fake terminal, fake browser chrome, and generic interface widgets.
- The hero text must remain readable at every viewport.

## Accessibility And SEO

- Keep one `h1`.
- Preserve business-first metadata and structured data.
- Ensure all external project links have clear accessible names.
- Keep focus states visible against the dark background.
- Decorative collage layers use `aria-hidden`.
- The active caseboard caption should not be required to understand the page.
- Text must not overlap with imagery on desktop or mobile.

## Performance

- Use existing local screenshot assets from `public/work-previews`.
- Use `next/image` for project screenshots.
- Avoid 3D, canvas, and heavy animation libraries in this pass.
- Keep the hero useful before client-side JavaScript runs.
- Remove unused glass/build-stage CSS after implementation to reduce clutter.

## Testing And Verification

Minimum verification:

- Read the relevant Next.js 16 guide in `node_modules/next/dist/docs/` before code changes.
- `npm run test`.
- `npm run lint`.
- `npm run build`.
- Browser visual check at desktop width.
- Browser visual check around `390px` mobile width.
- Confirm the hero background is no longer the glass field.
- Confirm the site no longer visually reads as blue-accented glass.
- Confirm client screenshots render and do not overlap text.
- Confirm reduced-motion mode disables continuous hero motion.

## Out Of Scope

- Redesigning every secondary page in full.
- Adding new fonts or external visual assets.
- Adding 3D, canvas, or image-generation assets.
- Changing the business positioning away from custom websites and practical full-stack credibility.
