import Link from "next/link";

import { CTA, NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-semibold tracking-tight text-foreground outline-none focus-visible:underline"
            >
              {SITE.name}
            </Link>
            <p className="mt-3 text-sm leading-6 text-foreground-muted">
              Custom websites and full-stack apps for businesses. Based in{" "}
              {SITE.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CTA.href}
              className="text-sm text-foreground transition-colors duration-200 hover:text-foreground-muted"
            >
              {CTA.label}
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 font-mono text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <a
            href={`mailto:${SITE.email}`}
            className="transition-colors duration-200 hover:text-foreground"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
