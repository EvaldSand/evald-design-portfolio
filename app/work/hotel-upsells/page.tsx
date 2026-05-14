import Link from "next/link";

export const metadata = {
  title: "Hotel Upsells App — Evald Sand",
  description:
    "Case study: designing a multi-role upsell workflow for hotel operations, from first sketch to shipped product.",
};

export default function HotelUpsellsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-14">
      {/* Back */}
      <Link
        href="/"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-10 inline-block"
      >
        ← Back
      </Link>

      {/* Header */}
      <header className="mb-12 pb-10 border-b border-[var(--border)]">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs uppercase tracking-widest text-[var(--muted)]">
            Case Study
          </span>
          <span className="text-xs text-[var(--muted)]">2024</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight leading-snug mb-4">
          Hotel Upsells App
        </h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-xl">
          A full upsell workflow for hotel operations. Four roles, real money
          moving through the system, one product that had to work for everyone
          from the front desk to the finance director.
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {["Product Design", "Multi-role UX", "Next.js", "Shipped"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </header>

      {/* Body */}
      <div className="space-y-12 text-sm leading-relaxed">
        {/* Context */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Context
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              Hotel upsells — room upgrades, late checkouts, early check-ins —
              are a real revenue line. In most hotels they&apos;re also a mess.
              The front desk offers something, writes it on a sticky note, and
              three days later finance is trying to reconcile charges that
              nobody documented properly.
            </p>
            <p>
              I built this as a personal project to solve that problem end to
              end. Not a prototype. A real product with real roles, real
              permissions, and a workflow that mirrors how hotels actually
              operate.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Problem
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              The real friction wasn&apos;t the upsell itself. It was the
              handoff. The clerk who offers the upgrade isn&apos;t the same
              person who approves it. The approver isn&apos;t the same person
              who reconciles it with finance. That three-step chain breaks down
              constantly — and when it breaks, the hotel either loses the
              revenue or the guest gets charged incorrectly.
            </p>
            <p>
              Most tools try to solve this with a single form. That&apos;s the
              wrong frame. You need a workflow, not a form.
            </p>
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Process
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              I started by mapping the roles. There are four people in the
              chain: the Clerk who submits an upsell request, the Approver who
              reviews and accepts or rejects it, the Finance Director who tracks
              what&apos;s been charged, and the Admin who manages the system. Each
              one needs a different view, different permissions, and a different
              set of actions.
            </p>
            <p>
              The design challenge was keeping these four surfaces coherent.
              Same design language, different information hierarchy. A clerk
              doesn&apos;t need to see revenue summaries. A finance director
              doesn&apos;t need to see the guest request form. Getting that
              separation right — without building four completely separate apps
              — was most of the work.
            </p>
            <p>
              I used Clerk for authentication with role-based access, Convex as
              the backend (real-time by default, which matters when an approver
              is acting on a request the clerk just submitted), and Next.js with
              Tailwind for the frontend. The role switching is session-based so
              you can demo all four views without logging in and out.
            </p>
          </div>
        </section>

        {/* Image placeholder */}
        <div className="bg-[var(--border)] rounded-lg h-56 flex items-center justify-center">
          <span className="text-sm text-[var(--muted)]">
            Screenshot — clerk submission view
          </span>
        </div>
        <div className="bg-[var(--border)] rounded-lg h-56 flex items-center justify-center">
          <span className="text-sm text-[var(--muted)]">
            Screenshot — approver review view
          </span>
        </div>

        {/* Outcome */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Outcome
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              Shipped. All 28 tickets from v1.0 closed. The product is live at{" "}
              <a
                href="https://hotel-upsells.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                hotel-upsells.vercel.app
              </a>
              . You can log in with the demo credentials and switch between all
              four roles.
            </p>
            <p>
              The thing I&apos;m most satisfied with: the clerk and finance
              director views feel like different products, but they&apos;re sharing
              the same data model and the same design system. That coherence was
              a deliberate choice, and it holds.
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Reflection
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              If I were starting over, I&apos;d spend more time on the approver
              flow before building. The approval screen went through three
              iterations because I kept discovering edge cases — partial
              approvals, approvals with notes, time-sensitive requests — that I
              hadn&apos;t accounted for upfront. The clerk flow was right first time.
              The lesson is that the middle of a workflow is always harder than
              the ends.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            ← All work
          </Link>
          <Link
            href="/work/powerpages"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Next: PowerPages →
          </Link>
        </div>
      </div>
    </article>
  );
}
