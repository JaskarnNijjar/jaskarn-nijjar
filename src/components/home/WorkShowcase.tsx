import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CLIENT_PROJECTS } from "@/lib/constants";

export function WorkShowcase() {
  return (
    <section
      id="work"
      className="section-shell scroll-mt-28 py-20 sm:py-28"
      aria-labelledby="work-heading"
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">Client work</p>
          <h2
            id="work-heading"
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            Recent business websites.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-foreground-muted lg:justify-self-end">
          These are real client sites with live links. The goal on each one was
          simple: explain the business, make the services easy to understand,
          and give visitors a clear next step.
        </p>
      </div>

      <div className="mt-12 grid gap-5">
        {CLIENT_PROJECTS.map((project, index) => (
          <article
            key={project.name}
            className="group grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 backdrop-blur-xl lg:grid-cols-[1.15fr_0.85fr]"
          >
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} website`}
              className="relative block aspect-[16/10] overflow-hidden bg-black outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)] lg:aspect-auto lg:min-h-[25rem]"
            >
              <Image
                src={project.previewImage}
                alt={`${project.name} website preview`}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                sizes="(min-width: 1024px) 56vw, 92vw"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent"
              />
            </Link>

            <div className="flex flex-col justify-between gap-10 p-6 sm:p-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-foreground-subtle">
                  <span className="font-mono uppercase tracking-[0.16em] text-[var(--accent-teal)]">
                    {project.industry}
                  </span>
                  <span>{project.displayUrl}</span>
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-foreground-muted">
                  {project.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.13em] text-foreground-subtle"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground outline-none transition hover:text-[var(--accent-teal)] focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]"
                >
                  Visit site
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
