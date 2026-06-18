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

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const constants = read("src/lib/constants.ts");
const layout = read("src/app/layout.tsx");
const page = read("src/app/page.tsx");
const hero = read("src/components/home/Hero.tsx");
const showcase = read("src/components/home/WorkShowcase.tsx");
const services = read("src/components/home/HomeServices.tsx");
const process = read("src/components/home/HomeProcess.tsx");
const cta = read("src/components/home/HomeCTA.tsx");
const navbar = read("src/components/layout/Navbar.tsx");
const footer = read("src/components/layout/Footer.tsx");
const sitemap = read("src/app/sitemap.ts");
const projectsPagePath = "src/app/projects/page.tsx";
const heroKineticPath = "src/components/home/HeroKineticBackdrop.tsx";
const heroGlassShowcasePath = "src/components/home/HeroGlassShowcase.tsx";
const heroCaseboardPath = "src/components/home/HeroCaseboard.tsx";
const heroGlassFieldPath = "src/components/home/HeroGlassField.tsx";
const projectSignalDeckPath = "src/components/home/ProjectSignalDeck.tsx";
const buildStagePath = "src/components/home/HeroBuildStage.tsx";
const globalCss = read("src/app/globals.css");

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
  assert.match(constants, new RegExp(escapeRegExp(phrase)));
}

