const steps = [
  {
    title: "Understand the business",
    text: "I look at what you sell, who needs it, where you are losing people, and what the project actually needs to do.",
    output: "Project direction",
    checks: ["Goals", "Audience", "Next step"],
  },
  {
    title: "Plan the build",
    text: "We agree on scope and structure: the pages, features, or tools involved, and a clear path for customers to act.",
    output: "Build plan",
    checks: ["Scope", "Structure", "Contact"],
  },
  {
    title: "Design and build",
    text: "I build it with clean, fast, accessible code, whether that is a website, an automation, or a custom tool.",
    output: "Working build",
    checks: ["Design", "Speed", "Quality"],
  },
  {
    title: "Launch and improve",
    text: "After launch I can keep improving it with new sections, features, fixes, and changes as the business grows.",
    output: "Live and improving",
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
