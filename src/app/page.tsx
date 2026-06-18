import { Hero } from "@/components/home/Hero";
import { HomeCTA } from "@/components/home/HomeCTA";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeServices } from "@/components/home/HomeServices";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import type { Metadata } from "next";

import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Jaskarn Nijjar",
    locale: "en_CA",
    url: "/",
    title: "Jaskarn Nijjar | Software Developer in Vancouver, BC",
    description:
      "Websites, custom software, and automations for businesses, built by a software developer based in Vancouver, BC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaskarn Nijjar | Software Developer in Vancouver, BC",
    description:
      "Websites, custom software, and automations for businesses, built by a software developer based in Vancouver, BC.",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        jobTitle: SITE.role,
        knowsAbout: [
          "Website development",
          "Custom software development",
          "Business automation",
          "AI integration",
          "Local SEO",
          "Performance optimization",
          "Full-stack development",
        ],
        sameAs: [SITE.github, SITE.linkedin],
        worksFor: { "@id": `${SITE.url}/#business` },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#business`,
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        areaServed: "Canada",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vancouver",
          addressRegion: "BC",
          addressCountry: "CA",
        },
        founder: { "@id": `${SITE.url}/#person` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="home-studio-world">
        <Hero />
        <WorkShowcase />
        <HomeServices />
        <HomeProcess />
        <HomeCTA />
      </div>
    </>
  );
}
