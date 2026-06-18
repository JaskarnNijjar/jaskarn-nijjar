import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

function read(path) {
  return readFileSync(path, "utf8");
}

function sourceFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      return sourceFiles(path);
    }
    return /\.(ts|tsx|mjs)$/.test(path) ? [path] : [];
  });
}

const constants = read("src/lib/constants.ts");
const layout = read("src/app/layout.tsx");
const page = read("src/app/page.tsx");
const hero = read("src/components/home/Hero.tsx");
const showcase = read("src/components/home/WorkShowcase.tsx");
assert.ok(
  existsSync("src/components/home/HomeServices.tsx"),
  "HomeServices should exist",
);
assert.ok(
  existsSync("src/components/home/HomeProcess.tsx"),
  "HomeProcess should exist",
);
const services = read("src/components/home/HomeServices.tsx");
const process = read("src/components/home/HomeProcess.tsx");
const cta = read("src/components/home/HomeCTA.tsx");
const navbar = read("src/components/layout/Navbar.tsx");
const footer = read("src/components/layout/Footer.tsx");
const glassFilters = read("src/components/effects/GlassFilters.tsx");
const sitemap = read("src/app/sitemap.ts");
const projectsPagePath = "src/app/projects/page.tsx";
const dynamicDeckPath = "src/components/home/ProjectSignalDeck.tsx";
const buildStagePath = "src/components/home/HeroBuildStage.tsx";

assert.match(constants, /role: "Software Developer"/);
assert.match(constants, /location: "Vancouver, BC"/);
assert.doesNotMatch(constants, /Web Developer|web developer/);

for (const phrase of [
  "Mission Insulation",
  "Edge Insulation",
  "GoViral Campaigns",
  "NCA Tires",
  "RepuFlow",
  "NorthTunnel",
  "github.com/JaskarnNijjar/RepuFlow",
  "github.com/JaskarnNijjar/NorthTunnel",
]) {
  assert.match(constants, new RegExp(phrase));
}

