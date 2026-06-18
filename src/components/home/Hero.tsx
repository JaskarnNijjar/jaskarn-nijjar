import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { HeroBuildStage } from "@/components/home/HeroBuildStage";
import { ProjectSignalDeck } from "@/components/home/ProjectSignalDeck";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#070808] px-6 pb-10 pt-24 sm:pb-8 lg:pt-28">
      <HeroBuildStage />
      <div className="section-shell relative z-10 grid min-h-[calc(100svh-10rem)] items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="max-w-3xl">
          <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground-subtle shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
            <MapPin className="size-3 text-[var(--accent-teal)]" />
            Software Developer in {SITE.location}
          </div>

          <h1 className="hero-reveal mt-7 text-balance text-5xl font-semibold leading-[0.96] tracking-tight text-foreground sm:text-6xl lg:text-6xl xl:text-7xl">
            I build websites that help businesses get found and contacted.
          </h1>

          <p className="hero-reveal mt-7 max-w-2xl text-pretty text-lg leading-8 text-foreground-muted sm:text-xl">
            I work with business owners who need a clear site, real project
            proof, search basics, and a simple way for customers to get in
            touch.
          </p>

          <div className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-xl px-6 text-base">
              <Link href="/#contact">
                Start a project
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="glass-card h-12 rounded-xl px-6 text-base text-foreground hover:bg-white/10"
            >
              <Link href="/#work">See client work</Link>
            </Button>
          </div>
        </div>

        <ProjectSignalDeck />
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  );
}
