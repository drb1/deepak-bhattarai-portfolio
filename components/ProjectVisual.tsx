import Image from "next/image";

export default function ProjectVisual({ src, name, priority = false }: { src: string; name: string; priority?: boolean }) {
  return (
    <div className="project-visual relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b0f14]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-9 items-center gap-1.5 border-b border-white/[0.06] bg-black/20 px-4 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-white/25">Case study preview</span>
      </div>
      <Image
        src={src}
        alt={`${name} project visual`}
        width={1200}
        height={760}
        className="h-auto w-full pt-9 transition-transform duration-700 ease-out group-hover:scale-[1.018]"
        priority={priority}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.02]" />
    </div>
  );
}
