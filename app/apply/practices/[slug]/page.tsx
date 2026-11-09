import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { PracticeTracker } from "@/components/practice-tracker";
import { QuickNote } from "@/components/quick-note";
import { RecordVisit } from "@/components/record-visit";
import { ContentCard } from "@/components/content-card";
import {
  getConcept,
  getPhilosopher,
  getPractice,
} from "@/lib/content";
import { getLessonBySlug } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const sourceTypeLabels: Record<string, string> = {
  historical: "Historical practice",
  "modern-adaptation": "Modern adaptation",
  "editorial-interpretation": "Editorial interpretation",
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return { title: "Practice not found" };
  return { title: practice.title, description: practice.description };
}

export default async function PracticePage({ params }: PageProps) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();

  const lessons = practice.relatedLessons
    .map((lessonSlug) => getLessonBySlug(lessonSlug))
    .filter((lesson) => lesson !== null);
  const philosophers = practice.relatedPhilosophers
    .map((philosopherSlug) => getPhilosopher(philosopherSlug))
    .filter((philosopher) => philosopher !== null);
  const concepts = practice.relatedConcepts
    .map((conceptSlug) => getConcept(conceptSlug))
    .filter((concept) => concept !== null);

  return (
    <div className="container-editorial">
      <RecordVisit
        entityType="practice"
        entitySlug={practice.slug}
        entityTitle={practice.title}
        entityHref={routes.practice(practice.slug)}
      />
      <Breadcrumbs
        items={[
          { label: "Apply", href: routes.apply },
          { label: "Practices", href: routes.apply },
          { label: practice.title },
        ]}
      />
      <PageHeader
        eyebrow={`${sourceTypeLabels[practice.sourceType] ?? "Practice"} · ${practice.frequency}`}
        title={practice.title}
        intro={practice.description}
        meta={
          <div className="flex flex-wrap gap-2">
            <span className="chip">{practice.timeCommitment}</span>
            <span className="chip">{practice.frequency}</span>
          </div>
        }
      />

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <section>
            <p className="label label-green">The principle</p>
            <p className="mt-3 max-w-2xl font-serif text-xl leading-relaxed text-ink-soft">
              {practice.principle}
            </p>
          </section>

          <section className="mt-10 border-t border-line pt-6">
            <p className="label">Instructions</p>
            <ol className="mt-4 max-w-2xl space-y-4">
              {practice.instructions.map((instruction, index) => (
                <li key={instruction} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="font-sans text-xs tracking-[0.12em] text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-ink-soft">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10 border-t border-line pt-6">
            <p className="label">Reflection prompts</p>
            <ul className="mt-4 max-w-2xl space-y-3">
              {practice.reflectionPrompts.map((prompt) => (
                <li key={prompt} className="flex gap-3 font-serif text-lg leading-snug text-ink-soft">
                  <span aria-hidden="true" className="mt-[0.55em] h-px w-4 shrink-0 bg-gold" />
                  {prompt}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 border-t border-line pt-6">
            <p className="label">Origin and context</p>
            <div className="mt-3 max-w-2xl space-y-3 font-sans text-sm leading-relaxed text-muted">
              <p>{practice.origin}</p>
              <p>{practice.historicalContext}</p>
            </div>
            <div className="mt-4 border-l-2 border-burgundy/50 pl-4">
              <p className="label label-burgundy">Source note</p>
              <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                {practice.sourceNote}
              </p>
            </div>
          </section>

          <section className="mt-10 border-t border-line pt-6">
            <p className="label label-burgundy">Limitations</p>
            <ul className="mt-4 max-w-2xl space-y-3">
              {practice.limitations.map((limitation) => (
                <li key={limitation} className="flex gap-3 font-sans text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[0.55em] h-px w-4 shrink-0 bg-burgundy/60" />
                  {limitation}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10">
            <PracticeTracker
              practiceSlug={practice.slug}
              practiceTitle={practice.title}
              practiceHref={routes.practice(practice.slug)}
              reflectionPrompts={practice.reflectionPrompts}
            />
          </div>

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

          <div className="mt-10">
            <QuickNote
              entityType="practice"
              entitySlug={practice.slug}
              entityTitle={practice.title}
              entityHref={routes.practice(practice.slug)}
            />
          </div>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="border border-line bg-surface p-5">
            <p className="label">At a glance</p>
            <dl className="mt-4 space-y-3 font-sans text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Source</dt>
                <dd className="text-right text-ink">
                  {sourceTypeLabels[practice.sourceType] ?? practice.sourceType}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Frequency</dt>
                <dd className="text-ink">{practice.frequency}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Time</dt>
                <dd className="text-right text-ink">{practice.timeCommitment}</dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="label">Philosophical sources</p>
            <ul className="mt-3 space-y-2">
              {practice.philosophicalSource.map((source) => {
                const philosopher = source.slug ? getPhilosopher(source.slug) : null;
                return (
                  <li key={source.name}>
                    {philosopher ? (
                      <Link
                        href={routes.philosopher(philosopher.slug)}
                        className="font-serif text-lg text-ink hover:text-green"
                      >
                        {source.name}
                      </Link>
                    ) : (
                      <span className="font-serif text-lg text-ink">{source.name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {philosophers.length > 0 ? (
            <div>
              <p className="label">Related thinkers</p>
              <ul className="mt-3 space-y-2">
                {philosophers.map((philosopher) => (
                  <li key={philosopher.slug}>
                    <Link
                      href={routes.philosopher(philosopher.slug)}
                      className="font-serif text-lg text-ink hover:text-green"
                    >
                      {philosopher.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {concepts.length > 0 ? (
            <div>
              <p className="label">Concepts</p>
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
        </aside>
      </div>
    </div>
  );
}
