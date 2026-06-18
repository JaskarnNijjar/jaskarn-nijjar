import { Gauge, Search, SquarePen, Wrench } from "lucide-react";
import type { CSSProperties } from "react";

import { SERVICES } from "@/lib/constants";

const icons = [SquarePen, Wrench, Search, Gauge];
const serviceLabels = [
  "Launch-ready pages",
  "Sharper first impression",
  "Technical cleanup",
  "Monthly improvements",
] as const;
const serviceSignals = [
  ["Pages", "Proof", "Contact"],
  ["Structure", "Visuals", "Trust"],
  ["Metadata", "Images", "Vitals"],
  ["Sections", "Fixes", "Conversion"],
] as const;
const serviceAccents = ["#5ff7d2", "#7aa7ff", "#8e6cff", "#f2d06b"] as const;

export function HomeServices() {
  return (
    <section
      id="services"
      className="service-rack border-y border-white/10 bg-white/[0.018] py-20 sm:py-28"
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

        <div className="service-atelier-board mt-14">
          <div aria-hidden className="service-atelier-beam" />
          {SERVICES.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="service-instrument-card relative overflow-hidden border border-white/10 bg-black/25 backdrop-blur-xl"
                style={
                  {
                    "--service-accent": serviceAccents[index],
                  } as CSSProperties
                }
              >
                <div aria-hidden className="service-card-glass" />
                <div aria-hidden className="service-card-shine" />

                <div className="relative z-10 flex min-h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div className="service-icon-dock">
                      <Icon className="relative z-10 size-5" />
                    </div>
                    <div className="text-right">
                      <span className="service-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="service-scope-line">
                        {serviceLabels[index]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-3xl font-medium tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-7 text-foreground-muted">
                      {service.summary}
                    </p>
                  </div>

                  <div className="service-capability-strip mt-8">
                    {serviceSignals[index].map((signal) => (
                      <span key={signal}>{signal}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
