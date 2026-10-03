import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ProjectVisual from "@/components/ProjectVisual";
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
          <h1 className="mt-5 max-w-5xl text-6xl font-medium leading-[.95] tracking-[-0.06em] md:text-9xl">Systems I&apos;ve built and researched.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">AI research, learning platforms, public-data systems, exams, mobile products and IoT — with an emphasis on real implementation rather than concept work.</p>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 transition hover:bg-white/[0.045] md:p-7">
                <ProjectVisual src={project.visual} name={project.name} />
                <div className="mt-6 flex items-start justify-between gap-5"><div><p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{project.type}</p><h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl">{project.name}</h2><p className="mt-4 max-w-xl leading-7 text-white/55">{project.short}</p></div><span className="mt-7 text-2xl transition-transform group-hover:translate-x-1">↗</span></div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
