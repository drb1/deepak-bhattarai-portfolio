"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { experience, profile, projects, skills, stats } from "@/data/portfolio";
import SiteHeader from "@/components/SiteHeader";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import ProjectVisual from "@/components/ProjectVisual";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PortfolioHome() {
  const root = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const projectTrack = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroTl
          .from(".nav-reveal", { y: -24, opacity: 0, duration: 0.7 })
          .from(".hero-kicker", { y: 24, opacity: 0, duration: 0.55 }, "-=0.25")
          .from(".hero-word", { yPercent: 115, opacity: 0, stagger: 0.09, duration: 0.95 }, "-=0.15")
          .from(".hero-copy", { y: 28, opacity: 0, duration: 0.7 }, "-=0.35")
          .from(".hero-action", { y: 18, opacity: 0, stagger: 0.07, duration: 0.5 }, "-=0.35");

        gsap.to(".hero-orb-a", {
          xPercent: 20,
          yPercent: -18,
          rotate: 28,
          scrollTrigger: { trigger: hero.current, start: "top top", end: "bottom top", scrub: 1 },
        });
        gsap.to(".hero-orb-b", {
          xPercent: -18,
          yPercent: 22,
          rotate: -22,
          scrollTrigger: { trigger: hero.current, start: "top top", end: "bottom top", scrub: 1 },
        });

        gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
          gsap.from(section.querySelectorAll(".reveal-item"), {
            y: 44,
            opacity: 0,
            stagger: 0.09,
            duration: 0.82,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 80%" },
          });
        });

        gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
          gsap.from(item, {
            x: -28,
            opacity: 0,
            duration: 0.65,
            scrollTrigger: { trigger: item, start: "top 86%" },
          });
        });

        gsap.fromTo(
          ".timeline-line",
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: { trigger: ".timeline-wrap", start: "top 75%", end: "bottom 70%", scrub: true },
          }
        );

        gsap.utils.toArray<HTMLElement>(".research-step").forEach((step, index) => {
          gsap.from(step, {
            x: index % 2 ? 24 : -24,
            opacity: 0,
            duration: 0.55,
            scrollTrigger: { trigger: step, start: "top 88%" },
          });
        });

        const track = projectTrack.current;
        if (track && window.innerWidth >= 1024) {
          const distance = Math.max(0, track.scrollWidth - window.innerWidth + 120);
          gsap.to(track, {
            x: -distance,
            ease: "none",
            scrollTrigger: {
              trigger: ".projects-pin",
              start: "top top",
              end: () => `+=${distance + window.innerWidth * 0.6}`,
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
            },
          });
        }
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div ref={root} className="site-shell relative z-10">
      <ScrollProgress />
      <CursorGlow />
      <SiteHeader />

      <main>
        <section ref={hero} id="top" className="hero relative flex min-h-screen overflow-hidden px-5 pb-16 pt-32 md:px-10">
          <div className="hero-grid absolute inset-0 opacity-45" />
          <div className="hero-orb-a absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="hero-orb-b absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col justify-end">
            <p className="hero-kicker mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">{profile.location} · Software Engineering · Applied AI</p>
            <h1 className="overflow-hidden text-[17vw] font-semibold leading-[0.74] tracking-[-0.075em] md:text-[12vw]">
              <span className="hero-word inline-block">DEEPAK</span>
            </h1>
            <h1 className="overflow-hidden text-[17vw] font-semibold leading-[0.82] tracking-[-0.075em] text-white/28 md:text-[12vw]">
              <span className="hero-word inline-block">BHATTARAI</span>
            </h1>
            <div className="mt-10 grid gap-8 border-t border-white/12 pt-7 md:grid-cols-[1.25fr_.75fr]">
              <div>
                <p className="hero-copy max-w-3xl text-xl leading-relaxed text-white/78 md:text-2xl">{profile.intro}</p>
                <p className="hero-copy mt-4 text-sm uppercase tracking-[0.22em] text-white/35">{profile.title}</p>
              </div>
              <div className="flex flex-wrap items-start gap-3 md:justify-end">
                <a className="hero-action primary-btn" href="#projects">View projects</a>
                <a className="hero-action secondary-btn" href={profile.cv} download>Download CV</a>
              </div>
            </div>

            <div className="hero-copy mt-8 grid overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm sm:grid-cols-3">
              <div className="border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Experience</p>
                <p className="mt-1 text-sm font-semibold text-white/78">9+ years in software</p>
              </div>
              <div className="border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Academic</p>
                <p className="mt-1 text-sm font-semibold text-white/78">MSc AI · Distinction</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Focus</p>
                <p className="mt-1 text-sm font-semibold text-cyan-300">Applied AI + production systems</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="reveal-section px-5 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1500px]">
            <p className="reveal-item section-label">01 / About</p>
            <div className="mt-8 grid gap-12 lg:grid-cols-[1.35fr_.65fr]">
              <h2 className="reveal-item max-w-5xl text-4xl font-medium leading-[1.07] tracking-[-0.045em] md:text-7xl">Nine years building software. Now combining production engineering with artificial intelligence.</h2>
              <div className="reveal-item self-end space-y-5 text-lg leading-8 text-white/60">
                <p>MSc Artificial Intelligence with Distinction from London Metropolitan University.</p>
                <p>My work spans full-stack and mobile products, deep-learning research, LLM-enabled assessment, real-time inference, public-data automation and cloud/VPS deployment.</p>
              </div>
            </div>
            <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.value} className="reveal-item bg-[#090b0f] p-8 md:p-10">
                  <div className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{stat.value}</div>
                  <p className="mt-3 text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="reveal-section border-y border-white/10 px-5 py-28 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1500px]">
            <p className="reveal-item section-label">02 / Experience</p>
            <div className="timeline-wrap relative mt-14">
              <div className="timeline-line absolute bottom-0 left-[7px] top-0 w-px bg-cyan-300/70 md:left-[126px]" aria-hidden="true" />
              {experience.map((item) => (
                <article key={`${item.year}-${item.company}`} className="timeline-item relative grid gap-4 border-t border-white/10 py-8 pl-7 md:grid-cols-[120px_1fr_1fr] md:gap-10 md:pl-0">
                  <span className="absolute left-0 top-10 h-3.5 w-3.5 rounded-full border-2 border-[#090b0f] bg-cyan-300 md:left-[120px]" />
                  <div className="text-sm text-cyan-300 md:text-base">{item.year}</div>
                  <div className="md:pl-7"><h3 className="text-xl font-medium md:text-2xl">{item.role}</h3><p className="mt-1 text-white/45">{item.company}</p></div>
                  <p className="max-w-2xl leading-7 text-white/58">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-pin min-h-screen overflow-hidden bg-[#06080b] py-24 lg:flex lg:items-center">
          <div className="w-full">
            <div className="mx-auto mb-10 max-w-[1500px] px-5 md:px-10">
              <p className="section-label">03 / Selected work</p>
              <div className="mt-5 flex items-end justify-between gap-8">
                <h2 className="text-5xl font-medium tracking-[-0.055em] md:text-8xl">Built for the real world.</h2>
                <p className="hidden max-w-md text-right text-white/48 lg:block">Production platforms, AI research and mobile systems. Scroll horizontally through the featured work.</p>
              </div>
            </div>
            <div ref={projectTrack} className="project-track flex w-max gap-5 px-5 md:px-10">
              {featuredProjects.map((project) => (
                <Link key={project.name} href={`/projects/${project.slug}`} className="project-card group flex h-[660px] w-[88vw] max-w-[690px] shrink-0 flex-col rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06] md:p-7">
                  <div className="mb-6 flex items-start justify-between"><span className="text-sm text-cyan-300">{project.index}</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45">{project.type}</span></div>
                  <ProjectVisual src={project.visual} name={project.name} href={project.href} priority />
                  <div className="mt-7 flex flex-1 flex-col justify-between">
                    <div><h3 className="text-4xl font-medium tracking-[-0.05em] md:text-5xl">{project.name}</h3><p className="mt-4 max-w-xl leading-7 text-white/58">{project.short}</p></div>
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-sm"><span className="text-white/45">View case study</span><span className="transition-transform group-hover:translate-x-1">↗</span></div>
                  </div>
                </Link>
              ))}
              <Link href="/projects" className="project-card group flex h-[660px] w-[70vw] max-w-[440px] shrink-0 flex-col items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-white/[0.02] p-10 text-center hover:bg-white/[0.04]">
                <span className="text-sm uppercase tracking-[0.22em] text-cyan-300">More work</span>
                <span className="mt-5 text-4xl font-medium tracking-[-0.04em]">View all projects</span>
                <span className="mt-8 text-3xl transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section id="research" className="reveal-section px-5 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1500px]">
            <p className="reveal-item section-label">04 / Research</p>
            <div className="mt-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
              <div className="reveal-item"><p className="text-sm uppercase tracking-[0.22em] text-white/35">MSc Artificial Intelligence · Distinction</p><h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.045em] md:text-6xl">Real-time driver behaviour monitoring.</h2><p className="mt-7 max-w-xl leading-8 text-white/58">Deep-learning research classifying normal, aggressive, distracted and drowsy driving behaviours from monocular RGB video, with emphasis on temporal modelling, evaluation and efficient real-time inference.</p><Link href="/projects/driver-monitoring" className="mt-8 inline-flex text-sm font-semibold text-cyan-300">Read the research case study →</Link></div>
              <div className="reveal-item research-flow rounded-[2rem] border border-white/10 p-6 md:p-10">
                {["Live RGB video", "Frame sampling & preprocessing", "MobileNetV2 features", "BiLSTM / Transformer / Temporal CNN", "Smoothing & behaviour prediction"].map((step, i) => <div key={step} className="research-step flex items-center gap-5 border-b border-white/10 py-5 last:border-0"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-black">{String(i + 1).padStart(2, "0")}</span><span className="text-lg md:text-xl">{step}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="reveal-section border-y border-white/10 px-5 py-28 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1500px]">
            <p className="reveal-item section-label">05 / Skills</p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {skills.map((group) => <article key={group.title} className="reveal-item skill-card rounded-3xl border border-white/10 p-7 md:p-9"><h3 className="text-2xl font-medium tracking-[-0.03em]">{group.title}</h3><div className="mt-6 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/58 transition hover:border-cyan-300/40 hover:text-white">{item}</span>)}</div></article>)}
            </div>
          </div>
        </section>

        <section className="reveal-section px-5 py-28 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1500px]">
            <p className="reveal-item section-label">06 / Education</p>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="reveal-item rounded-[2rem] border border-white/10 p-7 md:p-10"><span className="text-sm text-cyan-300">2024 — 2025</span><h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">MSc Artificial Intelligence — Distinction</h3><p className="mt-3 text-white/50">London Metropolitan University · UK</p><p className="mt-7 max-w-2xl leading-7 text-white/58">Dissertation: Deep Learning-Based Driver Monitoring System for Real-Time Detection of Aggressive, Drowsy, Distracted and Normal Driving Behaviours.</p></article>
              <article className="reveal-item rounded-[2rem] border border-white/10 p-7 md:p-10"><span className="text-sm text-cyan-300">Completed 2019</span><h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">Bachelor&apos;s Degree in Computer Engineering</h3><p className="mt-3 text-white/50">Kantipur Engineering College · Nepal</p><p className="mt-7 max-w-2xl leading-7 text-white/58">Engineering foundation spanning programming, computing systems and software development, followed by extensive professional software-engineering experience.</p></article>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden border-t border-white/10 px-5 py-32 md:px-10 md:py-48">
          <div className="absolute inset-x-0 bottom-0 mx-auto h-72 max-w-5xl rounded-full bg-cyan-400/10 blur-[120px]" />
          <div className="relative mx-auto max-w-[1500px] text-center">
            <p className="section-label">07 / Contact</p>
            <h2 className="mx-auto mt-7 max-w-5xl text-5xl font-medium leading-[.98] tracking-[-0.06em] md:text-8xl">Building something ambitious?</h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/55">I&apos;m interested in software engineering, AI/ML engineering, applied AI and research-driven product opportunities.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3"><a className="primary-btn" href={`mailto:${profile.email}`}>Email me</a><a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="secondary-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
