"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { CTA, NAV_LINKS, SITE, type NavLink } from "@/lib/constants";
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

function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name}, home`}
      className={cn(
        "group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md",
        className,
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-md border border-border bg-surface-2 font-mono text-xs font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:border-foreground/30">
        {SITE.shortName}
      </span>
      <span className="font-semibold tracking-tight text-foreground">
        {SITE.name}
      </span>
    </Link>
  );
}

function DesktopLink({ link, active }: { link: NavLink; active: boolean }) {
  return (
    <Link
      href={link.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative text-sm transition-colors duration-200 outline-none focus-visible:text-foreground",
        active ? "text-foreground" : "text-foreground-muted hover:text-foreground",
      )}
    >
      {link.label}
      <span
        className={cn(
          "absolute -bottom-1.5 left-0 h-px bg-foreground transition-all duration-200",
          active ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/70"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <DesktopLink link={link} active={isActive(pathname, link.href)} />
              </li>
            ))}
          </ul>
          <Button asChild size="lg">
            <Link href={CTA.href}>{CTA.label}</Link>
          </Button>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-4/5 max-w-sm border-l border-border bg-background p-0"
            >
              <SheetHeader className="border-b border-border p-6">
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
                              ? "bg-surface-2 text-foreground"
                              : "text-foreground-muted hover:bg-surface-2 hover:text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto border-t border-border p-6">
                <SheetClose asChild>
                  <Button asChild size="lg" className="w-full">
                    <Link href={CTA.href}>{CTA.label}</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
