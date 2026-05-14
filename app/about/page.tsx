import Link from "next/link";

export const metadata = {
  title: "About — Evald Sand",
  description:
    "Evald Sand — designer and consultant applying design thinking to real products and workflows.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      <Link
        href="/"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-10 inline-block"
      >
        ← Back
      </Link>

      <header className="mb-12 pb-10 border-b border-[var(--border)]">
        <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight leading-snug">
          Evald Sand
        </h1>
      </header>

      <div className="space-y-6 text-sm leading-relaxed text-[var(--foreground)] max-w-xl">
        <p>
          I came up in hospitality. Eight years working front desk and
          operations at hotels — which is a design school nobody talks about.
          You spend your days solving problems in real time, with real people,
          where the cost of a bad decision is immediate and visible. That
          instinct never left.
        </p>
        <p>
          At some point I started building the tools my team needed rather than
          waiting for someone else to build them. A rate code lookup app at
          reception during COVID. A shift handover process that didn&apos;t rely on
          memory. Small things. But they taught me that the best solutions come
          from understanding what the person actually does before suggesting
          anything.
        </p>
        <p>
          That&apos;s still the frame I bring to everything. Before you build the
          agent, have you talked to the person who&apos;s supposed to use it? Before
          you ship the feature, have you watched someone try to use it? The
          design thinking comes first. The tools come second.
        </p>
        <p>
          I&apos;m based in the Netherlands. I consult independently on AI and
          workflow design — helping service businesses understand where
          automation actually helps and where it gets in the way. I build
          things on the side because building is how I learn.
        </p>
        <p>
          The two case studies on this site are the clearest examples I have of
          how I work: start with the friction, design for the real user, ship
          something that gets used.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--border)]">
        <p className="text-sm text-[var(--muted)] mb-4">Get in touch</p>
        <div className="flex flex-col gap-2">
          <a
            href="https://www.linkedin.com/in/evald-sand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-70 transition-opacity"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </div>
  );
}
