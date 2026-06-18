import { Hero } from "@/components/home/Hero";
import { HomeCTA } from "@/components/home/HomeCTA";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeServices } from "@/components/home/HomeServices";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import { CLIENT_PROJECTS, SITE } from "@/lib/constants";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "LocalBusiness"],
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surrey",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    jobTitle: SITE.role,
    areaServed: "Canada",
    knowsAbout: [
      "Website design",
      "Next.js development",
      "Local SEO",
      "Performance optimization",
      "Full-stack software development",
    ],
    sameAs: CLIENT_PROJECTS.map((project) => project.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <WorkShowcase />
      <HomeServices />
      <HomeProcess />
      <HomeCTA />
    </>
  );
}
