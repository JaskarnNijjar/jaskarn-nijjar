"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { CTA, NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Wordmark() {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name}, home`}
      className="rounded-md px-1 font-semibold tracking-tight text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {SITE.name}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "flex h-14 w-full max-w-4xl items-center justify-between gap-4 rounded-2xl border px-3 pl-3 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-colors duration-300",
          scrolled
            ? "border-white/10 bg-background/70"
            : "border-white/6 bg-background/40",
        )}
      >
        <Wordmark />

        <ul
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            const showPill = hovered ? hovered === link.href : active;
            return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setHovered(link.href)}
              >
                {showPill && (
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden
                    className="absolute inset-0 rounded-lg border border-white/10 bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative z-10 block rounded-lg px-3.5 py-2 text-sm transition-colors duration-200",
                    active || hovered === link.href
                      ? "text-foreground"
                      : "text-foreground-muted",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button
            asChild
            className="h-9 rounded-xl border border-white/15 bg-white/10 px-4 text-foreground backdrop-blur-md hover:bg-white/20"
          >
            <Link href={CTA.href}>{CTA.label}</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-4/5 max-w-sm border-l border-white/10 bg-background/80 p-0 backdrop-blur-xl"
            >
              <SheetHeader className="border-b border-white/10 p-6">
                <SheetTitle className="text-left font-semibold tracking-tight">
                  {SITE.name}
                </SheetTitle>
                <SheetDescription className="text-left font-mono text-xs text-foreground-subtle">
                  {SITE.role} · {SITE.location}
                </SheetDescription>
              </SheetHeader>

              <ul className="flex flex-col px-3 py-4">
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex items-center rounded-lg px-3 py-3 text-base transition-colors duration-200",
                            active
                              ? "bg-white/10 text-foreground"
                              : "text-foreground-muted hover:bg-white/5 hover:text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto border-t border-white/10 p-6">
                <SheetClose asChild>
                  <Button asChild size="lg" className="h-12 w-full text-base">
                    <Link href={CTA.href}>{CTA.label}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
