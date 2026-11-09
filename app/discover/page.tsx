import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import {
  branches,
  concepts,
  connections,
  getTraditionName,
  primaryTexts,
  traditions,
} from "@/lib/content";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Discover",
  description:
    "Connections across traditions, a primary-text reading list, and alternative entry points into the academy.",
};

export default function DiscoverPage() {
  return (
    <div className="container-editorial">
      <PageHeader
        eyebrow="Discover"
        title="Ideas rarely stay inside their traditions"
        intro="Comparisons can illuminate or distort. Each connection below states what resonates, what differs, and what the comparison cannot support."
      />

      <section className="py-14">
        <SectionHeading
          label="Connections"
          title="Philosophical comparisons, made carefully"
          description="These are arguments about resemblance, not decorative juxtapositions. Read the caveats."
        />
        <div className="mt-8 space-y-12">
          {connections.map((connection) => (
            <article key={connection.slug} className="border-t border-line pt-7">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
                <div>
                  <p className="label">
                    {connection.left.label} · {connection.right.label}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl leading-tight text-ink">
                    {connection.title}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link href={connection.left.href} className="chip">
                      {connection.left.label}
                    </Link>
                    <Link href={connection.right.href} className="chip">
                      {connection.right.label}
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="font-serif text-lg leading-relaxed text-ink-soft">
                    {connection.summary}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="label label-green">Resonance</p>
                      <ul className="mt-3 space-y-2.5">
                        {connection.resonance.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 font-sans text-sm leading-relaxed text-ink-soft"
                          >
                            <span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="label label-burgundy">Difference</p>
                      <ul className="mt-3 space-y-2.5">
                        {connection.difference.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 font-sans text-sm leading-relaxed text-ink-soft"
                          >
                            <span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-burgundy/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-l-2 border-line-strong pl-4">
                    <p className="label">Caveat</p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                      {connection.caveat}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {connection.relatedLessons.map((lessonSlug) => (
                      <Link
                        key={lessonSlug}
                        href={routes.lesson(lessonSlug)}
                        className="chip"
                      >
                        Related lesson
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="container-editorial py-14">
          <SectionHeading
            label="Primary texts"
            title="A reading list, not a canon"
            description="Public-domain editions and reference works for readers who want to go beyond the lessons. Links open external sites."
          />
          <div className="mt-8 grid gap-x-10 md:grid-cols-2">
            {primaryTexts.map((text) => (
              <div key={text.slug} className="border-t border-line py-5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="label">
                    {text.author} · {text.date}
                  </p>
                  {text.tradition ? (
                    <Link
                      href={routes.tradition(text.tradition)}
                      className="font-sans text-[0.65rem] uppercase tracking-[0.12em] text-muted hover:text-green"
                    >
                      {getTraditionName(text.tradition)}
                    </Link>
                  ) : null}
                </div>
                <h3 className="mt-1.5 font-serif text-xl text-ink">{text.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                  {text.note}
                </p>
                {text.href ? (
                  <a
                    href={text.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.12em] text-green hover:text-green-deep"
                  >
                    Open text
                    <ArrowUpRight className="h-3 w-3" strokeWidth={1.8} />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <SectionHeading
          label="Alternative entries"
          title="Not sure where to begin?"
          description="Enter through a branch, a tradition, or a concept rather than a path."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div>
            <p className="label">Branches</p>
            <ul className="mt-3 space-y-2">
              {branches.slice(0, 6).map((branch) => (
                <li key={branch.slug}>
                  <Link
                    href={routes.branch(branch.slug)}
                    className="font-serif text-lg text-ink hover:text-green"
                  >
                    {branch.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Traditions</p>
            <ul className="mt-3 space-y-2">
              {traditions.slice(0, 6).map((tradition) => (
                <li key={tradition.slug}>
                  <Link
                    href={routes.tradition(tradition.slug)}
                    className="font-serif text-lg text-ink hover:text-green"
                  >
                    {tradition.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Concepts</p>
            <ul className="mt-3 space-y-2">
              {concepts.slice(0, 6).map((concept) => (
                <li key={concept.slug}>
                  <Link
                    href={routes.concept(concept.slug)}
                    className="font-serif text-lg text-ink hover:text-green"
                  >
                    {concept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
