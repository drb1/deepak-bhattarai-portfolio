import Image from "next/image";

export default function ProjectVisual({
  src,
  name,
  href,
  priority = false,
}: {
  src: string;
  name: string;
  href?: string;
  priority?: boolean;
}) {
  const domain = href ? new URL(href).hostname.replace(/^www\./, "") : null;
  const isSvg = src.toLowerCase().endsWith(".svg");
  const isScreenshot = src.toLowerCase().includes("-screenshot.");
  const artClass =
    "aspect-[1200/760] w-full object-cover pt-9 transition-transform duration-700 ease-out group-hover:scale-[1.018]";
  const screenshotClass =
    "block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.012]";

  return (
    <div className="project-visual relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b0f14]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-9 items-center gap-1.5 border-b border-white/[0.06] bg-black/70 px-4 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        {domain ? (
          <span className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,.55)]" />
            Live · {domain}
          </span>
        ) : (
          <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-white/25">Case study preview</span>
        )}
      </div>

      {isScreenshot ? (
        <div className="bg-white pt-9">
          <img
            src={src}
            alt={`${name} real project screenshot`}
            width={2048}
            height={960}
            className={screenshotClass}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      ) : isSvg ? (
        <img
          src={src}
          alt={`${name} project visual`}
          width={1200}
          height={760}
          className={artClass}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <Image
          src={src}
          alt={`${name} project visual`}
          width={1200}
          height={760}
          className={artClass}
          priority={priority}
        />
      )}

      {!isScreenshot && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.02]" />
      )}
    </div>
  );
}
