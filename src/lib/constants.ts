export const SITE = {
  name: "Jaskarn Nijjar",
  shortName: "JN",
  url: "https://jaskarnnijjar.com",
  email: "jaskarn.nijjar75@gmail.com",
  location: "Vancouver, BC",
  role: "Software Developer",
  github: "https://github.com/jaskarnnijjar",
  linkedin: "https://linkedin.com/in/jaskarnnijjar",
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
      "A custom website for an Abbotsford based insulation company that serves homes and businesses across the Lower Mainland. It loads quickly, is set up to show in local search, and makes requesting an estimate simple.",
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
      "A custom website for a Surrey insulation contractor working across the Lower Mainland, from new construction to renovations. Fast pages and a clean search setup help the right customers find it and reach out for a quote.",
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
      "A custom website for an influencer marketing agency that connects brands with creators and runs campaigns on TikTok, Instagram, and YouTube. It loads fast and is easy to find on Google, so more of the right brands turn into inquiries.",
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
      "A custom website for a commercial tire distribution and maintenance business. Quick loading and search-friendly pages make the product range easy to find and easy to inquire about.",
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
    title: "Business websites",
    summary:
      "A complete site built around your services, proof, and contact paths. Fast to load and easy for customers to act on.",
  },
  {
    title: "Redesigns and SEO",
    summary:
      "A cleaner, faster version of a site that feels dated or is not converting, with the search and speed basics handled.",
  },
  {
    title: "Automations and integrations",
    summary:
      "Connect the tools a business already uses and remove the manual steps, like syncing leads, sending follow-ups, and moving data between systems.",
  },
  {
    title: "Custom software and AI",
    summary:
      "Internal tools, dashboards, and AI features built for a specific job, from a small workflow fix to a full app.",
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
