"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { CLIENT_PROJECTS } from "@/lib/constants";

const ROTATION_MS = 3200;

export function ProjectSignalDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % CLIENT_PROJECTS.length);
    }, ROTATION_MS);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    deckRef.current?.style.setProperty("--deck-x", `${x}%`);
    deckRef.current?.style.setProperty("--deck-y", `${y}%`);
  }

  const activeProject = CLIENT_PROJECTS[activeIndex];

  return (
    <div
      ref={deckRef}
      className="project-signal-deck hero-reveal relative min-h-[430px] lg:min-h-[520px]"
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      style={{ "--deck-x": "62%", "--deck-y": "34%" } as React.CSSProperties}
    >
      <div aria-hidden className="absolute inset-0 overflow-hidden rounded-[3rem]">
        <div className="absolute left-[-12%] top-24 h-20 w-[118%] -rotate-12 bg-[linear-gradient(90deg,transparent,rgba(95,247,210,0.22),rgba(255,255,255,0.12),transparent)] blur-2xl" />
        <div className="absolute bottom-6 left-[8%] h-px w-[86%] rotate-6 bg-linear-to-r from-transparent via-white/25 to-transparent" />
      </div>

      <div className="glass-lens absolute inset-x-0 top-4 mx-auto aspect-[16/11] max-w-[700px] overflow-hidden rounded-[2.5rem] p-4 sm:p-5 lg:top-8">
        <div className="relative h-full overflow-hidden rounded-[1.9rem] border border-white/15 bg-black/50">
          <Image
            key={activeProject.name}
            src={activeProject.previewImage}
            alt={`${activeProject.name} website preview`}
            fill
            loading="eager"
            fetchPriority={activeIndex === 0 ? "high" : "auto"}
            sizes="(min-width: 1024px) 48vw, 92vw"
            className="animate-in fade-in duration-700 object-cover object-top"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_var(--deck-x)_var(--deck-y),rgba(255,255,255,0.1),transparent_20%),linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.42)),linear-gradient(130deg,rgba(255,255,255,0.18),transparent_22%,transparent_70%,rgba(95,247,210,0.1))]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-[var(--deck-y)] h-px bg-linear-to-r from-transparent via-[var(--accent-teal)]/70 to-transparent opacity-70"
          />
          <Link
            href={activeProject.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${activeProject.name} website`}
            className="absolute inset-0 rounded-[1.9rem] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]"
          />
        </div>
      </div>

      <div className="glass-panel absolute bottom-0 left-0 w-full max-w-[21rem] rounded-2xl p-5 sm:bottom-4">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent-teal)]">
            Client site preview
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-subtle">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(CLIENT_PROJECTS.length).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <div aria-live="polite">
            <p className="text-xl font-medium tracking-tight text-foreground">
              {activeProject.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground-muted">
              {activeProject.eyebrow}
            </p>
          </div>
          <Link
            href={activeProject.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${activeProject.name}`}
            className="rounded-full p-2 text-foreground-subtle outline-none transition hover:bg-white/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]"
          >
            <ExternalLink className="size-4" />
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-2" role="tablist">
          {CLIENT_PROJECTS.map((project, index) => (
            <button
              key={project.name}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${project.name}`}
              onClick={() => {
                setPaused(true);
                setActiveIndex(index);
              }}
              className="h-1.5 rounded-full bg-white/15 outline-none transition aria-selected:bg-[var(--accent-teal)] focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]"
            />
          ))}
        </div>
      </div>

      <div className="glass-card absolute right-0 top-0 hidden rounded-2xl px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground-subtle sm:block">
        Live client work
      </div>
    </div>
  );
}
