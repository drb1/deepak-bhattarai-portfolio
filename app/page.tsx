import type { Metadata } from "next";
import PortfolioHome from "@/components/PortfolioHome";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Deepak Bhattarai | Software Engineer & AI/ML Engineer",
  description: profile.intro,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Deepak Bhattarai | Software Engineer & AI/ML Engineer",
    description: profile.intro,
    siteName: "Deepak Bhattarai Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Deepak Bhattarai — Software Engineer & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Bhattarai | Software Engineer & AI/ML Engineer",
    description: profile.intro,
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return <PortfolioHome />;
}
