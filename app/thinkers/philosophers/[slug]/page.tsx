import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { SaveButton } from "@/components/save-button";
import { QuickNote } from "@/components/quick-note";
import { RecordVisit } from "@/components/record-visit";
import { ContentCard } from "@/components/content-card";
import {
  connections,
  getPhilosopher,
  getRelatedConcepts,
  getRelatedPhilosophers,
  getTraditionName,
} from "@/lib/content";
import { getLessonBySlug } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const philosopher = getPhilosopher(slug);
  if (!philosopher) return { title: "Philosopher not found" };
  return { title: philosopher.name, description: philosopher.summary };
}

export default async function PhilosopherPage({ params }: PageProps) {
  const { slug } = await params;
  const philosopher = getPhilosopher(slug);
  if (!philosopher) notFound();

  const concepts = getRelatedConcepts(philosopher.concepts);
  const relatedPhilosophers = getRelatedPhilosophers(philosopher.relatedPhilosophers);
  const lessons = philosopher.relatedLessons
    .map((lessonSlug) => getLessonBySlug(lessonSlug))
    .filter((lesson) => lesson !== null);
  const philosopherConnections = connections.filter(
    (connection) =>
      connection.left.href === routes.philosopher(philosopher.slug) ||
      connection.right.href === routes.philosopher(philosopher.slug),
  );

  return (
    <div className="container-editorial">
      <RecordVisit
        entityType="philosopher"
        entitySlug={philosopher.slug}
        entityTitle={philosopher.name}
        entityHref={routes.philosopher(philosopher.slug)}
      />
      <Breadcrumbs
        items={[
          { label: "Thinkers", href: routes.thinkers },
          { label: "Philosophers", href: routes.thinkers },
          { label: philosopher.name },
        ]}
      />
      <PageHeader
        eyebrow={`${philosopher.dates} · ${philosopher.era}`}
        title={philosopher.name}
        intro={philosopher.summary}
        meta={
          <div className="flex flex-wrap gap-2">
            {philosopher.traditions.map((traditionSlug) => (
              <Link
                key={traditionSlug}
                href={routes.tradition(traditionSlug)}
                className="chip"
              >
                {getTraditionName(traditionSlug)}
              </Link>
            ))}
          </div>
        }
      >
        <SaveButton
          entityType="philosopher"
          entitySlug={philosopher.slug}
          entityTitle={philosopher.name}
          entityHref={routes.philosopher(philosopher.slug)}
          label="Save thinker"
        />
      </PageHeader>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div>
          <section>
            <p className="label label-green">Life and context</p>
            <div className="mt-4 max-w-2xl space-y-4 font-serif text-lg leading-relaxed text-ink-soft">
              {philosopher.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {philosopher.context.length > 0 ? (
              <div className="mt-6 max-w-2xl border-l-2 border-line-strong pl-4">
                {philosopher.context.map((paragraph) => (
                  <p key={paragraph} className="font-sans text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
          </section>

          <section className="mt-12 border-t border-line pt-7">
            <p className="label">Central ideas</p>
            <div className="mt-5 space-y-6">
              {philosopher.ideas.map((idea, index) => (
                <div key={idea.title} className="grid gap-2 sm:grid-cols-[2rem_1fr] sm:gap-4">
                  <span className="font-sans text-xs tracking-[0.12em] text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-serif text-xl text-ink">{idea.title}</h2>
                    <p className="mt-1.5 font-sans text-sm leading-relaxed text-muted">
                      {idea.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-line pt-7">
            <p className="label">Works</p>
            <ul className="mt-4 max-w-2xl">
              {philosopher.works.map((work) => (
                <li key={work.title} className="border-b border-line py-3 last:border-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-serif text-lg text-ink">{work.title}</p>
                    {work.date ? (
                      <span className="font-sans text-xs text-muted">{work.date}</span>
                    ) : null}
                  </div>
                  {work.note ? (
                    <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
                      {work.note}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          {philosopher.criticisms.length > 0 ? (
            <section className="mt-12 border-t border-line pt-7">
              <p className="label">Criticisms and disputes</p>
              <div className="mt-5 space-y-5">
                {philosopher.criticisms.map((criticism) => (
                  <div key={criticism.title}>
                    <h2 className="font-serif text-xl text-ink">{criticism.title}</h2>
                    <p className="mt-1.5 font-sans text-sm leading-relaxed text-muted">
                      {criticism.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {philosopherConnections.length > 0 ? (
            <section className="mt-12 border-t border-line pt-7">
              <p className="label">Connections</p>
              <div className="mt-4 space-y-4">
                {philosopherConnections.map((connection) => (
                  <div key={connection.slug}>
                    <p className="font-serif text-lg text-ink">{connection.title}</p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
                      {connection.summary}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {lessons.length > 0 ? (
            <section className="mt-12">
              <p className="label">Related lessons</p>
              <div className="mt-3 grid gap-x-10 md:grid-cols-2">
                {lessons.map((lesson) => (
                  <ContentCard
                    key={lesson.frontmatter.slug}
                    href={routes.lesson(lesson.frontmatter.slug)}
                    label={`${lesson.frontmatter.difficulty} · ${lesson.readingTime} min`}
                    title={lesson.frontmatter.title}
                    description={lesson.frontmatter.description}
                  />
                ))}
              </div>
            </section>
          ) : null}

          {philosopher.furtherReading.length > 0 ? (
            <section className="mt-12 border-t border-line pt-7">
              <p className="label">Further reading</p>
              <ul className="mt-4 space-y-3">
                {philosopher.furtherReading.map((item) => (
                  <li key={`${item.label}-${item.href ?? ""}`} className="border-b border-line pb-3 last:border-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-serif text-lg text-ink">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.12em] text-green hover:text-green-deep"
                        >
                          Open
                          <ArrowUpRight className="h-3 w-3" strokeWidth={1.8} />
                        </a>
                      ) : null}
                    </div>
                    {item.author ? (
                      <p className="mt-1 font-sans text-xs text-muted">{item.author}</p>
                    ) : null}
                    {item.note ? (
                      <p className="mt-1 font-sans text-sm text-muted">{item.note}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-10">
            <QuickNote
              entityType="philosopher"
              entitySlug={philosopher.slug}
              entityTitle={philosopher.name}
              entityHref={routes.philosopher(philosopher.slug)}
            />
          </div>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="border border-line bg-surface p-5">
            <p className="label">At a glance</p>
            <dl className="mt-4 space-y-3 font-sans text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Dates</dt>
                <dd className="text-right text-ink">{philosopher.dates}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Era</dt>
                <dd className="text-right text-ink">{philosopher.era}</dd>
              </div>
            </dl>
          </div>

          {concepts.length > 0 ? (
            <div>
              <p className="label">Key concepts</p>
              <ul className="mt-3 space-y-2">
                {concepts.map((concept) => (
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
          ) : null}

          {relatedPhilosophers.length > 0 ? (
            <div>
              <p className="label">Related thinkers</p>
              <ul className="mt-3 space-y-2">
                {relatedPhilosophers.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={routes.philosopher(related.slug)}
                      className="font-serif text-lg text-ink hover:text-green"
                    >
                      {related.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
