"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Project } from "@/data/portfolio";
import SiteHeader from "@/components/SiteHeader";
import ScrollProgress from "@/components/ScrollProgress";
import ProjectVisual from "@/components/ProjectVisual";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProjectCaseStudy({ project, nextProject }: { project: Project; nextProject: Project }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".case-kicker", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" });
      gsap.from(".case-title", { yPercent: 90, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.08 });
      gsap.from(".case-summary", { y: 28, opacity: 0, duration: 0.75, ease: "power3.out", delay: 0.2 });
      gsap.from(".case-visual", { y: 50, opacity: 0, scale: 0.985, duration: 0.9, ease: "power3.out", delay: 0.28 });
      gsap.utils.toArray<HTMLElement>(".case-reveal").forEach((el) => {
        gsap.from(el, { y: 36, opacity: 0, duration: 0.7, scrollTrigger: { trigger: el, start: "top 84%" } });
      });
      gsap.to(".case-visual img", { scale: 1.04, scrollTrigger: { trigger: ".case-visual", start: "top bottom", end: "bottom top", scrub: 1 } });
    });
    return () => mm.revert();
  }, { scope: root });

  return (
    <div ref={root} className="site-shell">
      <ScrollProgress />
      <SiteHeader />
      <main className="pt-28">
        <section className="px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="case-kicker flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 text-xs uppercase tracking-[0.22em] text-white/40"><span>{project.index} / {project.type}</span><span>{project.period}</span></div>
            <div className="mt-9 overflow-hidden"><h1 className="case-title text-[14vw] font-semibold leading-[0.82] tracking-[-0.075em] md:text-[9vw]">{project.name}</h1></div>
            <div className="case-summary mt-10 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
              <p className="max-w-4xl text-2xl leading-[1.45] text-white/74 md:text-4xl">{project.short}</p>
              <div className="lg:justify-self-end"><p className="text-xs uppercase tracking-[0.22em] text-white/35">My role</p><p className="mt-2 text-lg text-white/75">{project.role}</p>{project.href && <a href={project.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-cyan-300">Visit live project ↗</a>}</div>
            </div>
            <div className="case-visual mt-14"><ProjectVisual src={project.visual} name={project.name} href={project.href} priority /></div>

            {project.proofPoints && (
              <div className="case-reveal mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {project.proofPoints.map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5 md:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300/80">{item.label}</p>
                    <p className="mt-3 text-xl font-medium tracking-[-0.025em] text-white md:text-2xl">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-white/45">{item.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.72fr_1.28fr]">
            <div className="case-reveal"><p className="section-label">Overview</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] md:text-6xl">What I built.</h2></div>
            <div className="case-reveal"><p className="text-xl leading-9 text-white/68 md:text-2xl">{project.summary}</p><div className="mt-8 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/58">{tech}</span>)}</div></div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="case-reveal grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><p className="section-label">Challenge</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">The problem.</h2></div><p className="text-xl leading-9 text-white/62 md:text-2xl">{project.challenge}</p></div>
            <div className="case-reveal mt-24 grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-[.72fr_1.28fr]"><div><p className="section-label">Contribution</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">What I did.</h2></div><div className="grid gap-3">{project.contribution.map((item, i) => <div key={item} className="flex gap-5 rounded-2xl border border-white/10 p-5"><span className="text-sm text-cyan-300">{String(i + 1).padStart(2, "0")}</span><p className="leading-7 text-white/65">{item}</p></div>)}</div></div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.015] px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="case-reveal grid gap-12 lg:grid-cols-[.62fr_1.38fr]">
              <div>
                <p className="section-label">Architecture</p>
                <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">How the system moves.</h2>
                <p className="mt-6 max-w-md leading-7 text-white/45">A simplified view of the main runtime path, showing the engineering layers rather than implementation noise.</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {project.architecture.map((step, i) => (
                  <div key={step} className="relative min-h-36 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#090d12] p-5">
                    <div className="flex items-center justify-between">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-cyan-300 text-[11px] font-bold text-black">{String(i + 1).padStart(2, "0")}</span>
                      {i < project.architecture.length - 1 && <span className="text-lg text-white/18">→</span>}
                    </div>
                    <p className="mt-8 text-lg font-medium tracking-[-0.02em] text-white/82">{step}</p>
                    <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-cyan-300/50 to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {project.decisions && (
              <div className="case-reveal mt-24 border-t border-white/10 pt-16">
                <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr]">
                  <div>
                    <p className="section-label">Engineering decisions</p>
                    <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">Why it was built this way.</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.decisions.map((decision, i) => (
                      <div key={decision.title} className="rounded-[1.5rem] border border-white/10 p-6">
                        <p className="text-xs font-bold tracking-[0.18em] text-cyan-300/75">{String(i + 1).padStart(2, "0")}</p>
                        <h3 className="mt-4 text-xl font-medium tracking-[-0.025em]">{decision.title}</h3>
                        <p className="mt-4 leading-7 text-white/52">{decision.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="case-reveal grid gap-10 lg:grid-cols-2"><div><p className="section-label">Technical highlights</p><div className="mt-7 grid gap-3">{project.highlights.map((item) => <div key={item} className="rounded-2xl border border-white/10 p-5 text-lg text-white/68">{item}</div>)}</div></div><div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.04] p-8 md:p-10"><p className="section-label text-cyan-300">Result</p><p className="mt-7 text-2xl leading-10 text-white/78 md:text-3xl">{project.outcome}</p></div></div>
          </div>
        </section>

        <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <p className="section-label">Next project</p>
            <Link href={`/projects/${nextProject.slug}`} className="group mt-5 flex items-end justify-between gap-6 border-b border-white/10 pb-7"><span className="text-4xl font-medium tracking-[-0.05em] md:text-7xl">{nextProject.name}</span><span className="text-4xl transition-transform group-hover:translate-x-2">→</span></Link>
            <Link href="/projects" className="mt-6 inline-flex text-sm text-white/45 hover:text-white">View all projects</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
