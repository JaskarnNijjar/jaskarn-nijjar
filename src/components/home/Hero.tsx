"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const ParticleField = dynamic(
  () => import("@/components/effects/ParticleField").then((m) => m.ParticleField),
  { ssr: false, loading: () => null },
);

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6">
      <div aria-hidden className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div aria-hidden className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.65),transparent_70%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <motion.div
        variants={container}
        initial={reduced ? false : "hidden"}
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-subtle"
        >
          {SITE.role} based in {SITE.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
        >
          I build websites that bring in business.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-lg leading-7 text-foreground-muted"
        >
          Fast, custom websites for businesses that want results. Built to rank
          on Google and turn visitors into paying customers.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild className="h-12 px-6 text-base">
            <Link href="/contact">Start a Project</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 px-6 text-base">
            <Link href="/work">See My Work</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-subtle">
          Scroll
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
}
