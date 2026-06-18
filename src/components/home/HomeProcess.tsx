const steps = [
  {
    title: "Understand the business",
    text: "I look at what you sell, who needs it, where the site is losing people, and what the site needs visitors to do.",
    output: "Site direction",
    checks: ["Offer", "Audience", "Next step"],
  },
  {
    title: "Plan the pages",
    text: "We keep the structure tight: services, proof, location, FAQs when useful, and a clear contact path.",
    output: "Page map",
    checks: ["Services", "Proof", "Contact"],
  },
  {
    title: "Design and build",
    text: "I build the site in Next.js with responsive layouts, optimized images, clean metadata, and accessible markup.",
    output: "Working site",
    checks: ["Design", "Speed", "SEO"],
  },
  {
    title: "Launch and improve",
    text: "After launch, I can help with edits, new sections, performance fixes, and landing pages as the business changes.",
    output: "Live updates",
    checks: ["Deploy", "Measure", "Improve"],
  },
] as const;

export function HomeProcess() {
  return (
    <section
      id="process"
      className="process-production-track section-shell scroll-mt-28 py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="section-kicker">Process</p>
          <h2
            id="process-heading"
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            How a project works.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-foreground-muted">
            Four stages from the first conversation to launch. You always know
            what is happening and what you get at the end of each one.
          </p>
        </div>

        <ol className="process-stages">
          {steps.map((step) => (
            <li key={step.title} className="process-stage">
              <span className="process-stage-marker" aria-hidden />
              <div className="process-stage-head">
                <h3 className="process-stage-title">{step.title}</h3>
                <span className="process-stage-output">{step.output}</span>
              </div>
              <p className="process-stage-text">{step.text}</p>
              <div className="process-stage-tags">
                {step.checks.map((check) => (
                  <span key={check}>{check}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
