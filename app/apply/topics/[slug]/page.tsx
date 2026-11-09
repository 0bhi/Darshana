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
  getPhilosopher,
  getPracticalTopic,
  getPracticesForTopic,
} from "@/lib/content";
import { getLessonBySlug } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const topic = getPracticalTopic(slug);
  if (!topic) return { title: "Topic not found" };
  return { title: topic.title, description: topic.description };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getPracticalTopic(slug);
  if (!topic) notFound();

  const relatedPractices = getPracticesForTopic(topic.slug);
  const lessons = topic.lessons
    .map((lessonSlug) => getLessonBySlug(lessonSlug))
    .filter((lesson) => lesson !== null);
  const philosophers = topic.philosophers
    .map((philosopherSlug) => getPhilosopher(philosopherSlug))
    .filter((philosopher) => philosopher !== null);
  const concepts = topic.concepts
    .map((conceptSlug) => getConcept(conceptSlug))
    .filter((concept) => concept !== null);
  const relatedTopics = topic.relatedTopics
    .map((topicSlug) => getPracticalTopic(topicSlug))
    .filter((item) => item !== null);

  return (
    <div className="container-editorial">
      <RecordVisit
        entityType="topic"
        entitySlug={topic.slug}
        entityTitle={topic.title}
        entityHref={routes.topic(topic.slug)}
      />
      <Breadcrumbs
        items={[
          { label: "Apply", href: routes.apply },
          { label: "Topics", href: routes.apply },
          { label: topic.title },
        ]}
      />
      <PageHeader
        eyebrow="Practical topic"
        title={topic.title}
        intro={topic.subtitle}
      >
        <div className="flex flex-wrap items-center gap-3">
          <SaveButton
            entityType="topic"
            entitySlug={topic.slug}
            entityTitle={topic.title}
            entityHref={routes.topic(topic.slug)}
            label="Save topic"
          />
          <p className="font-sans text-xs text-muted">
            {relatedPractices.length} practices · {lessons.length} lessons
          </p>
        </div>
      </PageHeader>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div>
          <div className="max-w-2xl space-y-4 font-serif text-xl leading-relaxed text-ink-soft">
            {topic.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {topic.sections.map((section) => (
            <section key={section.title} className="mt-10 border-t border-line pt-6">
              <h2 className="font-serif text-2xl text-ink">{section.title}</h2>
              <div className="mt-3 max-w-2xl space-y-3 font-sans text-sm leading-relaxed text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-10 border-t border-line pt-6">
            <p className="label">Reflection prompts</p>
            <ul className="mt-4 space-y-3">
              {topic.reflectionPrompts.map((prompt) => (
                <li
                  key={prompt}
                  className="flex gap-3 font-serif text-lg leading-snug text-ink-soft"
                >
                  <span aria-hidden="true" className="mt-[0.55em] h-px w-4 shrink-0 bg-gold" />
                  {prompt}
                </li>
              ))}
            </ul>
          </section>

          {relatedPractices.length > 0 ? (
            <section className="mt-12">
              <p className="label">Practices for this topic</p>
              <div className="mt-3 grid gap-x-10 md:grid-cols-2">
                {relatedPractices.map((practice) => (
                  <ContentCard
                    key={practice.slug}
                    href={routes.practice(practice.slug)}
                    label={`${practice.frequency} · ${practice.timeCommitment}`}
                    title={practice.title}
                    description={practice.description}
                  />
                ))}
              </div>
            </section>
          ) : null}

          {lessons.length > 0 ? (
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
          ) : null}

          <div className="mt-10">
            <QuickNote
              entityType="topic"
              entitySlug={topic.slug}
              entityTitle={topic.title}
              entityHref={routes.topic(topic.slug)}
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

          {relatedTopics.length > 0 ? (
            <div>
              <p className="label">Related topics</p>
              <ul className="mt-3 space-y-2">
                {relatedTopics.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={routes.topic(related.slug)}
                      className="font-serif text-lg text-ink hover:text-green"
                    >
                      {related.title}
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
