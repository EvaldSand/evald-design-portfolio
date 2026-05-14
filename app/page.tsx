import Link from "next/link";

const caseStudies = [
  {
    slug: "hotel-upsells",
    title: "Hotel Upsells App",
    year: "2024",
    tags: ["Product Design", "Multi-role UX", "Shipped"],
    summary:
      "A full upsell workflow for hotel operations — four roles, one coherent system. Designed and shipped from scratch.",
  },
  {
    slug: "powerpages",
    title: "PowerPages Rate Code App",
    year: "2020",
    tags: ["Problem Solving", "Internal Tool", "Origin Story"],
    summary:
      "Built during the first COVID lockdown at hotel reception. The team couldn't keep up with rate code lookups. So I fixed it.",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-16 pb-14 border-b border-[var(--border)]">
        <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
          Design &amp; Workflow
        </p>
        <h1 className="text-3xl font-semibold tracking-tight leading-snug mb-5">
          I design things that people actually use.
        </h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-xl">
          Hospitality background, UX training, and a practitioner&apos;s
          instinct: understand the real problem first, then build. The work
          below shows how I think — from reception desk to shipped product.
        </p>
      </section>

      {/* Case Studies */}
      <section className="py-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-8">
          Selected Work
        </h2>
        <div className="flex flex-col">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group block py-6 border-b border-[var(--border)] last:border-b-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-medium group-hover:opacity-70 transition-opacity">
                      {cs.title}
                    </h3>
                    <span className="text-xs text-[var(--muted)]">
                      {cs.year}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                    {cs.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[var(--muted)] group-hover:translate-x-1 transition-transform mt-0.5 text-sm">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
