import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";

import { TECHNICAL_PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software projects by Jaskarn Nijjar, including RepuFlow and NorthTunnel.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    siteName: "Jaskarn Nijjar",
    locale: "en_CA",
    url: "/projects",
    title: "Projects | Jaskarn Nijjar",
    description:
      "Software projects by Jaskarn Nijjar, including RepuFlow and NorthTunnel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Jaskarn Nijjar",
    description:
      "Software projects by Jaskarn Nijjar, including RepuFlow and NorthTunnel.",
  },
};

const developerNotes = [
  "I build business websites, but I also spend time on full-stack apps, APIs, auth, databases, and lower-level networking projects.",
  "The projects here show how I think through product requirements, security boundaries, external APIs, debugging, and tradeoffs.",
  "I keep the explanations short here. The GitHub repositories have the code and full READMEs.",
] as const;

export default function ProjectsPage() {
  return (
    <div className="project-lab">
      <div aria-hidden className="project-build-field" />
      <section className="section-shell pb-16 pt-32 sm:pt-40">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted outline-none transition hover:text-foreground focus-visible:ring-2 focus-visible:ring-[var(--accent-signal)]"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">Projects</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-7xl">
              Software projects with more technical detail.
            </h1>
          </div>
          <div className="space-y-4 text-base leading-7 text-foreground-muted">
            {developerNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-shell pb-24 sm:pb-32"
        aria-label="Technical projects"
      >
        <div className="space-y-6">
          {TECHNICAL_PROJECTS.map((project) => (
            <article
              key={project.name}
              className="project-system-card overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl"
            >
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-xs font-medium text-[var(--accent-signal)]">
                    {project.type}
                  </p>
                  <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    {project.name}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-foreground-muted">
                    {project.summary}
                  </p>

                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-foreground outline-none transition hover:border-[rgba(0,229,255,0.42)] hover:text-[var(--accent-signal)] focus-visible:ring-2 focus-visible:ring-[var(--accent-signal)]"
                  >
                    <Code2 className="size-4" />
                    View on GitHub
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>

                <div>
                  <h3 className="text-sm font-medium tracking-wide text-foreground-subtle">
                    What I built
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="border-l border-white/10 pl-4 text-base leading-7 text-foreground"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-tight text-foreground-subtle"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
