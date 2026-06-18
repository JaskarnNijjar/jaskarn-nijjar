import type { Metadata } from "next";
import { Hanken_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassFilters } from "@/components/effects/GlassFilters";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaskarnnijjar.com"),
  title: {
    default: "Jaskarn Nijjar | Software Developer in Vancouver, BC",
    template: "%s | Jaskarn Nijjar",
  },
  description:
    "Custom websites and full-stack applications for businesses, built by a software developer based in Vancouver, BC.",
  openGraph: {
    type: "website",
    siteName: "Jaskarn Nijjar",
    locale: "en_CA",
    url: "/",
    title: "Jaskarn Nijjar | Software Developer in Vancouver, BC",
    description:
      "Custom websites and full-stack applications for businesses, built by a software developer based in Vancouver, BC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaskarn Nijjar | Software Developer in Vancouver, BC",
    description:
      "Custom websites and full-stack applications for businesses, built by a software developer based in Vancouver, BC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${hanken.variable} ${splineMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full overflow-x-hidden bg-background text-foreground font-sans">
        <GlassFilters />
        <Navbar />
        <main className="relative z-10 flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
