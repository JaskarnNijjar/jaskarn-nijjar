"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

const panels = [
  {
    title: "Next.js",
    meta: "Business site",
    lines: ["Service pages", "Project proof", "Lead path"],
    className: "panel-home",
    delay: "0ms",
  },
  {
    title: "SEO",
    meta: "Search basics",
    lines: ["Metadata", "Headings", "Local signals"],
    className: "panel-seo",
    delay: "900ms",
  },
  {
    title: "Performance",
    meta: "Launch pass",
    lines: ["Image sizes", "Core Web Vitals", "Clean bundle"],
    className: "panel-speed",
    delay: "1600ms",
  },
  {
    title: "Contact path",
    meta: "Conversion",
    lines: ["Clear CTA", "Short forms", "Mobile first"],
    className: "panel-contact",
    delay: "2300ms",
  },
] as const;

const statusItems = ["Design", "Build", "SEO", "Launch"] as const;

const assemblyBlocks = ["Hero", "Services", "Proof", "Reviews", "CTA"] as const;

const codeLines = [
  "app/page.tsx",
  "metadata: local search",
  "preview images sized",
  "schema: business",
  "forms route ready",
] as const;

const browserRows = [
  ["Hero", "CTA"],
  ["Services", "Proof"],
  ["Reviews", "Contact"],
] as const;

export function HeroBuildStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(media.matches);

    updateMotion();
    media.addEventListener("change", updateMotion);

    return () => media.removeEventListener("change", updateMotion);
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    stageRef.current?.style.setProperty("--stage-x", `${x}%`);
    stageRef.current?.style.setProperty("--stage-y", `${y}%`);
  }

  return (
    <div
      ref={stageRef}
      aria-hidden="true"
      className="hero-build-stage absolute inset-0 z-0 overflow-hidden"
      data-reduced-motion={reduceMotion ? "true" : "false"}
      onPointerMove={handlePointerMove}
      style={
        {
          "--stage-x": "73%",
          "--stage-y": "28%",
        } as CSSProperties
      }
    >
      <div className="build-stage-copy-shield" />
      <div className="build-stage-glass-sheet sheet-a" />
      <div className="build-stage-glass-sheet sheet-b" />

      <svg
        className="build-stage-lines"
        viewBox="0 0 1200 720"
        role="presentation"
        preserveAspectRatio="none"
      >
        <path
          className="build-stage-line line-a"
          d="M132 488 H306 V342 H526 V258 H826 V196 H1078"
        />
        <path
          className="build-stage-line line-b"
          d="M214 178 H398 V438 H646 V386 H928 V528 H1058"
        />
        <path
          className="build-stage-line line-c"
          d="M86 614 H268 V574 H580 V548 H820 V316 H1116"
        />
      </svg>

      <div className="build-stage-node node-a" />
      <div className="build-stage-node node-b" />
      <div className="build-stage-node node-c" />
      <div className="build-stage-node node-d" />

      <div className="build-stage-rig">
        <div className="build-stage-lane" />

        <div className="build-stage-browser">
          <div className="build-stage-browser-bar">
            <span />
            <span />
            <span />
            <div className="build-stage-browser-url">business-site.local</div>
          </div>
          <div className="build-stage-browser-page">
            <div className="build-stage-browser-hero">
              <div />
              <div />
            </div>
            {browserRows.map((row, rowIndex) => (
              <div className="build-stage-browser-row" key={row.join("-")}>
                {row.map((item, itemIndex) => (
                  <div
                    key={item}
                    className="build-stage-browser-card"
                    style={
                      {
                        "--stage-delay": `${(rowIndex * 2 + itemIndex) * 420}ms`,
                      } as CSSProperties
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="build-stage-progress" />
        </div>

        <div className="build-stage-assembly-track">
          {assemblyBlocks.map((block, index) => (
            <div
              key={block}
              className="build-stage-blueprint-block"
              style={{ "--stage-delay": `${index * 520}ms` } as CSSProperties}
            >
              {block}
            </div>
          ))}
        </div>

        <div className="build-stage-code-rail">
          <div className="build-stage-code-stack">
            {[...codeLines, ...codeLines].map((line, index) => (
              <p key={`${line}-${index}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="build-stage-cursor">
          <span />
        </div>

        {panels.map((panel) => (
          <div
            key={panel.title}
            className={`build-stage-panel ${panel.className}`}
            style={{ "--stage-delay": panel.delay } as CSSProperties}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground-subtle">
                {panel.meta}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-teal)] shadow-[0_0_18px_rgba(95,247,210,0.8)]" />
            </div>
            <p className="mt-3 text-base font-medium tracking-tight text-foreground">
              {panel.title}
            </p>
            <div className="mt-4 space-y-2">
              {panel.lines.map((line) => (
                <div key={line} className="flex items-center gap-2">
                  <span className="h-px w-5 bg-white/25" />
                  <span className="font-mono text-[11px] text-foreground-muted">
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="build-stage-terminal">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
            <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
            <span className="h-2 w-2 rounded-full bg-[var(--accent-teal)]" />
          </div>
          <div className="mt-4 space-y-2 font-mono text-[11px] leading-none text-foreground-muted">
            <p>
              <span className="text-[var(--accent-teal)]">$</span> npm run
              build
            </p>
            <p>route / indexed</p>
            <p>images optimized</p>
          </div>
        </div>

        <div className="build-stage-status">
          {statusItems.map((item, index) => (
            <div
              key={item}
              className="build-stage-status-item"
              style={{ "--stage-delay": `${index * 560}ms` } as CSSProperties}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="build-stage-scan" />
    </div>
  );
}
