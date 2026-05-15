import Link from "next/link";

export const metadata = {
  title: "Hotel Upsells App — Evald Sand",
  description:
    "Case study: building a multi-role upsell workflow for hotel operations, from first sketch to shipped product.",
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
          Room upgrades, late checkouts, F&B add-ons — hotels have upsell
          revenue sitting on the table. Tracking it was another story. I built
          the app to close that gap.
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

      {/* Hero image */}
      <div className="mb-12">
        <img
          src="/images/hotel-upsells/screenshot-1.png"
          alt="Hotel front desk — the starting point for every upsell conversation"
          className="w-full rounded border border-[var(--border)]"
        />
      </div>

      {/* Body */}
      <div className="space-y-12 text-sm leading-relaxed">
        {/* Context */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Context
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              Upsell requests used to travel through the hotel on an Excel sheet.
              An agent would fill it in, then pass it up a chain: supervisor,
              front desk manager, accounting, rooms director, director of
              finance. If any piece of information was wrong at any step, the
              whole sheet came back to the beginning.
            </p>
            <p>
              Batching everything into one document meant one person&apos;s mistake
              held up everyone else&apos;s approvals. Commissions were slow because
              payouts waited for the full reconciliation at month end. Finance
              had no live view — just a spreadsheet that arrived after the fact.
              Digital submission fixes all of this: each upsell moves through
              the chain on its own, approvals happen in real time, and the
              finance view is always current.
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
              The breakdown happens at the handoff. The clerk who submits the
              request isn&apos;t the person who approves it. The approver isn&apos;t
              the person who reconciles it. You get three people, each with a
              slightly different version of what was agreed, and no single place
              where all three versions live.
            </p>
            <p>
              A shared form or spreadsheet gets you data in one place, but it
              doesn&apos;t give anyone the right view of that data. A form built for
              a clerk doesn&apos;t work for an approver mid-shift. A spreadsheet
              that works for finance is useless at the front desk. The same
              transaction needs to be shown differently to each person who
              touches it.
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
              I mapped out four roles before writing a line of code: Clerk,
              Approver, Finance Director, Admin. Each has a genuinely different
              mental model of the same transaction. The clerk is thinking about
              the guest in front of them. The approver is thinking about room
              availability. Finance is thinking about the revenue line.
            </p>
            <p>
              The design challenge was not just access control. The interfaces
              had to feel different in a way that matched how each person
              actually works. On the technical side: Clerk for authentication
              with session-based role switching, Convex as the real-time
              backend, Next.js and Tailwind for the frontend. Getting role
              switching stable without forcing a full re-auth on every navigation
              took a couple of attempts.
            </p>
          </div>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Outcome
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              Shipped. All 28 v1.0 tickets closed. The product is live at{" "}
              <a
                href="https://hotel-upsells.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                hotel-upsells.vercel.app
              </a>
              . You can log in with the demo credentials and switch between all
              four roles. The clerk view and the finance director view feel like
              different products, but they share the same data model and design
              system.
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
              The clerk flow was right on the first try. The approver flow took
              three iterations, and I should have seen that coming. The middle
              of a workflow is where the edge cases live: partial approvals,
              approvals with conditions attached, time-sensitive requests where
              the guest is checking out in an hour.
            </p>
            <p>
              None of those came up in the initial spec. They showed up when I
              was actually using the app. If I&apos;d spent an hour with a real
              approver before building, I think I would have caught most of them
              upfront. The approver experience is its own domain — I know the
              front desk side of it, not that side.
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
