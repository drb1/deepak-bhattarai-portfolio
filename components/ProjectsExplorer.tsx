"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import type { Project, ProjectCategory } from "@/data/portfolio";

const filters: Array<"All" | ProjectCategory> = ["All", "AI/ML", "Full Stack", "Mobile", "Backend", "Research"];

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const featuredProjects = projects.filter((project) => project.featured);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter, projects],
  );

  const countFor = (filter: (typeof filters)[number]) =>
    filter === "All" ? projects.length : projects.filter((project) => project.categories.includes(filter)).length;

  return (
    <>
      <section className="mt-20">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">Flagship work</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.045em] md:text-5xl">Start here.</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/45 sm:text-right">
            Four projects that best represent my work across production AI, research, resilient public systems and commercial software.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045] md:p-7"
            >
              <ProjectVisual src={project.visual} name={project.name} href={project.href} priority />
              <div className="mt-6 flex items-start justify-between gap-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-cyan-300 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black">Flagship</span>
                    <span className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">{project.type}</span>
                  </div>
                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl">{project.name}</h3>
                  <p className="mt-4 max-w-xl leading-7 text-white/55">{project.short}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/45">{tech}</span>
                    ))}
                  </div>
                </div>
                <span className="mt-7 text-2xl transition-transform group-hover:translate-x-1">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="section-label">Project library</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.045em] md:text-5xl">Explore by discipline.</h2>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by discipline">
            {filters.map((filter) => {
              const active = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-3.5 py-2 text-sm transition ${active ? "border-cyan-300 bg-cyan-300 text-black" : "border-white/10 bg-white/[0.025] text-white/55 hover:border-white/25 hover:text-white"}`}
                >
                  {filter}
                  <span className={`ml-2 text-[11px] ${active ? "text-black/55" : "text-white/30"}`}>{countFor(filter)}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between text-sm text-white/35">
          <p aria-live="polite">{filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}</p>
          {activeFilter !== "All" && (
            <button type="button" onClick={() => setActiveFilter("All")} className="hover:text-white">
              Clear filter
            </button>
          )}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <ProjectVisual src={project.visual} name={project.name} href={project.href} />
              <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/75">{project.type}</p>
                  {project.featured && <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">Flagship</span>}
                </div>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em]">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/48">{project.short}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.categories.map((category) => (
                    <span key={category} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/38">{category}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
