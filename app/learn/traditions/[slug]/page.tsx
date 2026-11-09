import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { SaveButton } from "@/components/save-button";
import { QuickNote } from "@/components/quick-note";
import { RecordVisit } from "@/components/record-visit";
import { ContentCard } from "@/components/content-card";
import { getPhilosopher, getTradition } from "@/lib/content";
import { getLessonBySlug } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const tradition = getTradition(slug);
  if (!tradition) return { title: "Tradition not found" };
  return { title: tradition.name, description: tradition.summary };
}

export default async function TraditionPage({ params }: PageProps) {
  const { slug } = await params;
  const tradition = getTradition(slug);
  if (!tradition) notFound();

  const lessons = tradition.relatedLessons
    .map((lessonSlug) => getLessonBySlug(lessonSlug))
    .filter((lesson) => lesson !== null);
  const relatedTraditions = tradition.relatedTraditions
    .map((traditionSlug) => getTradition(traditionSlug))
    .filter((item) => item !== null);

  return (
    <div className="container-editorial">
      <RecordVisit
        entityType="tradition"
        entitySlug={tradition.slug}
        entityTitle={tradition.name}
        entityHref={routes.tradition(tradition.slug)}
      />
      <Breadcrumbs
        items={[
          { label: "Learn", href: routes.learn },
          { label: "Traditions", href: routes.learn },
          { label: tradition.name },
        ]}
      />
      <PageHeader
        eyebrow={`${tradition.region} · ${tradition.era}`}
        title={tradition.name}
        intro={tradition.summary}
      >
        <SaveButton
          entityType="tradition"
          entitySlug={tradition.slug}
          entityTitle={tradition.name}
          entityHref={routes.tradition(tradition.slug)}
          label="Save tradition"
        />
      </PageHeader>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <div className="max-w-2xl space-y-4 font-serif text-xl leading-relaxed text-ink-soft">
            {tradition.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="mt-10 border-t border-line pt-6">
            <p className="label">Central questions</p>
            <ol className="mt-4 space-y-3">
              {tradition.centralQuestions.map((question, index) => (
                <li
                  key={question}
                  className="grid grid-cols-[2rem_1fr] gap-3 font-serif text-lg leading-snug text-ink"
                >
                  <span className="font-sans text-xs tracking-[0.12em] text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {question}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10 border-t border-line pt-6">
            <p className="label">Figures</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tradition.figures.map((figure) => {
                const philosopher = figure.slug ? getPhilosopher(figure.slug) : null;
                return philosopher ? (
                  <Link
                    key={figure.name}
                    href={routes.philosopher(philosopher.slug)}
                    className="chip"
                  >
                    {figure.name}
                  </Link>
                ) : (
                  <span key={figure.name} className="chip">
                    {figure.name}
                  </span>
                );
              })}
            </div>
          </section>

          {tradition.keyTexts.length > 0 ? (
            <section className="mt-10 border-t border-line pt-6">
              <p className="label">Key texts</p>
              <ul className="mt-4 space-y-3">
                {tradition.keyTexts.map((text) => (
                  <li key={text.label} className="border-b border-line pb-3 last:border-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-serif text-lg text-ink">{text.label}</p>
                      {text.href ? (
                        <a
                          href={text.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-sans text-xs uppercase tracking-[0.12em] text-green hover:text-green-deep"
                        >
                          Read
                        </a>
                      ) : null}
                    </div>
                    {text.note ? (
                      <p className="mt-1 font-sans text-sm leading-relaxed text-muted">
                        {text.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="mt-12">
            <p className="label">Lessons</p>
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

          <div className="mt-10">
            <QuickNote
              entityType="tradition"
              entitySlug={tradition.slug}
              entityTitle={tradition.name}
              entityHref={routes.tradition(tradition.slug)}
            />
          </div>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="border border-line bg-surface p-5">
            <p className="label">At a glance</p>
            <dl className="mt-4 space-y-3 font-sans text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Region</dt>
                <dd className="text-ink">{tradition.region}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Era</dt>
                <dd className="text-right text-ink">{tradition.era}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Lessons</dt>
                <dd className="text-ink">{lessons.length}</dd>
              </div>
            </dl>
          </div>

          {relatedTraditions.length > 0 ? (
            <div>
              <p className="label">Related traditions</p>
              <ul className="mt-3 space-y-2">
                {relatedTraditions.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={routes.tradition(related.slug)}
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
