export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-sm text-[var(--muted)]">Evald Sand</span>
        <a
          href="https://www.linkedin.com/in/evald-sand"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
