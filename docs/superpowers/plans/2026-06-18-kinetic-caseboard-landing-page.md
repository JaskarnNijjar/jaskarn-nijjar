# Kinetic Caseboard Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current glass/blue homepage language with the approved Kinetic Caseboard studio-grade builder design.

**Architecture:** Keep `src/app/page.tsx` as the Server Component composition. Move browser-only pointer motion into one focused `HeroCaseboard` Client Component, and keep all other homepage sections static Server Components styled by shared CSS tokens in `globals.css`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, `next/image`, `next/link`, lucide-react, existing local screenshots in `public/work-previews`.

## Global Constraints

- Read relevant Next.js 16 docs in `node_modules/next/dist/docs/` before code changes.
- Do not add new dependencies.
- Use existing `Hanken_Grotesk` and `Spline_Sans_Mono` font setup.
- Use the Kinetic Caseboard palette: `#090909`, `#141311`, `#1C1A17`, `#F4EFE6`, `#A7A098`, `#D6A84F`, `#D95C45`, `#67D8C1`.
- Remove the drifting glass background, frosted dashboards, fake build-stage details, random teal/blue accents, and sci-fi control-room language from the homepage.
- Use local screenshots from `CLIENT_PROJECTS` and `public/work-previews`.
- Keep one `h1`, preserve metadata and structured data, and keep visible focus states.
- Respect `prefers-reduced-motion`.

---

### Task 1: Rewrite Homepage Design Tests

**Files:**
- Modify: `tests/homepage-content.test.mjs`

**Interfaces:**
- Consumes: current component filenames and CSS class names.
- Produces: regression coverage for the new Kinetic Caseboard component and removal of old glass/build-stage language.

- [ ] **Step 1: Write the failing test**

Replace old glass/build-stage expectations with assertions for:

```js
const heroCaseboardPath = "src/components/home/HeroCaseboard.tsx";
const heroGlassFieldPath = "src/components/home/HeroGlassField.tsx";
const projectSignalDeckPath = "src/components/home/ProjectSignalDeck.tsx";

assert.match(hero, /HeroCaseboard/);
assert.doesNotMatch(hero, /HeroGlassField|ProjectSignalDeck|glass-card/);
assert.ok(existsSync(heroCaseboardPath), "hero caseboard component should exist");
assert.ok(!existsSync(heroGlassFieldPath), "old glass hero field should be removed");
assert.ok(!existsSync(projectSignalDeckPath), "old project signal deck should be removed");

const heroCaseboard = read(heroCaseboardPath);
assert.match(heroCaseboard, /^"use client";/);
assert.match(heroCaseboard, /onPointerMove/);
assert.match(heroCaseboard, /prefers-reduced-motion/);
assert.match(heroCaseboard, /from "next\/image"/);
assert.match(heroCaseboard, /caseboard-frame/);
assert.doesNotMatch(heroCaseboard, /glass|terminal|browser|canvas|three|@react-three/i);

assert.match(globalCss, /--accent-brass:\s*#d6a84f/i);
assert.match(globalCss, /\.hero-caseboard/);
assert.match(globalCss, /\.work-case-row/);
assert.match(globalCss, /\.service-studio-board/);
assert.match(globalCss, /\.process-production-track/);
assert.match(globalCss, /\.contact-studio-frame/);
assert.doesNotMatch(globalCss, /hero-glass-field|glass-lens|build-stage-|home-glass-current/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`

Expected: FAIL because `HeroCaseboard.tsx` and the new CSS classes do not exist yet.

- [ ] **Step 3: Do not modify production code in this task**

No production code changes in Task 1.

---

### Task 2: Replace Hero With Kinetic Caseboard

**Files:**
- Create: `src/components/home/HeroCaseboard.tsx`
- Modify: `src/components/home/Hero.tsx`
- Delete: `src/components/home/HeroGlassField.tsx`
- Delete: `src/components/home/ProjectSignalDeck.tsx`

