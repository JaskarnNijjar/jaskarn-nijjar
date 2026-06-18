export const SITE = {
  name: "Jaskarn Nijjar",
  shortName: "JN",
  url: "https://jaskarnnijjar.com",
  email: "jaskarn.nijjar75@gmail.com",
  location: "Vancouver, BC",
  role: "Software Developer",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export const CTA = {
  label: "Start a project",
  href: "/#contact",
} as const;

export const CLIENT_PROJECTS = [
  {
    name: "Mission Insulation",
    industry: "Home Services",
    stack: ["Next.js", "Tailwind", "Vercel"],
    href: "https://missioninsulation.ca",
    previewUrl: "https://missioninsulation.ca",
    previewImage: "/work-previews/mission-insulation.png",
    displayUrl: "missioninsulation.ca",
    eyebrow: "Residential and commercial insulation",
    summary:
      "A sharp local-service site built to make estimates easier to request.",
  },
  {
    name: "Edge Insulation",
    industry: "Home Services",
    stack: ["Next.js", "Tailwind", "Vercel"],
    href: "https://edgeinsulation.ca",
    previewUrl: "https://edgeinsulation.ca",
    previewImage: "/work-previews/edge-insulation.png",
    displayUrl: "edgeinsulation.ca",
    eyebrow: "Surrey insulation contractor",
    summary:
      "A fast business website for insulation services, credibility, and calls.",
  },
  {
    name: "GoViral Campaigns",
    industry: "Marketing Agency",
    stack: ["Next.js", "Tailwind", "Vercel"],
    href: "https://goviralcampaigns.com",
    previewUrl: "https://goviralcampaigns.com",
    previewImage: "/work-previews/goviral-campaigns.png",
    displayUrl: "goviralcampaigns.com",
    eyebrow: "Influencer marketing agency",
    summary:
      "A polished agency presence designed to explain offers and capture interest.",
  },
  {
    name: "NCA Tires",
    industry: "Commercial Distribution",
    stack: ["Next.js", "Tailwind", "Netlify"],
    href: "https://ncatires.netlify.app",
    previewUrl: "https://ncatires.netlify.app",
    previewImage: "/work-previews/nca-tires.png",
    displayUrl: "ncatires.netlify.app",
    eyebrow: "Commercial tire distribution",
    summary:
      "A practical distribution site focused on product clarity and trust.",
  },
] as const;

export const VALUE_PROPS = [
  {
    label: "Business sites",
    title: "Custom websites",
    summary:
      "Pages built around services, proof, location, and contact. No theme template.",
  },
  {
    label: "Performance",
    title: "Fast builds",
    summary:
      "Responsive layouts, optimized images, clean markup, and a short dependency list.",
  },
  {
    label: "SEO",
    title: "Search basics",
    summary:
      "Titles, descriptions, headings, internal links, and structured data handled from the start.",
  },
  {
    label: "Updates",
    title: "Ongoing work",
    summary:
      "Landing pages, edits, fixes, and improvements after launch when the business needs them.",
  },
] as const;

export const SERVICES = [
  {
    title: "New websites",
    summary:
      "A complete business site with pages, copy structure, project proof, and contact paths.",
  },
  {
    title: "Website redesigns",
    summary:
      "A cleaner structure and stronger visuals for a site that already exists but is not working.",
  },
  {
    title: "SEO and speed cleanup",
    summary:
      "Metadata, page structure, image optimization, and technical fixes that support search.",
  },
  {
    title: "Ongoing improvements",
    summary:
      "New sections, service pages, content updates, bug fixes, and conversion improvements.",
  },
] as const;

export const HOMEPAGE_SERVICES = [
  {
    title: "Business websites",
    href: "/#services",
    summary:
      "Custom service pages, local SEO basics, real project proof, and contact paths.",
  },
  {
    title: "Redesigns",
    href: "/#services",
    summary:
      "A cleaner structure for sites that feel dated, unclear, or hard to update.",
  },
  {
    title: "Performance and SEO",
    href: "/#services",
    summary:
      "Speed, metadata, headings, links, and technical cleanup that supports search.",
  },
] as const;

export const HOMEPAGE_SIGNALS = [
  "Custom websites",
  "Local SEO",
  "Performance",
  "Full-stack builds",
] as const;

export const TECHNICAL_PROJECTS = [
  {
    name: "RepuFlow",
    type: "Reputation SaaS",
    href: "https://github.com/JaskarnNijjar/RepuFlow",
    stack: [
      "React",
      "Vite",
      "Node",
      "Express",
      "Supabase",
      "Twilio",
      "Google Places API",
      "VADER",
      "Groq",
    ],
    summary:
      "A reputation management app for small service businesses. Owners can claim a Google listing, view reviews, manage customers, and send SMS review requests.",
    highlights: [
      "Built Supabase authentication, protected routes, and multi-business dashboards.",
      "Proxied Google Places API calls through Express so API keys stay off the client.",
      "Added sentiment scoring with VADER and cached AI summaries through Groq.",
      "Built customer management, CSV import, and Twilio SMS review request logging.",
    ],
  },
  {
    name: "NorthTunnel",
    type: "Layer 3 VPN",
    href: "https://github.com/JaskarnNijjar/NorthTunnel",
    stack: ["Python", "Docker", "Fernet", "iptables", "TUN", "UDP"],
    summary:
      "A Layer 3 VPN built from scratch in Python. It creates a TUN interface, encrypts packets, sends them over UDP, and routes traffic through a server.",
    highlights: [
      "Created client and server TUN interfaces and moved raw IP packets over UDP sockets.",
      "Used Fernet encryption, Docker networking, IP forwarding, and iptables NAT.",
      "Debugged TCP failures caused by checksum handling after NAT and receive offload.",
      "Fixed truncated encrypted packets by increasing UDP buffers and hardening receiver threads.",
    ],
  },
] as const;
