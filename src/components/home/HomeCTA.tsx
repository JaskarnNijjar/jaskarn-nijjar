import Link from "next/link";
import { ArrowRight, Code2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function HomeCTA() {
  const subject = encodeURIComponent("Website project inquiry");
  const body = encodeURIComponent(
    "Business name:\nCurrent website:\nWhat I need the site to do:\nTimeline:\n",
  );

  return (
    <section
      id="contact"
      className="section-shell scroll-mt-28 py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Contact</p>
            <h2
              id="contact-heading"
              className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
            >
              Need a website for your business?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground-muted">
              Send the rough version. Tell me what the business does, what is
              not working, and what you want the site to help with.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild className="h-12 rounded-xl px-6 text-base">
              <a href={`mailto:${SITE.email}?subject=${subject}&body=${body}`}>
                Start a project
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-12 rounded-xl border border-white/10 px-6 text-base text-foreground hover:bg-white/10"
            >
              <Link href="/projects">
                See developer projects
                <Code2 className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 text-sm text-foreground-muted outline-none transition hover:text-foreground focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]"
          >
            <Mail className="size-4 text-[var(--accent-teal)]" />
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