**Interfaces:**
- Consumes: `CLIENT_PROJECTS` from `src/lib/constants.ts`.
- Produces: `HeroCaseboard` Client Component rendered by `Hero`.

- [ ] **Step 1: Implement `HeroCaseboard`**

Create a focused Client Component with:

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import { CLIENT_PROJECTS } from "@/lib/constants";

const ROTATION_MS = 3600;

export function HeroCaseboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % CLIENT_PROJECTS.length);
    }, ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    boardRef.current?.style.setProperty("--case-x", x.toFixed(3));
    boardRef.current?.style.setProperty("--case-y", y.toFixed(3));
  }

  const activeProject = CLIENT_PROJECTS[activeIndex];

  return (
    <div
      ref={boardRef}
      className="hero-caseboard"
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      style={{ "--case-x": "0", "--case-y": "0" } as CSSProperties}
    >
      {/* render screenshot frames, project links, and active caption */}
    </div>
  );
}
```

- [ ] **Step 2: Update `Hero.tsx`**

Render `HeroCaseboard`, use the approved headline and copy, and remove all old glass imports:

```tsx
import { HeroCaseboard } from "@/components/home/HeroCaseboard";
```

Hero headline:

```tsx
Websites with the polish of a studio and the speed of a solo builder.
```

- [ ] **Step 3: Remove obsolete hero components**

Delete `src/components/home/HeroGlassField.tsx` and `src/components/home/ProjectSignalDeck.tsx` after confirming no imports remain.

- [ ] **Step 4: Run test**

Run: `npm run test`

Expected: still FAIL until CSS and section class names are updated in Task 3.

---

### Task 3: Apply Studio-Grade Section Language

**Files:**
- Modify: `src/components/home/WorkShowcase.tsx`
- Modify: `src/components/home/HomeServices.tsx`
- Modify: `src/components/home/HomeProcess.tsx`
- Modify: `src/components/home/HomeCTA.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `CLIENT_PROJECTS`, `SERVICES`, and current homepage section structure.
- Produces: Kinetic Caseboard visual language across work, services, process, and CTA sections.

- [ ] **Step 1: Rename section classes and copy**

Use these class anchors:

```tsx
className="home-studio-world"
className="work-caseboard"
className="work-case-row"
className="service-studio-board"
className="service-studio-card"
className="process-production-track"
className="contact-studio-frame"
```

Use section headings from the spec:

```tsx
Real sites, shipped for real businesses.
What I can build for your business.
How a project moves.
Bring the rough version. I will help shape the site.
```

- [ ] **Step 2: Replace global design tokens**

Set root tokens to the approved palette:

```css
--background: #090909;
--foreground: #f4efe6;
--surface-1: #141311;
--surface-2: #1c1a17;
--foreground-muted: #a7a098;
--foreground-subtle: #746f67;
--accent-brass: #d6a84f;
--accent-ruby: #d95c45;
--accent-cyan: #67d8c1;
```

- [ ] **Step 3: Remove obsolete global CSS**

Remove selectors and keyframes for `hero-glass-field`, `glass-lens`, `glass-panel`, `glass-card`, `home-glass-current`, `build-stage-*`, and unused blue/teal glass atmospherics.

- [ ] **Step 4: Run test**

Run: `npm run test`

Expected: PASS after production code matches the new assertions.

---

### Task 4: Verify Build Quality And Visuals

**Files:**
- Modify only if verification reveals issues.

**Interfaces:**
- Consumes: completed implementation.
- Produces: verified landing page.

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: exit code 0.

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: exit code 0.

- [ ] **Step 3: Run browser visual checks**

Start dev server:

```bash
npm run dev
```

Open desktop and mobile viewport checks with Playwright:

```txt
Desktop: 1440x1100
Mobile: 390x844
```

Expected:

- Hero uses animated screenshot caseboard, not glass.
- No headline/image overlap.
- Dominant read is graphite, warm paper, and brass.
- Client screenshots render.
- Buttons and links are reachable.

- [ ] **Step 4: Final status**

Report changed files, commands run, and any residual risk.
