import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { projects, profile } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drb.codes";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const canonical = `/projects/${project.slug}`;
  const title = `${project.name} — ${project.type}`;

  return {
    title,
    description: project.summary,
    keywords: [...project.stack, project.type, "Deepak Bhattarai"],
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${title} | Deepak Bhattarai`,
      description: project.summary,
      siteName: "Deepak Bhattarai Portfolio",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${project.name} project by Deepak Bhattarai`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Deepak Bhattarai`,
      description: project.summary,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: projectUrl,
    creator: {
      "@type": "Person",
      name: profile.name,
      url: siteUrl,
    },
    keywords: project.stack.join(", "),
    ...(project.href ? { sameAs: project.href } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectCaseStudy project={project} nextProject={nextProject} />
    </>
  );
}
