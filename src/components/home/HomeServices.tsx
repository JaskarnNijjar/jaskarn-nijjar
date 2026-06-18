import { Gauge, Search, SquarePen, Wrench } from "lucide-react";

import { SERVICES } from "@/lib/constants";

const icons = [SquarePen, Wrench, Search, Gauge];

export function HomeServices() {
  return (
    <section
      id="services"
      className="border-y border-white/10 bg-white/[0.018] py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">Services</p>
            <h2
              id="services-heading"
              className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
            >
              What I can build for your business.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-foreground-muted lg:justify-self-end">
            Most business sites need the same fundamentals done well: clear
            pages, real proof, fast loading, search-friendly structure, and an
            easy way to contact the business.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="rounded-[1.25rem] border border-white/10 bg-black/25 p-6 backdrop-blur-xl"
              >
                <Icon className="size-5 text-[var(--accent-teal)]" />
                <h3 className="mt-5 text-2xl font-medium tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground-muted">
                  {service.summary}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
