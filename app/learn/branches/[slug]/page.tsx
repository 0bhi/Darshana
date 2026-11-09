import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHeader } from "@/components/page-header";
import { SaveButton } from "@/components/save-button";
import { QuickNote } from "@/components/quick-note";
import { RecordVisit } from "@/components/record-visit";
import { ContentCard } from "@/components/content-card";
import { getBranch, getRelatedConcepts } from "@/lib/content";
import { getLessonBySlug } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const branch = getBranch(slug);
  if (!branch) return { title: "Branch not found" };
  return { title: branch.name, description: branch.description };
}

export default async function BranchPage({ params }: PageProps) {
  const { slug } = await params;
  const branch = getBranch(slug);
  if (!branch) notFound();

  const lessons = branch.relatedLessons
    .map((lessonSlug) => getLessonBySlug(lessonSlug))
    .filter((lesson) => lesson !== null);
  const concepts = getRelatedConcepts(branch.relatedConcepts);

  return (
    <div className="container-editorial">
      <RecordVisit
        entityType="branch"
        entitySlug={branch.slug}
        entityTitle={branch.name}
        entityHref={routes.branch(branch.slug)}
      />
      <Breadcrumbs
        items={[
          { label: "Learn", href: routes.learn },
          { label: "Branches", href: routes.learn },
          { label: branch.name },
        ]}
      />
      <PageHeader
        eyebrow="Branch of philosophy"
        title={branch.name}
        intro={branch.tagline}
        meta={
          <div className="flex flex-wrap gap-2">
            {branch.subfields.map((subfield) => (
              <span key={subfield} className="chip">
                {subfield}
              </span>
            ))}
          </div>
        }
      >
        <SaveButton
          entityType="branch"
          entitySlug={branch.slug}
          entityTitle={branch.name}
          entityHref={routes.branch(branch.slug)}
          label="Save branch"
        />
      </PageHeader>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <p className="max-w-2xl font-serif text-xl leading-relaxed text-ink-soft">
            {branch.description}
          </p>

          <section className="mt-10 border-t border-line pt-6">
            <p className="label">Questions that define the branch</p>
            <ol className="mt-4 space-y-3">
              {branch.centralQuestions.map((question, index) => (
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

          <section className="mt-12">
            <p className="label">Lessons in this branch</p>
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

          {concepts.length > 0 ? (
            <section className="mt-10 border-t border-line pt-6">
              <p className="label">Key concepts</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {concepts.map((concept) => (
                  <Link key={concept.slug} href={routes.concept(concept.slug)} className="chip">
                    {concept.name}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-10">
            <QuickNote
              entityType="branch"
              entitySlug={branch.slug}
              entityTitle={branch.name}
              entityHref={routes.branch(branch.slug)}
            />
          </div>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="border border-line bg-surface p-5">
            <p className="label">At a glance</p>
            <dl className="mt-4 space-y-3 font-sans text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Lessons</dt>
                <dd className="text-ink">{lessons.length}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Concepts</dt>
                <dd className="text-ink">{concepts.length}</dd>
              </div>
            </dl>
          </div>
          <p className="font-sans text-xs leading-relaxed text-muted">
            Branches overlap. A question about free will can be metaphysical, ethical,
            and epistemological at once.
          </p>
        </aside>
      </div>
    </div>
  );
}
