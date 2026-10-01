"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/portfolio";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header nav-reveal fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="glass-panel mx-auto flex max-w-[1500px] items-center justify-between rounded-full px-4 py-2.5 md:px-5">
        <Link href="/" className="group flex items-center gap-3" aria-label="Deepak Bhattarai home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white font-black text-black transition-transform group-hover:rotate-6">DB</span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:block">Deepak Bhattarai</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-white/62 lg:flex">
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#research">Research</Link>
          <Link href="/#skills">Skills</Link>
        </div>

        <div className="flex items-center gap-2">
          <a href={profile.cv} className="hidden rounded-full border border-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70 transition hover:border-white/30 hover:text-white sm:inline-flex" download>
            CV
          </a>
          <a href={`mailto:${profile.email}`} className="contact-cta inline-flex min-w-[92px] items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold transition hover:scale-[1.02] hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">
            Let&apos;s talk
          </a>
          <button onClick={() => setOpen((v) => !v)} className="grid h-9 w-9 place-items-center rounded-full border border-white/12 lg:hidden" aria-expanded={open} aria-label="Toggle navigation">
            <span className="text-lg">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-panel mx-auto mt-2 max-w-[1500px] rounded-3xl p-5 lg:hidden">
          <div className="grid gap-1 text-lg">
            {[
              ["About", "/#about"],
              ["Experience", "/#experience"],
              ["Projects", "/#projects"],
              ["Research", "/#research"],
              ["Skills", "/#skills"],
            ].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-white/75 hover:bg-white/[0.05] hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
