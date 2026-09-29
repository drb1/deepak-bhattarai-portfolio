import Image from "next/image";

export default function ProjectVisual({ src, name, priority = false }: { src: string; name: string; priority?: boolean }) {
  return (
    <div className="project-visual relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b0f14]">
      <Image src={src} alt={`${name} project visual`} width={1200} height={760} className="h-auto w-full" priority={priority} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.02]" />
    </div>
  );
}
