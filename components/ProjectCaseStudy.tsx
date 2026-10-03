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
            <div className="case-reveal grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><p className="section-label">Architecture</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.04em]">System flow.</h2></div><div className="grid gap-3">{project.architecture.map((step, i) => <div key={step} className="flex items-center gap-5 border-b border-white/10 py-4 last:border-0"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cyan-300 text-xs font-bold text-black">{i + 1}</span><span className="text-lg md:text-xl">{step}</span>{i < project.architecture.length - 1 && <span className="ml-auto text-white/25">→</span>}</div>)}</div></div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="case-reveal grid gap-10 lg:grid-cols-2"><div><p className="section-label">Highlights</p><div className="mt-7 grid gap-3">{project.highlights.map((item) => <div key={item} className="rounded-2xl border border-white/10 p-5 text-lg text-white/68">{item}</div>)}</div></div><div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.04] p-8 md:p-10"><p className="section-label text-cyan-300">Outcome</p><p className="mt-7 text-2xl leading-10 text-white/78 md:text-3xl">{project.outcome}</p></div></div>
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
