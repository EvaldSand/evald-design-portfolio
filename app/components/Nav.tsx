import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-[var(--border)]">
      <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-[var(--foreground)] hover:opacity-70 transition-opacity"
        >
          Evald Sand
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/work/hotel-upsells"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
