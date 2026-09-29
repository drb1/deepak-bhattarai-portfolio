"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const move = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX - 180}px, ${e.clientY - 180}px, 0)`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[360px] w-[360px] rounded-full bg-cyan-300/[0.045] blur-[90px] lg:block" aria-hidden="true" />;
}
