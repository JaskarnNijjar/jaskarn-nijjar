export const SITE = {
  name: "Jaskarn Nijjar",
  shortName: "JN",
  url: "https://jaskarnnijjar.com",
  email: "jaskarn.nijjar75@gmail.com",
  location: "Surrey, BC",
  role: "Web Developer",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const CTA = {
  label: "Get in Touch",
  href: "/contact",
} as const;
