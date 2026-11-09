import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { SaveButton } from "@/components/save-button";
import { QuickNote } from "@/components/quick-note";
import { RecordVisit } from "@/components/record-visit";
import { ContentCard } from "@/components/content-card";
import {
  getConcept,
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
  const concept = getConcept(slug);
  if (!concept) return { title: "Concept not found" };
  return { title: concept.name, description: concept.shortDefinition };
}

export default async function ConceptPage({ params }: PageProps) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  const relatedConcepts = getRelatedConcepts(concept.relatedConcepts);
  const philosophers = getRelatedPhilosophers(concept.philosophers);
  const lessons = concept.relatedLessons
    .map((lessonSlug) => getLessonBySlug(lessonSlug))
    .filter((lesson) => lesson !== null);

  return (
    <div className="container-editorial">
      <RecordVisit
        entityType="concept"
        entitySlug={concept.slug}
        entityTitle={concept.name}
        entityHref={routes.concept(concept.slug)}
      />
      <Breadcrumbs
        items={[
          { label: "Thinkers", href: routes.thinkers },
          { label: "Concepts", href: `${routes.thinkers}#concepts` },
          { label: concept.name },
        ]}
      />
      <PageHeader
        eyebrow="Concept"
        title={concept.name}
        intro={concept.shortDefinition}
        meta={
          <div className="flex flex-wrap gap-2">
            {concept.alternateNames?.map((name) => (
              <span key={name} className="chip">
                {name}
              </span>
            ))}
            {concept.traditions.map((traditionSlug) => (
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
          entityType="concept"
          entitySlug={concept.slug}
          entityTitle={concept.name}
          entityHref={routes.concept(concept.slug)}
          label="Save concept"
        />
      </PageHeader>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div>
          <section>
            <p className="label label-green">Why it matters</p>
            <p className="mt-3 max-w-2xl font-serif text-xl leading-relaxed text-ink-soft">
              {concept.significance}
            </p>
          </section>

          <section className="mt-10 border-t border-line pt-6">
            <p className="label">Origins</p>
            <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted">
              {concept.origins}
            </p>
          </section>

          <section className="mt-10 border-t border-line pt-6">
            <p className="label">Interpretations</p>
            <div className="mt-5 space-y-5">
              {concept.interpretations.map((interpretation) => (
                <div key={interpretation.label}>
                  <h2 className="font-serif text-xl text-ink">{interpretation.label}</h2>
                  <p className="mt-1.5 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                    {interpretation.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {concept.arguments.length > 0 ? (
            <section className="mt-10 border-t border-line pt-6">
              <p className="label">Arguments</p>
              <div className="mt-5 space-y-5">
                {concept.arguments.map((argument) => (
                  <div key={argument.title}>
                    <h2 className="font-serif text-xl text-ink">{argument.title}</h2>
                    <p className="mt-1.5 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                      {argument.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {concept.criticisms.length > 0 ? (
            <section className="mt-10 border-t border-line pt-6">
              <p className="label">Criticisms</p>
              <div className="mt-5 space-y-5">
                {concept.criticisms.map((criticism) => (
                  <div key={criticism.title}>
                    <h2 className="font-serif text-xl text-ink">{criticism.title}</h2>
                    <p className="mt-1.5 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                      {criticism.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {concept.practicalRelevance ? (
            <section className="mt-10 border-t border-line pt-6">
              <p className="label">Practical relevance</p>
              <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-ink-soft">
                {concept.practicalRelevance}
              </p>
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

          <div className="mt-10">
            <QuickNote
              entityType="concept"
              entitySlug={concept.slug}
              entityTitle={concept.name}
              entityHref={routes.concept(concept.slug)}
            />
          </div>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          {philosophers.length > 0 ? (
            <div>
              <p className="label">Thinkers</p>
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

          {relatedConcepts.length > 0 ? (
            <div>
              <p className="label">Related concepts</p>
              <ul className="mt-3 space-y-2">
                {relatedConcepts.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={routes.concept(related.slug)}
                      className="font-serif text-lg text-ink hover:text-green"
                    >
                      {related.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="border-t border-line pt-5">
            <p className="label">Keep reading</p>
            <Link
              href={routes.discover}
              className="mt-3 inline-block font-serif text-lg text-green hover:text-green-deep"
            >
              See how this concept connects →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
