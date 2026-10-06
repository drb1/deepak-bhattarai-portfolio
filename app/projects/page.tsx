import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Projects",
  description: "Explore AI, machine learning, full-stack, backend, mobile and research projects built by Deepak Bhattarai.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Software Engineering & AI Projects | Deepak Bhattarai",
    description: "Explore AI, machine learning, full-stack, backend, mobile and research projects built by Deepak Bhattarai.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Deepak Bhattarai project portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering & AI Projects | Deepak Bhattarai",
    description: "Explore AI, machine learning, full-stack, backend, mobile and research projects built by Deepak Bhattarai.",
    images: ["/opengraph-image"],
  },
};

export default function ProjectsPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="px-5 pb-28 pt-40 md:px-10 md:pb-36 md:pt-48">
        <div className="mx-auto max-w-[1500px]">
          <p className="section-label">Projects</p>
          <h1 className="mt-5 max-w-5xl text-6xl font-medium leading-[.95] tracking-[-0.06em] md:text-9xl">
            Systems I&apos;ve built and researched.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Production AI, research, full-stack platforms, backend systems and mobile products — selected to show both technical depth and real-world delivery.
          </p>

          <ProjectsExplorer projects={projects} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