for (const nav of [
  '{ label: "Work", href: "/#work" }',
  '{ label: "Services", href: "/#services" }',
  '{ label: "Process", href: "/#process" }',
  '{ label: "Projects", href: "/projects" }',
  '{ label: "Contact", href: "/#contact" }',
]) {
  assert.match(constants, new RegExp(escapeRegExp(nav)));
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
assert.match(page, /home-studio-world/);
assert.match(layout, /Software Developer in Vancouver, BC/);
assert.match(layout, /based in Vancouver, BC/);
assert.match(page, /addressLocality: "Vancouver"/);

assert.match(hero, /HeroKineticBackdrop/);
assert.match(hero, /HeroGlassShowcase/);
assert.match(
  hero,
  /I build websites that help businesses get found and contacted/,
);
assert.doesNotMatch(hero, /HeroCaseboard|HeroGlassField|ProjectSignalDeck|glass-card/);
assert.ok(existsSync(heroKineticPath), "hero kinetic backdrop component should exist");
assert.ok(existsSync(heroGlassShowcasePath), "hero glass showcase component should exist");
assert.ok(!existsSync(heroCaseboardPath), "rejected hero showreel component should be removed");
assert.ok(!existsSync(heroGlassFieldPath), "old glass hero field should be removed");
assert.ok(!existsSync(projectSignalDeckPath), "old project signal deck should be removed");
assert.ok(!existsSync(buildStagePath), "old build-stage component should stay removed");

const heroKinetic = read(heroKineticPath);
assert.match(heroKinetic, /^"use client";/);
assert.match(heroKinetic, /requestAnimationFrame/);
assert.match(heroKinetic, /HTMLCanvasElement/);
assert.match(heroKinetic, /prefers-reduced-motion/);
assert.match(heroKinetic, /SOURCE_COLUMNS/);
assert.match(heroKinetic, /FLOW_PATHS/);
assert.match(heroKinetic, /drawCompilerField/);
assert.match(heroKinetic, /drawSourceColumn/);
assert.match(heroKinetic, /drawPacketFlow/);
assert.match(heroKinetic, /hero-kinetic-canvas/);
assert.doesNotMatch(heroKinetic, /from "next\/image"|three|@react-three/i);
assert.doesNotMatch(heroKinetic, /pointer|PointerEvent|mousemove|mouse|clientX|clientY/i);
assert.doesNotMatch(heroKinetic, /LIGHT_FILAMENTS|drawFilaments|ATMOSPHERE_BANDS|drawAtmosphere/);
assert.doesNotMatch(heroKinetic, /255,\s*180,\s*84|255,\s*208,\s*138|ffb454/i);
assert.doesNotMatch(heroKinetic, /245,\s*245,\s*239/);

const heroGlassShowcase = read(heroGlassShowcasePath);
assert.match(heroGlassShowcase, /CLIENT_PROJECTS/);
assert.match(heroGlassShowcase, /from "next\/image"/);
assert.match(heroGlassShowcase, /hero-glass-showcase/);
assert.match(heroGlassShowcase, /hero-glass-frame/);
assert.match(heroGlassShowcase, /hero-showcase-lens/);
assert.doesNotMatch(heroGlassShowcase, /href=|target=|rel=/);

assert.match(showcase, /id="work"/);
assert.match(showcase, /work-index/);
assert.match(showcase, /work-index-grid/);
assert.match(showcase, /work-card/);
assert.match(showcase, /work-card-media/);
assert.doesNotMatch(showcase, /work-gallery|work-preview-pane|work-glass-cinema|work-cinema-light|glass/);
assert.doesNotMatch(showcase, /work-caseboard|work-case-row|showreel/);

assert.match(services, /id="services"/);
assert.match(services, /service-studio-board/);
assert.match(services, /service-studio-card/);
assert.doesNotMatch(services, /service-rack|service-atelier|glass/);

assert.match(process, /id="process"/);
assert.match(process, /process-production-track/);
assert.doesNotMatch(process, /process-launchline|process-route|glass/);

assert.match(cta, /id="contact"/);
assert.match(cta, /contact-studio-frame/);
assert.doesNotMatch(cta, /contact-transmission|contact-signal-grid|glass/);

assert.match(globalCss, /--accent-signal:\s*#00e5ff/i);
assert.match(globalCss, /\.hero-canvas-stage/);
assert.match(globalCss, /\.hero-kinetic-backdrop/);
assert.match(globalCss, /\.hero-kinetic-canvas/);
assert.match(globalCss, /\.hero-glass-showcase/);
assert.match(globalCss, /\.hero-glass-frame/);
assert.match(globalCss, /\.hero-showcase-lens/);
assert.match(globalCss, /@keyframes heroGlassFloat/);
assert.doesNotMatch(globalCss, /animation:\s*heroGlassSweep|@keyframes heroGlassSweep/);
assert.doesNotMatch(globalCss, /animation:\s*heroGlassRail|@keyframes heroGlassRail/);
const heroBackdropGlow = globalCss.match(/\.hero-glass-showcase::after\s*\{([\s\S]*?)\n\}/)?.[1] ?? "";
assert.match(heroBackdropGlow, /animation:\s*heroGlassFloat/);
assert.match(heroBackdropGlow, /rgba\(0,\s*229,\s*255/);
assert.doesNotMatch(heroBackdropGlow, /rgba\(124,\s*247,\s*255|rgba\(245,\s*245,\s*239|255,\s*180,\s*84|255,\s*208,\s*138|#ffb454|#ffd08a/i);
const heroShowcaseRule = globalCss.match(/\.hero-glass-showcase\s*\{([\s\S]*?)\n\}/)?.[1] ?? "";
assert.match(heroShowcaseRule, /right:\s*max\(2rem,/);
assert.match(globalCss, /@media \(max-width:\s*768px\)[\s\S]*\.hero-glass-showcase\s*\{[\s\S]*right:\s*1\.5rem[\s\S]*transform-origin:\s*top right[\s\S]*transform:\s*scale\(0\.88\)/);
assert.match(globalCss, /--accent-quiet/);
assert.match(globalCss, /\.work-index-grid/);
assert.match(globalCss, /\.work-card-media/);
assert.match(globalCss, /\.service-studio-board/);
assert.match(globalCss, /\.process-production-track/);
assert.match(globalCss, /\.contact-studio-frame/);
assert.doesNotMatch(
  globalCss,
  /hero-showreel|showreel-|hero-glass-field|glass-lens|glass-panel|glass-card|build-stage-|home-glass-current|work-glass-cinema|work-showcase-frame|work-preview-lens|workGlass/,
);
assert.doesNotMatch(globalCss, /#c7ff3d|#e6ff9a|#c4c7c0|#ffb454|#ffd08a|rgb\(199,\s*255,\s*61\)|rgba\(199,\s*255,\s*61|rgba\(255,\s*180,\s*84|--accent-blue|--accent-violet|--accent-brass|--accent-flame|--accent-mint|--accent-lime|background-size:\s*(?:4rem\s+4rem|7rem\s+7rem)|home-studio-rules|caseboard-frame/);

assert.match(
  globalCss,
  /\.hero-reveal\s*\{[^}]*opacity:\s*1/s,
  "hero reveal should keep copy visible by default",
);
assert.match(
  globalCss,
  /@media \(prefers-reduced-motion:\s*reduce\)/,
  "reduced-motion media query should exist",
);

assert.match(navbar, /href={CTA.href}/);
assert.doesNotMatch(navbar, /SITE\.shortName/);
assert.match(footer, /NAV_LINKS/);

for (const banned of [
  /Real websites, presented inside glass/i,
  /project signal deck/i,
  /control room/i,
  /brief room/i,
  /glass control/i,
]) {
  for (const file of sourceFiles("src")) {
    assert.doesNotMatch(read(file), banned, `${file} contains ${banned}`);
  }
}

for (const file of sourceFiles("src")) {
  assert.doesNotMatch(read(file), /Web Developer|web developer/, file);
}

assert.ok(existsSync(projectsPagePath), "projects page should exist");
const projectsPage = read(projectsPagePath);
const projectSource = `${constants}\n${projectsPage}`;
assert.match(projectsPage, /project-lab/);
assert.match(projectsPage, /project-system-card/);
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
  assert.match(projectSource, new RegExp(escapeRegExp(phrase)));
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
  assert.match(routeSource, new RegExp(escapeRegExp(target)));
  assert.doesNotMatch(routeSource, /export const metadata/);
}

assert.match(sitemap, /"", "\/projects"/);
assert.doesNotMatch(sitemap, /\/work|\/services|\/about|\/contact/);

for (const metadataFile of ["src/app/sitemap.ts", "src/app/robots.ts"]) {
  assert.ok(existsSync(metadataFile), `${metadataFile} should exist`);
}
