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
          Built at hotel reception during the first COVID lockdown. The team
          couldn&apos;t keep up with rate code lookups. So I built something to
          fix it — with no formal development background, on a Microsoft tool I
          had never used before.
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
              Spring 2020. The hotel was running on a skeleton crew. My team
              had gone from a full front desk operation to three people covering
              everything — check-ins, calls, reservations. Volume was low but
              complexity was high: rates were changing almost daily as the
              situation evolved, and every guest had a different rate code that
              needed to be looked up manually in a spreadsheet that was two
              versions behind.
            </p>
            <p>
              I was a reception supervisor. Not a developer. I had Microsoft
              365, some time, and a problem that was making the team slower than
              it needed to be.
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
              Rate codes are the internal shorthand hotels use to track pricing
              — corporate rates, leisure packages, loyalty tiers, promotional
              offers. Each one has conditions. Each one has a different price
              for different room types. And in 2020, the list was being updated
              faster than anyone could keep track of.
            </p>
            <p>
              The team was looking things up in a shared Excel file. The file
              had tabs, no search, and no clear owner. When rates changed, the
              file sometimes got updated. Sometimes it didn&apos;t. Mistakes made it
              to guests. That&apos;s a revenue problem and a trust problem at the same
              time.
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
              I found Microsoft PowerPages — a low-code tool in the 365 suite
              for building simple internal web apps on top of SharePoint data.
              I had never used it. But the problem was clear enough that the
              tool almost didn&apos;t matter: I needed a searchable front-end on top
              of a structured data source, with one person owning updates.
            </p>
            <p>
              The first version took a weekend. A search interface connected to
              a SharePoint list, styled to match the hotel&apos;s internal branding.
              I showed it to the team on Monday. They started using it the same
              day.
            </p>
            <p>
              The second version added filtering by rate type and a flag for
              recently updated codes — the ones most likely to catch someone
              out. That came from watching the team use v1 for a week. One
              person kept filtering by hand because she didn&apos;t trust the older
              entries. So I gave her a way to sort by update date.
            </p>
          </div>
        </section>

        {/* Image placeholder */}
        <div className="bg-[var(--border)] rounded-lg h-56 flex items-center justify-center">
          <span className="text-sm text-[var(--muted)]">
            Screenshot — rate code search interface
          </span>
        </div>

        {/* Outcome */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Outcome
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              The team stopped using the spreadsheet. Not because I told them
              to — because the app was faster. His team picked it up after
              watching a quick Loom once. Rate-related errors at check-in
              dropped noticeably over the following month.
            </p>
            <p>
              More importantly: I learned something that shaped everything I&apos;ve
              built since. The right tool for a problem is the one you can
              actually build with the access you have. And the right solution
              is one that the person using it trusts — which means it has to be
              accurate, fast, and honest about what it doesn&apos;t know.
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
              When I left that role, I handed it off — but without a clear
              owner, it degraded over time. The lesson I&apos;ve carried: building
              the interface is the easy part. Designing the maintenance habit
              around it is the harder design problem.
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
