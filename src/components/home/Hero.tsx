import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { HeroGlassShowcase } from "@/components/home/HeroGlassShowcase";
import { HeroKineticBackdrop } from "@/components/home/HeroKineticBackdrop";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero-canvas-stage relative isolate overflow-hidden border-b border-white/10 px-6">
      <HeroKineticBackdrop />
      <HeroGlassShowcase />
      <div className="section-shell relative z-10 flex min-h-[calc(100svh-4rem)] items-center py-24 sm:py-28 lg:py-32">
        <div className="hero-copy max-w-4xl">
          <div className="hero-reveal hero-location-pill inline-flex items-center gap-2 text-xs tracking-wide text-foreground-subtle">
            <MapPin className="size-3 text-[var(--accent-signal)]" />
            Software Developer in {SITE.location}
          </div>

          <h1 className="hero-reveal mt-7 text-balance text-5xl font-semibold leading-[0.93] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            I build websites that help businesses get found and contacted.
          </h1>

          <p className="hero-reveal mt-7 max-w-2xl text-pretty text-lg leading-8 text-foreground-muted sm:text-xl">
            I work with business owners who need a clear site, real project
            proof, search basics, and a simple way for customers to get in
            touch.
          </p>

          <div className="hero-reveal mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button asChild className="h-12 rounded-lg px-6 text-base">
              <Link href="/#contact">
                Start a project
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-12 rounded-lg border border-white/10 bg-transparent px-6 text-base text-foreground hover:bg-white/10"
            >
              <Link href="/#work">See client work</Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  );
}