for (const nav of [
  '{ label: "Work", href: "/#work" }',
  '{ label: "Services", href: "/#services" }',
  '{ label: "Process", href: "/#process" }',
  '{ label: "Projects", href: "/projects" }',
  '{ label: "Contact", href: "/#contact" }',
]) {
  assert.match(constants, new RegExp(nav.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}

for (const component of [
  "Hero",
  "WorkShowcase",
  "HomeServices",
  "HomeProcess",
  "HomeCTA",
]) {
  assert.match(page, new RegExp(`<${component} />`));
}

assert.match(page, /application\/ld\+json/);
assert.match(page, /home-build-world/);
assert.match(layout, /Software Developer in Vancouver, BC/);
assert.match(layout, /based in Vancouver, BC/);
assert.match(page, /addressLocality: "Vancouver"/);
assert.match(
  hero,
  /I build websites that help businesses get found and contacted/,
);
assert.match(hero, /Software Developer/);
assert.match(showcase, /id="work"/);
assert.match(showcase, /work-glass-cinema/);
assert.match(showcase, /work-cinema-light/);
assert.match(showcase, /work-frame-stack/);
assert.match(showcase, /work-preview-showcase/);
assert.match(showcase, /work-feature-frame/);
assert.match(showcase, /work-showcase-frame/);
assert.match(showcase, /work-preview-lens/);
assert.doesNotMatch(showcase, /work-preview-tower/);
assert.match(services, /id="services"/);
assert.match(services, /service-rack/);
assert.match(services, /service-atelier-board/);
assert.match(services, /service-atelier-beam/);
assert.match(services, /service-instrument-card/);
assert.match(services, /service-icon-dock/);
assert.match(services, /service-capability-strip/);
assert.doesNotMatch(services, /service-tool-panel|service-tool-meter/);
assert.match(process, /id="process"/);
assert.match(process, /process-launchline/);
assert.match(process, /process-route-board/);
assert.match(process, /process-route-list/);
assert.match(process, /process-route-lane/);
assert.match(process, /process-route-node/);
assert.match(process, /process-route-output/);
assert.doesNotMatch(process, /process-ledger|process-checkpoint|process-launch-beam|process-step-card|process-workbench/);
assert.match(cta, /id="contact"/);
assert.match(cta, /contact-transmission/);
assert.match(cta, /contact-signal-grid/);
assert.match(navbar, /href={CTA.href}/);
assert.doesNotMatch(navbar, /SITE\.shortName/);
assert.doesNotMatch(navbar, /grid size-8/);
assert.doesNotMatch(navbar, /useReducedMotion/);
assert.doesNotMatch(navbar, /initial=\{reduceMotion/);
assert.match(footer, /NAV_LINKS/);

for (const banned of [
  /Real websites, presented inside glass/i,
  /presence people remember/i,
  /brief room/i,
  /project signal deck/i,
  /front door/i,
  /whole building/i,
  /clarity before polish/i,
  /person behind the build/i,
  /Solo builder/i,
]) {
  for (const file of sourceFiles("src")) {
    assert.doesNotMatch(read(file), banned, `${file} contains ${banned}`);
  }
}

for (const file of sourceFiles("src")) {
  assert.doesNotMatch(read(file), /Web Developer|web developer/, file);
}

assert.ok(existsSync(dynamicDeckPath), "hero dynamic component should exist");
const dynamicDeck = read(dynamicDeckPath);
assert.match(hero, /ProjectSignalDeck/);
assert.match(dynamicDeck, /^"use client";/);
assert.match(dynamicDeck, /onPointerMove/);
assert.match(dynamicDeck, /setInterval/);
assert.match(dynamicDeck, /prefers-reduced-motion/);
assert.match(dynamicDeck, /from "next\/image"/);
assert.doesNotMatch(dynamicDeck, /canvas|three|@react-three/i);
assert.doesNotMatch(dynamicDeck, /-rotate-12|rotate-6|linear-gradient\(130deg/);

assert.ok(existsSync(buildStagePath), "hero build-stage background should exist");
const buildStage = read(buildStagePath);
const globalCss = read("src/app/globals.css");
assert.match(hero, /HeroBuildStage/);
assert.match(buildStage, /^"use client";/);
assert.match(buildStage, /onPointerMove/);
assert.match(buildStage, /prefers-reduced-motion/);
assert.match(buildStage, /build-stage-panel/);
assert.match(buildStage, /build-stage-lines/);
assert.match(buildStage, /build-stage-browser/);
assert.match(buildStage, /build-stage-copy-shield/);
assert.match(buildStage, /build-stage-rig/);
assert.match(buildStage, /build-stage-assembly-track/);
assert.match(buildStage, /build-stage-lane/);
assert.match(buildStage, /build-stage-code-rail/);
assert.match(buildStage, /build-stage-cursor/);
assert.match(buildStage, /build-stage-blueprint-block/);
assert.match(buildStage, /build-stage-progress/);
assert.match(buildStage, /Next\.js/);
assert.match(buildStage, /SEO/);
assert.doesNotMatch(buildStage, /canvas|three|@react-three/i);
assert.doesNotMatch(buildStage, /d="[^"]*\sC\s/);
assert.match(globalCss, /@keyframes buildStageFloat/);
assert.match(globalCss, /@keyframes buildStageTrace/);
assert.match(globalCss, /@keyframes buildStagePulse/);
assert.match(globalCss, /@keyframes buildStageAssemble/);
assert.match(globalCss, /@keyframes buildStageCursor/);
assert.match(globalCss, /@keyframes buildStageCodeScroll/);
assert.match(globalCss, /@keyframes buildStageBuildBar/);
assert.match(globalCss, /@keyframes worldRailFlow/);
assert.match(globalCss, /@keyframes runwaySweep/);
assert.match(globalCss, /@keyframes pipelinePulse/);
assert.match(globalCss, /@keyframes transmissionSweep/);
assert.match(globalCss, /@keyframes buildFlowSweep/);
assert.match(globalCss, /@keyframes glassLedgerShift/);
assert.match(globalCss, /\.build-stage-copy-shield/);
assert.match(globalCss, /\.build-stage-rig/);
assert.match(globalCss, /\.home-build-world/);
assert.match(globalCss, /\.home-glass-current/);
assert.match(globalCss, /\.work-glass-cinema/);
assert.match(globalCss, /\.work-frame-stack/);
assert.match(globalCss, /\.work-preview-showcase/);
assert.match(globalCss, /\.work-feature-frame/);
assert.match(globalCss, /\.work-showcase-frame/);
assert.match(globalCss, /\.work-preview-lens/);
assert.doesNotMatch(globalCss, /\.build-flow-grid/);
assert.doesNotMatch(globalCss, /\.work-runway-track|\.work-build-lane/);
assert.doesNotMatch(
  globalCss,
  /\.work-showcase-frame:nth-child\(odd\)[\s\S]{0,160}margin-right|\.work-showcase-frame:nth-child\(even\)[\s\S]{0,160}margin-left/,
);
assert.match(globalCss, /\.service-rack/);
assert.match(globalCss, /\.service-atelier-board/);
assert.match(globalCss, /\.service-instrument-card/);
assert.match(globalCss, /\.service-icon-dock/);
assert.match(globalCss, /\.service-card-glass/);
assert.match(globalCss, /\.service-capability-strip/);
assert.doesNotMatch(globalCss, /\.service-tool-panel|\.service-command-panel|\.service-tool-meter/);
assert.match(
  globalCss,
  /@media \(max-width: 768px\)[\s\S]*\.service-instrument-card[\s\S]*grid-column:\s*1\s*\/\s*-1/,
);
assert.match(globalCss, /\.process-launchline/);
assert.match(globalCss, /\.process-route-board/);
assert.match(globalCss, /\.process-route-list/);
assert.match(globalCss, /\.process-route-lane/);
assert.match(globalCss, /\.process-route-node/);
assert.match(globalCss, /\.process-route-output/);
assert.doesNotMatch(globalCss, /\.process-ledger|\.process-checkpoint|\.process-launch-beam|\.process-step-card|\.process-workbench/);
assert.match(globalCss, /\.contact-transmission/);
assert.match(globalCss, /\.project-build-field/);
assert.match(globalCss, /mask-image/);
assert.doesNotMatch(globalCss, /repeating-linear-gradient\(115deg/);
assert.doesNotMatch(globalCss, /repeating-radial-gradient/);
assert.doesNotMatch(globalCss, /sectionCircuitSweep|panelSignalSpin/);
assert.doesNotMatch(globalCss, /work-card-signal|project-lab-radar/);
assert.doesNotMatch(
  globalCss,
  /\.hero-reveal\s*\{[^}]*opacity:\s*0/s,
  "hero reveal should not hide copy by default",
);
assert.match(globalCss, /\.hero-reveal\s*\{[^}]*opacity:\s*1/s);
assert.match(globalCss, /\.hero-reveal\s*\{[^}]*animation:\s*none/s);
assert.doesNotMatch(globalCss, /animation: fadeUp/);
assert.doesNotMatch(globalCss, /\.glass-atmosphere/);
assert.match(glassFilters, /useSyncExternalStore/);
assert.match(glassFilters, /mounted/);
assert.match(glassFilters, /!mounted \|\| !reduced/);
assert.doesNotMatch(glassFilters, /framer-motion/);

assert.ok(existsSync(projectsPagePath), "projects page should exist");
const projectsPage = read(projectsPagePath);
const projectSource = `${constants}\n${projectsPage}`;
assert.match(projectsPage, /project-lab/);
assert.match(projectsPage, /project-build-field/);
assert.doesNotMatch(projectsPage, /project-lab-radar/);
assert.match(projectsPage, /project-system-card/);
assert.match(globalCss, /\.project-lab/);
assert.match(globalCss, /\.project-system-card/);
for (const phrase of [
  "RepuFlow",
  "NorthTunnel",
  "Supabase",
  "Twilio",
  "Google Places API",
  "sentiment scoring",
  "AI summaries",
  "TUN interfaces",
  "UDP sockets",
  "Fernet",
  "iptables",
  "checksum",
  "https://github.com/JaskarnNijjar/RepuFlow",
  "https://github.com/JaskarnNijjar/NorthTunnel",
]) {
  assert.match(projectSource, new RegExp(phrase));
}

for (const [route, target] of [
  ["work", "/#work"],
  ["services", "/#services"],
  ["contact", "/#contact"],
  ["about", "/projects"],
]) {
  const routePath = `src/app/${route}/page.tsx`;
  assert.ok(existsSync(routePath), `${routePath} should exist`);
  const routeSource = read(routePath);
  assert.match(routeSource, /permanentRedirect/);
  assert.match(routeSource, new RegExp(target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.doesNotMatch(routeSource, /export const metadata/);
}

assert.match(sitemap, /"", "\/projects"/);
assert.doesNotMatch(sitemap, /\/work|\/services|\/about|\/contact/);

for (const metadataFile of ["src/app/sitemap.ts", "src/app/robots.ts"]) {
  assert.ok(existsSync(metadataFile), `${metadataFile} should exist`);
}
