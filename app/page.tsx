import Link from "next/link";

type WorkItem = {
  slug: string | null;
  title: string;
  year: string;
  tags: string[];
  summary: string;
  comingSoon?: boolean;
};

const creativeWork: WorkItem[] = [
  {
    slug: "hotel-upsells",
    title: "Hotel Upsells App",
    year: "2024",
    tags: ["Product Design", "Multi-role UX", "Shipped"],
    summary:
      "A full upsell workflow for hotel operations — four roles, one coherent system.",
  },
  {
    slug: null,
    title: "Creative Hackathon",
    year: "2025",
    tags: ["Creative", "Coming Soon"],
    summary: "Happening this Saturday. More once it's done.",
    comingSoon: true,
  },
];

const technicalWork: WorkItem[] = [
  {
    slug: "n8n-workflows",
    title: "N8N Workflow Automations",
    year: "2024",
    tags: ["Workflow Automation", "N8N", "HubSpot", "Stripe"],
    summary:
      "Two automations that shifted people from data entry to data review.",
  },
  {
    slug: "powerpages",
    title: "PowerPages Rate Code App",
    year: "2020",
    tags: ["Internal Tool", "Microsoft PowerPages", "Origin Story"],
    summary:
      "Built during COVID lockdown at hotel reception. Rates were changing fast, the spreadsheet couldn't keep up.",
  },
];

function WorkCard({ item }: { item: WorkItem }) {
  const cardContent = (
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-base font-medium group-hover:opacity-70 transition-opacity">
            {item.title}
          </h3>
          <span className="text-xs text-[var(--muted)]">{item.year}</span>
        </div>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
          {item.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-0.5 text-sm text-[var(--muted)]">
        {item.comingSoon ? (
          <span className="text-xs uppercase tracking-widest opacity-60">
            soon
          </span>
        ) : (
          <span className="group-hover:translate-x-1 transition-transform inline-block">
            &rarr;
          </span>
        )}
      </div>
    </div>
  );

  if (item.comingSoon || !item.slug) {
    return (
      <div className="block py-6 border-b border-[var(--border)] last:border-b-0 opacity-50">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={`/work/${item.slug}`}
      className="group block py-6 border-b border-[var(--border)] last:border-b-0"
    >
      {cardContent}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Intro */}
      <section className="pt-16 pb-14 border-b border-[var(--border)]">
        <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-8">
          Design &amp; Workflow
        </p>
        <div className="space-y-5 text-base leading-relaxed max-w-xl">
          <p>
            I grew up fascinated by technology without knowing what to do with
            it. So I took a detour. Eight years at hotel reception, learning
            what it means to actually be of service to someone standing in front
            of you.
          </p>
          <p>
            Somewhere around year four I noticed that a great hotel stay and
            well-designed software share the same ingredient: someone thought
            about the person on the other end. I started calling it visual
            hospitality. Turns out it has a proper name: UX.
          </p>
          <p>
            When AI tools arrived that could help me build, not just sketch, I
            started shipping. First small experiments, then things other people
            actually used. The PowerPages app came first, built during COVID
            lockdown when the spreadsheet at my reception desk couldn't keep up.
            More followed.
          </p>
          <p className="text-[var(--muted)]">Still building.</p>
        </div>
      </section>

      {/* Work Grid */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {/* Creative column */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-6">
              Creative
            </h2>
            <div className="flex flex-col">
              {creativeWork.map((item) => (
                <WorkCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          {/* Technical column */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-6">
              Technical
            </h2>
            <div className="flex flex-col">
              {technicalWork.map((item) => (
                <WorkCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
