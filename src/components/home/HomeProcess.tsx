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
      className="process-launchline section-shell scroll-mt-28 py-20 sm:py-28"
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

        <div className="process-route-board relative">
          <div className="process-route-topline">
            <span>Project path</span>
            <span>01-04</span>
          </div>
          <ol className="process-route-list">
            {steps.map((step, index) => (
              <li key={step.title} className="process-route-lane">
                <span className="process-route-node">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="process-route-copy">
                  <h3 className="text-2xl font-medium tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-foreground-muted">
                    {step.text}
                  </p>
                  <div className="process-route-tags mt-5">
                    {step.checks.map((check) => (
                      <span key={check}>{check}</span>
                    ))}
                  </div>
                </div>
                <span className="process-route-output">{step.output}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
