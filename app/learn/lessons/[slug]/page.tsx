import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ComprehensionCheck } from "@/components/comprehension-check";
import { ContentCard } from "@/components/content-card";
import { LessonProgressButton } from "@/components/lesson-progress-button";
import { mdxComponents } from "@/components/mdx-components";
import { QuickNote } from "@/components/quick-note";
import { RecordVisit } from "@/components/record-visit";
import { SaveButton } from "@/components/save-button";
import {
  getBranchName,
  getConceptName,
  getPhilosopherName,
  getTraditionName,
} from "@/lib/content";
import { getLessonBySlug } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return { title: "Lesson not found" };
  return {
    title: lesson.frontmatter.title,
    description: lesson.frontmatter.description,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson || !lesson.frontmatter.published) notFound();

  const fm = lesson.frontmatter;
  const relatedLessons = fm.relatedLessons
    .map((relatedSlug) => getLessonBySlug(relatedSlug))
    .filter((item) => item !== null);

  return (
    <div className="container-editorial">
      <RecordVisit
        entityType="lesson"
        entitySlug={fm.slug}
        entityTitle={fm.title}
        entityHref={routes.lesson(fm.slug)}
      />
      <Breadcrumbs
        items={[
          { label: "Learn", href: routes.learn },
          { label: "Lessons", href: routes.learn },
          { label: fm.title },
        ]}
      />

      <header className="border-b border-line pb-10 pt-2">
        <p className="label label-green">
          Lesson · {fm.difficulty} · {lesson.readingTime} min read
        </p>
        <h1 className="mt-4 max-w-4xl text-balance font-serif text-[clamp(2.5rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.03em] text-ink">
          {fm.title}
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-xl leading-relaxed text-ink-soft md:text-2xl">
          {fm.subtitle}
        </p>
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          {fm.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {fm.branches.map((branchSlug) => (
            <Link key={branchSlug} href={routes.branch(branchSlug)} className="chip">
              {getBranchName(branchSlug)}
            </Link>
          ))}
          {fm.traditions.map((traditionSlug) => (
            <Link
              key={traditionSlug}
              href={routes.tradition(traditionSlug)}
              className="chip"
            >
              {getTraditionName(traditionSlug)}
            </Link>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <SaveButton
            entityType="lesson"
            entitySlug={fm.slug}
            entityTitle={fm.title}
            entityHref={routes.lesson(fm.slug)}
            label="Save lesson"
          />
          <LessonProgressButton
            lessonSlug={fm.slug}
            lessonTitle={fm.title}
            lessonHref={routes.lesson(fm.slug)}
          />
        </div>
      </header>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div>
          <article className="prose-editorial max-w-reading">
            <MDXRemote
              source={lesson.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </article>

          <div className="mt-14 max-w-reading space-y-14">
            <ComprehensionCheck checks={fm.checks} />

            {fm.furtherReading.length > 0 ? (
              <section className="border-t border-line pt-8">
                <p className="label label-green">Further reading</p>
                <h2 className="mt-2 font-serif text-2xl text-ink">Continue the inquiry</h2>
                <ul className="mt-5 space-y-4">
                  {fm.furtherReading.map((item) => (
                    <li
                      key={`${item.label}-${item.href ?? item.note ?? ""}`}
                      className="border-b border-line pb-4 last:border-0"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-serif text-lg text-ink">{item.label}</p>
                        <span className="font-sans text-[0.62rem] uppercase tracking-[0.12em] text-faint">
                          {item.kind}
                        </span>
                      </div>
                      {item.author ? (
                        <p className="mt-0.5 font-sans text-xs text-muted">{item.author}</p>
                      ) : null}
                      {item.note ? (
                        <p className="mt-1.5 font-sans text-sm leading-relaxed text-muted">
                          {item.note}
                        </p>
                      ) : null}
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.12em] text-green hover:text-green-deep"
                        >
                          Open source
                          <ArrowUpRight className="h-3 w-3" strokeWidth={1.8} />
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {relatedLessons.length > 0 ? (
              <section className="border-t border-line pt-8">
                <p className="label">Related lessons</p>
                <div className="mt-3">
                  {relatedLessons.map((related) => (
                    <ContentCard
                      key={related.frontmatter.slug}
                      href={routes.lesson(related.frontmatter.slug)}
                      label={related.frontmatter.difficulty}
                      title={related.frontmatter.title}
                      description={related.frontmatter.description}
                      meta={`${related.readingTime} min read`}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            <QuickNote
              entityType="lesson"
              entitySlug={fm.slug}
              entityTitle={fm.title}
              entityHref={routes.lesson(fm.slug)}
            />
          </div>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="border border-line bg-surface p-5">
            <p className="label">Learning objectives</p>
            <ul className="mt-4 space-y-3">
              {fm.learningObjectives.map((objective) => (
                <li
                  key={objective}
                  className="flex gap-2.5 font-sans text-xs leading-relaxed text-ink-soft"
                >
                  <span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-gold" />
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          {lesson.toc.length > 0 ? (
            <nav aria-label="On this page">
              <p className="label">On this page</p>
              <ul className="mt-3 space-y-2">
                {lesson.toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "pl-4" : undefined}>
                    <a
                      href={`#${item.id}`}
                      className="font-sans text-xs leading-relaxed text-muted transition-colors hover:text-green"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <div className="border-t border-line pt-5">
            <p className="label">Appears in</p>
            <div className="mt-3 space-y-2">
              {fm.philosophers.slice(0, 4).map((philosopherSlug) => (
                <Link
                  key={philosopherSlug}
                  href={routes.philosopher(philosopherSlug)}
                  className="block font-serif text-base text-ink hover:text-green"
                >
                  {getPhilosopherName(philosopherSlug)}
                </Link>
              ))}
              {fm.concepts.slice(0, 4).map((conceptSlug) => (
                <Link
                  key={conceptSlug}
                  href={routes.concept(conceptSlug)}
                  className="block font-serif text-base text-ink hover:text-green"
                >
                  {getConceptName(conceptSlug)}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
