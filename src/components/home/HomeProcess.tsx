const steps = [
  {
    title: "Understand the business",
    text: "I look at what you sell, who needs it, where the site is losing people, and what the site needs visitors to do.",
  },
  {
    title: "Plan the pages",
    text: "We keep the structure tight: services, proof, location, FAQs when useful, and a clear contact path.",
  },
  {
    title: "Design and build",
    text: "I build the site in Next.js with responsive layouts, optimized images, clean metadata, and accessible markup.",
  },
  {
    title: "Launch and improve",
    text: "After launch, I can help with edits, new sections, performance fixes, and landing pages as the business changes.",
  },
] as const;

export function HomeProcess() {
  return (
    <section
      id="process"
      className="section-shell scroll-mt-28 py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="section-kicker">Process</p>
          <h2
            id="process-heading"
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            How a project works.
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-4 py-6 sm:grid-cols-[4rem_1fr]"
            >
              <span className="font-mono text-xs text-[var(--accent-teal)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-foreground-muted">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
