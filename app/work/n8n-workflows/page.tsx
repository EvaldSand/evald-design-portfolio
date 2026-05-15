import Link from "next/link";

export const metadata = {
  title: "N8N Workflow Automations — Evald Sand",
  description:
    "Two automations that shifted people from data entry to data review.",
};

export default function N8NWorkflowsPage() {
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
          N8N workflow automations
        </h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-xl">
          Not every automation needs to be complex. Sometimes the right question
          is: what&apos;s the part of this job that a person shouldn&apos;t be
          doing?
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {[
            "Workflow Automation",
            "N8N",
            "HubSpot",
            "Stripe",
            "Google Sheets",
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
        {/* Workflow 1 */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            HubSpot to Google Sheets: monthly email reporting
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              An agency was doing monthly reviews of their HubSpot email
              performance. One person&apos;s job, every month, was to go into
              HubSpot, find the right data, and copy it into a Google Sheets
              document row by row. Then someone else would do the analysis. The
              analysis meeting kept getting delayed because the data prep was
              slow.
            </p>
            <p>
              The actual work — the analysis — was being blocked by mechanical
              data entry. This is a pattern I&apos;ve seen a few times: skilled
              people spending time on tasks that don&apos;t require skill,
              because no one set up the plumbing.
            </p>
            <p>
              I built an n8n workflow to handle that plumbing. The new process:
              go into HubSpot, generate a report for the right period, drop it
              into the workflow, get back a finalized Google Sheet. The
              copy-paste is gone. What changed is where the human&apos;s
              attention goes — from moving data to reading it.
            </p>
          </div>
        </section>

        <div className="my-6">
          <img
            src="/images/n8n-workflows/Hubspot Data to Google Sheets N8N workflow.png"
            alt="HubSpot to Google Sheets n8n workflow"
            className="w-full rounded border border-[var(--border)]"
          />
        </div>

        <section>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              The person still does the analysis. The workflow just handles the
              part that shouldn&apos;t require a person.
            </p>
          </div>
        </section>

        {/* Workflow 2 */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">
            Email attribution: which newsletter converts subscribers to
            customers?
          </h2>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              A company using ConvertKit (now Kit) for their newsletter wanted
              to know which specific email was converting subscribers into paying
              customers. ConvertKit attaches UTM parameters to email links. The
              problem was those UTMs had nowhere to go after the click — there
              was no connection between &quot;someone clicked this email
              link&quot; and &quot;someone became a paying customer.&quot;
            </p>
            <p>
              They had some of the data. They just couldn&apos;t read it. You
              can&apos;t optimize a newsletter you can&apos;t measure, and the
              UTMs were sitting there unused.
            </p>
            <p>
              I built a test landing page using Lovable (a no-code builder that
              generates a working app from a prompt) that captured UTM parameters
              from the URL. When someone landed on the page from an email link
              and made a purchase, those UTMs were attached to the Stripe
              checkout session as metadata. An n8n workflow then listened to
              Stripe webhooks, pulled the UTM data from each payment, and pushed
              it to Google Sheets — a report sortable by campaign, by newsletter
              edition, by send date.
            </p>
          </div>
        </section>

        <div className="my-6">
          <img
            src="/images/n8n-workflows/Lovable Test Page.png"
            alt="Test landing page built with Lovable"
            className="w-full rounded border border-[var(--border)]"
          />
          <p className="text-sm text-[var(--muted)] mt-2">
            The test landing page, built in Lovable.
          </p>
        </div>
        <div className="my-6">
          <img
            src="/images/n8n-workflows/Stripe Checkout to Google Sheet Info.png"
            alt="Stripe to Google Sheets n8n workflow"
            className="w-full rounded border border-[var(--border)]"
          />
        </div>

        <section>
          <div className="space-y-3 text-[var(--foreground)]">
            <p>
              The test worked. UTM data flowed through, the report was
              generating correctly in the test environment. I don&apos;t know if
              this was ever deployed to production — the company went quiet after
              the test phase and I never got confirmation either way. The
              technical approach is sound. Whether they ran with it is a
              different question.
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
              Both of these came from the same observation: someone doing
              mechanical work that was blocking more valuable work. The
              automation doesn&apos;t make the human unnecessary. It moves the
              human&apos;s attention to the part that actually needs human
              judgment.
            </p>
            <p>
              That&apos;s usually the right question to ask before building
              anything: not &quot;what can we automate?&quot; but &quot;what
              work shouldn&apos;t a person be doing?&quot;
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
        </div>
      </div>
    </article>
  );
}
