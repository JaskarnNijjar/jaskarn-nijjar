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
const sitemap = read("src/app/sitemap.ts");
const projectsPagePath = "src/app/projects/page.tsx";
const dynamicDeckPath = "src/components/home/ProjectSignalDeck.tsx";

assert.match(constants, /role: "Software Developer"/);
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
assert.match(hero, /I build fast custom websites for businesses/);
assert.match(hero, /Software Developer/);
assert.match(showcase, /id="work"/);
assert.match(services, /id="services"/);
assert.match(process, /id="process"/);
assert.match(cta, /id="contact"/);
assert.match(navbar, /href={CTA.href}/);
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

assert.ok(existsSync(projectsPagePath), "projects page should exist");
const projectsPage = read(projectsPagePath);
const projectSource = `${constants}\n${projectsPage}`;
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
