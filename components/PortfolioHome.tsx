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

const heroTechnologies = [
  { name: "Python", src: "https://cdn.simpleicons.org/python" },
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript" },
  { name: "React", src: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "FastAPI", src: "https://cdn.simpleicons.org/fastapi" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql" },
  { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
  { name: "TensorFlow", src: "https://cdn.simpleicons.org/tensorflow" },
  { name: "OpenCV", src: "https://cdn.simpleicons.org/opencv" },
  { name: "Laravel", src: "https://cdn.simpleicons.org/laravel" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Flutter", src: "https://cdn.simpleicons.org/flutter" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "DigitalOcean", src: "https://cdn.simpleicons.org/digitalocean" },
];

function AnimatedHeroText({ text }: { text: string }) {
  return <span className="hero-gradient-line">{text}</span>;
}

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
          .from(".hero-word", {
            yPercent: 105,
            opacity: 0,
            stagger: 0.08,
            duration: 0.78,
            force3D: false,
            clearProps: "transform,opacity",
          }, "-=0.15")
          .from(".hero-copy", { y: 24, opacity: 0, duration: 0.6 }, "-=0.3")
          .from(".hero-action", { y: 14, opacity: 0, stagger: 0.06, duration: 0.45 }, "-=0.25")
          .from(".hero-tech-marquee", { y: 18, opacity: 0, duration: 0.55 }, "-=0.2");

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
        <section ref={hero} id="top" className="hero relative flex min-h-[88svh] overflow-hidden px-5 pb-0 pt-24 sm:min-h-[92svh] md:min-h-screen md:px-10 md:pt-28">
          <div className="hero-grid absolute inset-0 opacity-45" />
          <div className="hero-orb-a absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="hero-orb-b absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="relative z-10 mx-auto grid w-full max-w-[1500px] flex-1 grid-rows-[auto_1fr_auto]">
            <div className="hero-kicker flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold tracking-[-0.02em] text-white/90 md:text-lg">{profile.name}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">{profile.location}</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Open to Software Engineering & Applied AI
              </span>
            </div>

            <div className="flex flex-col items-center justify-center py-6 text-center sm:py-8 md:py-14">
              <div className="w-full">
                <h1 className="overflow-hidden whitespace-nowrap text-[clamp(1.95rem,7vw,7.6rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                  <span className="hero-word inline-block">
                    <AnimatedHeroText text="SOFTWARE ENGINEER" />
                  </span>
                </h1>
                <h1 className="mt-2 overflow-hidden whitespace-nowrap text-[clamp(1.95rem,7vw,7.6rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
                  <span className="hero-word inline-block">
                    <AnimatedHeroText text="BUILDING AI SYSTEMS" />
                  </span>
                </h1>
              </div>

              <p className="hero-copy mt-5 max-w-3xl text-sm leading-6 text-white/52 md:mt-7 md:text-base">
                9+ years across web, mobile and backend engineering · MSc Artificial Intelligence with Distinction
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3 md:mt-6">
                <a className="hero-action primary-btn" href="#projects">View flagship work</a>
                <a className="hero-action secondary-btn" href={profile.cv} download>Download CV</a>
              </div>
            </div>

            <div className="hero-tech-marquee tech-marquee -mx-5 border-t border-white/10 py-3.5 md:-mx-10 md:py-5" aria-label="Core technologies">
              <div className="tech-marquee-track">
                {[0, 1].map((copy) => (
                  <div key={copy} className="tech-marquee-group" aria-hidden={copy === 1}>
                    {heroTechnologies.map((tech) => (
                      <div key={`${copy}-${tech.name}`} className="tech-logo-item">
                        <img src={tech.src} alt="" className="h-6 w-6 shrink-0 object-contain md:h-7 md:w-7" draggable={false} />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="reveal-section px-5 pb-20 pt-12 md:px-10 md:pb-24 md:pt-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="reveal-item section-label">01 / About</p>
            <div className="mt-8 grid gap-12 lg:grid-cols-[1.35fr_.65fr]">
              <h2 className="reveal-item max-w-5xl text-4xl font-medium leading-[1.07] tracking-[-0.045em] md:text-7xl">9+ years building production software. Now applying that engineering depth to intelligent systems.</h2>
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

        <section id="experience" className="reveal-section border-y border-white/10 px-5 py-20 md:px-10 md:py-24">
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

        <section id="projects" className="projects-pin min-h-screen overflow-hidden bg-[#06080b] py-16 lg:flex lg:items-center lg:py-20">
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
                <Link key={project.name} href={`/projects/${project.slug}`} className="project-card group flex h-auto min-h-0 w-[88vw] max-w-[690px] shrink-0 flex-col rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06] md:p-7 lg:h-[660px]">
                  <div className="mb-6 flex items-start justify-between"><span className="text-sm text-cyan-300">{project.index}</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45">{project.type}</span></div>
                  <ProjectVisual src={project.visual} name={project.name} href={project.href} priority />
                  <div className="mt-7 flex flex-1 flex-col justify-between">
                    <div><h3 className="text-4xl font-medium tracking-[-0.05em] md:text-5xl">{project.name}</h3><p className="mt-4 max-w-xl leading-7 text-white/58">{project.short}</p></div>
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-sm"><span className="text-white/45">View case study</span><span className="transition-transform group-hover:translate-x-1">↗</span></div>
                  </div>
                </Link>
              ))}
              <Link href="/projects" className="project-card group flex h-auto min-h-[320px] w-[70vw] max-w-[440px] shrink-0 flex-col items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-white/[0.02] p-10 text-center hover:bg-white/[0.04] lg:h-[660px]">
                <span className="text-sm uppercase tracking-[0.22em] text-cyan-300">More work</span>
                <span className="mt-5 text-4xl font-medium tracking-[-0.04em]">View all projects</span>
                <span className="mt-8 text-3xl transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section id="research" className="reveal-section px-5 py-20 md:px-10 md:py-24">
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

        <section id="skills" className="reveal-section border-y border-white/10 px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <p className="reveal-item section-label">05 / Skills</p>
            <div className="mt-6 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end">
              <h2 className="reveal-item max-w-3xl text-4xl font-medium tracking-[-0.045em] md:text-6xl">Engineering first. AI where it adds real value.</h2>
              <p className="reveal-item max-w-xl leading-7 text-white/48">My strongest working stack is Python/TypeScript, modern web and API engineering, PostgreSQL and applied AI/ML. Mobile and additional technologies extend that core.</p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {skills.map((group, index) => (
                <article
                  key={group.title}
                  className={`reveal-item skill-card rounded-3xl border p-7 md:p-9 ${index < 2 ? "border-cyan-300/20 bg-cyan-300/[0.025]" : "border-white/10"}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-medium tracking-[-0.03em]">{group.title}</h3>
                    {index < 2 && <span className="rounded-full border border-cyan-300/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300">Primary</span>}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/58 transition hover:border-cyan-300/40 hover:text-white">{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal-section px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <p className="reveal-item section-label">06 / Education</p>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="reveal-item rounded-[2rem] border border-white/10 p-7 md:p-10"><span className="text-sm text-cyan-300">2024 — 2025</span><h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">MSc Artificial Intelligence — Distinction</h3><p className="mt-3 text-white/50">London Metropolitan University · UK</p><p className="mt-7 max-w-2xl leading-7 text-white/58">Dissertation: Deep Learning-Based Driver Monitoring System for Real-Time Detection of Aggressive, Drowsy, Distracted and Normal Driving Behaviours.</p></article>
              <article className="reveal-item rounded-[2rem] border border-white/10 p-7 md:p-10"><span className="text-sm text-cyan-300">Completed 2019</span><h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">Bachelor&apos;s Degree in Computer Engineering</h3><p className="mt-3 text-white/50">Kantipur Engineering College · Nepal</p><p className="mt-7 max-w-2xl leading-7 text-white/58">Engineering foundation spanning programming, computing systems and software development, followed by extensive professional software-engineering experience.</p></article>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden border-t border-white/10 px-5 py-24 md:px-10 md:py-32">
          <div className="absolute inset-x-0 bottom-0 mx-auto h-72 max-w-5xl rounded-full bg-cyan-400/10 blur-[120px]" />
          <div className="relative mx-auto max-w-[1500px] text-center">
            <p className="section-label">07 / Contact</p>
            <h2 className="mx-auto mt-7 max-w-5xl text-5xl font-medium leading-[.98] tracking-[-0.06em] md:text-8xl">Need a software engineer who can build AI into real products?</h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/55">Open to Software Engineering, Applied AI/ML and research-driven product opportunities where strong engineering and intelligent systems meet.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3"><a className="primary-btn" href={`mailto:${profile.email}`}>Email me</a><a className="secondary-btn" href={profile.cv} download>Download CV</a><a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="secondary-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
