import Link from "next/link";

export const metadata = {
  title: "PowerPages Rate Code App — Evald Sand",
  description:
    "Case study: building a rate code lookup tool at hotel reception during the COVID-19 lockdown.",
};

export default function PowerPagesPage() {
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
          <span className="text-xs text-[var(--muted)]">2020</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight leading-snug mb-4">
          PowerPages Rate Code App
        </h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-xl">
          Built at hotel reception during the first COVID lockdown. Rates were
          changing fast, the team was growing, and rate knowledge lived in
          one person&apos;s head.
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {[
            "Internal Tool",
            "Microsoft PowerPages",
            "Problem Solving",
            "Origin Story",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
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
              Spring 2020. The hotel was running on a skeleton crew, three
              people covering what had been a full front desk operation.
              Check-ins, calls, reservations. All of it. Volume was low but
              complexity was high: rates were changing almost daily, and every
              guest had a different rate code that needed to be looked up.
            </p>
            <p>
              I was a reception supervisor. Not a developer.
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
              Rate codes are the internal shorthand hotels use to track pricing:
              corporate rates, leisure packages, loyalty tiers, promotional
              offers. Each one has conditions. Each one has a different price
              depending on room type.
            </p>
            <p>
              When the team was small, one person held all the rate knowledge
              and passing it on was easy. You could just ask. Then hiring picked
              up. New front desk agents needed to look up rates themselves, and
              there was no good way to do that without already knowing what to
              look for. The knowledge didn&apos;t scale.
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
              I built an Excel prototype first, just to test the concept. Type
              in a rate code, get back all the rate info and pricing thresholds.
              No tabs to navigate, no prior knowledge required. It worked. People
              started using it, which told me the problem was real.
            </p>

            <div className="my-6">
              <img
                src="/images/powerpages/Excel Prototype.png"
                alt="Excel prototype for rate code lookups"
                className="w-full rounded border border-[var(--border)]"
              />
              <p className="text-sm text-[var(--muted)] mt-2">
                My Excel prototype — the first test of the concept.
              </p>
            </div>

            <p>
              Once I knew it was worth building properly, I sketched it on
              paper. What does someone at the front desk actually need when a
              guest is standing in front of them? Find the code fast, confirm
              the price, move on. The wireframes settled the layout before I
              touched a single tool.
            </p>

            <div className="my-6">
              <img
                src="/images/powerpages/paper-wireframe-1.jpg"
                alt="Paper wireframe sketches for the rate code lookup interface"
                className="w-full rounded border border-[var(--border)]"
              />
              <p className="text-sm text-[var(--muted)] mt-2">
                Paper first, then build.
              </p>
            </div>

            <p>
              I rebuilt it in Microsoft PowerPages, a low-code tool in the 365
              suite for building internal web apps on top of SharePoint data.
              I had never used it. The first version took a weekend. A search
              interface connected to a SharePoint list, styled to match the
              hotel&apos;s internal branding. The team started using it the same
              day I showed them.
            </p>
            <p>
              The second version added filtering by rate type and a flag for
              recently updated codes. That came from watching a team member use
              v1 for a week. She kept filtering by hand because she didn&apos;t
              trust older entries. I gave her a way to sort by update date.
              Five minutes of work. It mattered because I had watched the
              problem happen.
            </p>

            <div className="my-6">
              <img
                src="/images/powerpages/Rate Search Window.png"
                alt="The finished rate code search interface built in PowerPages"
                className="w-full rounded border border-[var(--border)]"
              />
              <p className="text-sm text-[var(--muted)] mt-2">
                The finished search window.
              </p>
            </div>

            <div className="my-6">
              <img
                src="/images/powerpages/Rate Info Window.png"
                alt="Rate code detail view"
                className="w-full rounded border border-[var(--border)]"
              />
              <p className="text-sm text-[var(--muted)] mt-2">
                The detail view.
              </p>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Outcome
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              The team stopped using the spreadsheet. Not because anyone told
              them to. The app was just faster. A new hire could find the rate
              they needed without tracking down a supervisor.
            </p>
            <p>
              The information stopped living in one person&apos;s head. A new agent
              on their first shift could look up a rate themselves. That&apos;s what
              the tool actually did: it moved the knowledge out of informal
              mentorship and into something anyone could access.
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
              The data ownership problem was never fully solved. The app was
              only as good as the person keeping the SharePoint list updated.
              When I left that role I handed it off, but without a clear owner
              it degraded over time.
            </p>
            <p>
              Building the interface is the easy part. The harder problem is
              designing the maintenance habit around it. I built a good front
              door. The room behind it still needed tending.
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
            href="/work/hotel-upsells"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Next: Hotel Upsells →
          </Link>
        </div>
      </div>
    </article>
  );
}
