import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-sm text-white/38 md:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 {profile.name}</span>
        <div className="flex gap-5">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
