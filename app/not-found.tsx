import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="section-label">404</p>
        <h1 className="mt-5 text-6xl font-medium tracking-[-0.06em]">Page not found.</h1>
        <p className="mt-5 text-white/50">The page you requested does not exist.</p>
        <Link href="/" className="primary-btn mt-8 inline-flex">Back home</Link>
      </div>
    </main>
  );
}
