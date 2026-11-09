import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { SaveButton } from "@/components/save-button";
import { QuickNote } from "@/components/quick-note";
import { RecordVisit } from "@/components/record-visit";
import {
  getBranch,
  getBranchName,
  getLearningPath,
  getTraditionName,
} from "@/lib/content";
import { getLessonBySlug } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const path = getLearningPath(slug);
  if (!path) return { title: "Path not found" };
  return {
    title: path.title,
    description: path.description,
  };
}

export default async function PathPage({ params }: PageProps) {
  const { slug } = await params;
  const path = getLearningPath(slug);
  if (!path) notFound();

  const lessons = path.lessonSlugs
    .map((lessonSlug) => getLessonBySlug(lessonSlug))
    .filter((lesson) => lesson !== null);
  const firstLesson = lessons[0];

  return (
    <div className="container-editorial">
      <RecordVisit
        entityType="path"
        entitySlug={path.slug}
        entityTitle={path.title}
        entityHref={routes.path(path.slug)}
      />
      <Breadcrumbs
        items={[
          { label: "Learn", href: routes.learn },
          { label: "Paths", href: routes.paths },
          { label: path.title },
        ]}
      />
      <PageHeader
        eyebrow={`${path.level} path · ${path.estimatedHours} hours`}
        title={path.title}
        intro={path.subtitle}
        meta={
          <div className="flex flex-wrap items-center gap-2">
            {path.branches.map((branchSlug) => (
              <Link
                key={branchSlug}
                href={routes.branch(branchSlug)}
                className="chip"
              >
                {getBranchName(branchSlug)}
              </Link>
            ))}
            {path.traditions.map((traditionSlug) => (
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
        <div className="flex flex-wrap items-center gap-3">
          <SaveButton
            entityType="path"
            entitySlug={path.slug}
            entityTitle={path.title}
            entityHref={routes.path(path.slug)}
            label="Save path"
          />
          {firstLesson ? (
            <Link
              href={routes.lesson(firstLesson.frontmatter.slug)}
              className="btn btn-primary"
            >
              Begin the path
            </Link>
          ) : null}
        </div>
      </PageHeader>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <section>
            <h2 className="font-serif text-2xl text-ink">What this path asks</h2>
            <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-ink-soft">
              {path.description}
            </p>
            <ul className="mt-6 space-y-3 border-t border-line pt-5">
              {path.objectives.map((objective) => (
                <li
                  key={objective}
                  className="flex gap-3 font-sans text-sm leading-relaxed text-ink-soft"
                >
                  <span aria-hidden="true" className="mt-[0.55em] h-px w-4 shrink-0 bg-gold" />
                  {objective}
                </li>
              ))}
            </ul>
          </section>

          {path.prerequisites.length > 0 ? (
            <section className="mt-10 border-t border-line pt-6">
              <p className="label">Recommended before this path</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {path.prerequisites.map((prerequisite) => {
                  const prerequisitePath = getLearningPath(prerequisite);
                  return prerequisitePath ? (
                    <Link
                      key={prerequisite}
                      href={routes.path(prerequisite)}
                      className="chip"
                    >
                      {prerequisitePath.title}
                    </Link>
                  ) : null;
                })}
              </div>
            </section>
          ) : null}

          <section className="mt-12">
            <div className="flex items-baseline justify-between border-t border-line pt-6">
              <p className="label">The sequence</p>
              <p className="font-sans text-xs text-muted">{lessons.length} lessons</p>
            </div>
            <ol className="mt-2">
              {lessons.map((lesson, index) => (
                <li key={lesson.frontmatter.slug}>
                  <Link
                    href={routes.lesson(lesson.frontmatter.slug)}
                    className="group grid grid-cols-[2rem_1fr] gap-4 border-b border-line py-5 transition-colors hover:border-green"
                  >
                    <span className="font-sans text-xs tracking-[0.12em] text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-serif text-xl leading-snug text-ink transition-colors group-hover:text-green">
                        {lesson.frontmatter.title}
                      </span>
                      <span className="mt-1 block font-sans text-sm text-muted">
                        {lesson.frontmatter.subtitle}
                      </span>
                      <span className="mt-2 block font-sans text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                        {lesson.frontmatter.difficulty} · {lesson.readingTime} min read
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-10">
            <QuickNote
              entityType="path"
              entitySlug={path.slug}
              entityTitle={path.title}
              entityHref={routes.path(path.slug)}
            />
          </div>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="border border-line bg-surface p-5">
            <p className="label">At a glance</p>
            <dl className="mt-4 space-y-3 font-sans text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Level</dt>
                <dd className="text-ink">{path.level}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Estimated time</dt>
                <dd className="text-ink">{path.estimatedHours} hours</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Lessons</dt>
                <dd className="text-ink">{lessons.length}</dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="label">Related branches</p>
            <ul className="mt-3 space-y-2">
              {path.branches.map((branchSlug) => {
                const branch = getBranch(branchSlug);
                return branch ? (
                  <li key={branchSlug}>
                    <Link
                      href={routes.branch(branchSlug)}
                      className="font-serif text-lg text-ink hover:text-green"
                    >
                      {branch.name}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
