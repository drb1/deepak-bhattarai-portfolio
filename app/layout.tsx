import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { profile } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drb.codes";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deepak Bhattarai | Software Engineer & AI/ML Engineer",
    template: "%s | Deepak Bhattarai",
  },
  description: profile.intro,
  keywords: [
    "Deepak Bhattarai",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Full-Stack Developer",
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "London",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: "Deepak Bhattarai | Software Engineer & AI/ML Engineer",
    description: profile.intro,
    url: siteUrl,
    siteName: "Deepak Bhattarai Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Deepak Bhattarai — Software Engineer & AI/ML Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Bhattarai | Software Engineer & AI/ML Engineer",
    description: profile.intro,
    images: ["/opengraph-image"],
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Software Engineer and AI/ML Engineer",
    url: siteUrl,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin, profile.github],
    alumniOf: { "@type": "CollegeOrUniversity", name: "London Metropolitan University" },
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Script
          src="https://www.thunderbolt.com/gateway/api/v1/thunderbolt-ui/embed.js"
          strategy="afterInteractive"
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
