# Glass Control Room Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage as a business-first premium landing page with a readable glass control-room hero, client work proof, services, technical credibility, and a final CTA.

**Architecture:** Keep `src/app/page.tsx` as a Server Component that composes focused homepage sections. Move data into `src/lib/constants.ts`, isolate animated Framer Motion behavior in small Client Components, and keep decorative glass effects behind content instead of covering it.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, lucide-react, shadcn/ui Button.

## Global Constraints

- Business owners are the primary audience, recruiters and technical evaluators are secondary.
- Use the approved "Glass Control Room" visual direction.
- No visible em dashes in site copy.
- Use `next/font`; no external font requests.
- Keep the first viewport readable and do not let glass effects cover hero text.
- Respect `prefers-reduced-motion`.
- Run `npm run lint` and `npm run build` before completion.

---

### Task 1: Add Homepage Data And Regression Test

**Files:**
- Modify: `package.json`
- Modify: `src/lib/constants.ts`
- Create: `tests/homepage-content.test.mjs`

**Interfaces:**
- Produces: `CLIENT_PROJECTS`, `VALUE_PROPS`, `SERVICES`, `TECHNICAL_PROJECTS` exports from `src/lib/constants.ts`.
- Produces: `npm test` script that runs `node tests/homepage-content.test.mjs`.

- [ ] **Step 1: Write the failing test**

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const constants = readFileSync("src/lib/constants.ts", "utf8");
const page = readFileSync("src/app/page.tsx", "utf8");

for (const name of [
  "CLIENT_PROJECTS",
  "VALUE_PROPS",
  "SERVICES",
  "TECHNICAL_PROJECTS",
]) {
  assert.match(constants, new RegExp(`export const ${name}`));
}

for (const phrase of [
  "Mission Insulation",
  "Edge Insulation",
  "GoViral Campaigns",
  "NCA Tires",
  "RepuFlow",
  "NorthTunnel",
]) {
  assert.match(constants, new RegExp(phrase));
}

for (const component of [
  "Hero",
  "ValueGrid",
  "FeaturedWork",
  "ServicesOverview",
  "TechnicalProof",
  "HomeCTA",
]) {
  assert.match(page, new RegExp(`<${component} />`));
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`

Expected: FAIL because `package.json` has no `test` script or because the named constants/components do not exist yet.

- [ ] **Step 3: Add the test script and constants**

Add `"test": "node tests/homepage-content.test.mjs"` to `package.json`.

Add the four exports to `src/lib/constants.ts` with real project, value, service, and technical project data from the design spec.

- [ ] **Step 4: Run test to verify remaining page composition failure**

Run: `npm test`

Expected: FAIL until `src/app/page.tsx` composes the required sections.

### Task 2: Build Homepage Sections

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/home/Hero.tsx`
- Create: `src/components/home/ProjectConsole.tsx`
- Create: `src/components/home/ValueGrid.tsx`
- Create: `src/components/home/FeaturedWork.tsx`
- Create: `src/components/home/ServicesOverview.tsx`
- Create: `src/components/home/TechnicalProof.tsx`
- Create: `src/components/home/HomeCTA.tsx`

**Interfaces:**
- Consumes: homepage data exports from `src/lib/constants.ts`.
- Produces: Server Component homepage sections plus one Client Component `ProjectConsole`.

- [ ] **Step 1: Compose the page**

`src/app/page.tsx` should import and render:

```tsx
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { HomeCTA } from "@/components/home/HomeCTA";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TechnicalProof } from "@/components/home/TechnicalProof";
import { ValueGrid } from "@/components/home/ValueGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueGrid />
      <FeaturedWork />
      <ServicesOverview />
      <TechnicalProof />
      <HomeCTA />
    </>
  );
}
```

- [ ] **Step 2: Run test to verify it passes**

Run: `npm test`

Expected: PASS for content and composition.

- [ ] **Step 3: Implement the sections**

Implement the section files with semantic headings, real links, readable dark/glass layouts, and no fake interactive controls.

- [ ] **Step 4: Run lint**

Run: `npm run lint`

Expected: PASS.

### Task 3: Tune Global Glass System And Layout

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/effects/LiquidGlassField.tsx`
- Modify: `src/components/layout/Navbar.tsx` if needed for visual cohesion.

**Interfaces:**
- Produces: reusable CSS utilities for glass panels, accent glows, focus states, and reduced-motion behavior.

- [ ] **Step 1: Reduce background dominance**

Update the glass/aurora effect so it reads as atmosphere behind the layout, not foreground objects over text.

- [ ] **Step 2: Add reusable surface utilities**

Add focused classes such as `glass-panel`, `glass-card`, `accent-line`, and `section-shell` only if they reduce repetition.

- [ ] **Step 3: Verify mobile layout**

Run the local site and inspect around `390px` width. Hero copy must come before console, with no overlap.

### Task 4: Final Verification

**Files:**
- Verify the entire homepage.

**Interfaces:**
- Consumes: all previous tasks.
- Produces: verified landing page.

- [ ] **Step 1: Run tests**

Run: `npm test`

Expected: PASS.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: PASS.

- [ ] **Step 3: Run build**

Run: `npm run build`

Expected: PASS.

- [ ] **Step 4: Browser verification**

Inspect the page at desktop and around `390px` mobile width. Verify hero readability, one `h1`, working CTAs, readable project cards, and no obvious overlap.
