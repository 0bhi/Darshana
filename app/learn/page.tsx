import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { ContentCard } from "@/components/content-card";
import { branches, learningPaths, traditions } from "@/lib/content";
import { getPublishedLessons } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Learn",
  description:
    "Learning paths, branches, traditions, and lessons in philosophy. Begin with a question and follow it carefully.",
};

export default function LearnPage() {
  const lessons = getPublishedLessons();

  return (
    <div className="container-editorial">
      <PageHeader
        eyebrow="Learn"
        title="A curriculum for thinking carefully"
        intro="Philosophy is learned by following arguments, not by memorising conclusions. Start with a path, browse a branch, or enter through a single question."
      />

      <section className="py-14">
        <SectionHeading
          label="Learning paths"
          title="Sequences with a destination"
          description="Each path has objectives, a suggested order, and no requirement to agree with the thinkers it introduces."
          action={{ href: routes.paths, label: "All paths" }}
        />
        <div className="mt-8 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <ContentCard
              key={path.slug}
              href={routes.path(path.slug)}
              label={`${path.level} · ${path.estimatedHours} hours`}
              title={path.title}
              description={path.description}
              meta={`${path.lessonSlugs.length} lessons`}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-14">
        <SectionHeading
          label="Branches"
          title="Enter by problem"
          description="Branches group the questions that philosophy returns to. They overlap on purpose."
        />
        <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <ContentCard
              key={branch.slug}
              href={routes.branch(branch.slug)}
              label="Branch"
              title={branch.name}
              description={branch.tagline}
              meta={branch.subfields.slice(0, 3).join(" · ")}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-14">
        <SectionHeading
          label="Traditions"
          title="Enter by history"
          description="Traditions are not sealed boxes. They are conversations with their own vocabularies, disagreements, and blind spots."
        />
        <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {traditions.map((tradition) => (
            <ContentCard
              key={tradition.slug}
              href={routes.tradition(tradition.slug)}
              label={`${tradition.region} · ${tradition.era}`}
              title={tradition.name}
              description={tradition.summary}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-14">
        <SectionHeading
          label="All lessons"
          title="Read in any order"
          description="Each lesson is self-contained, though paths suggest an order for those who want one."
          action={{ href: routes.paths, label: "Follow a path" }}
        />
        <div className="mt-8 grid gap-x-10 md:grid-cols-2">
          {lessons.map((lesson) => (
            <ContentCard
              key={lesson.frontmatter.slug}
              href={routes.lesson(lesson.frontmatter.slug)}
              label={`${lesson.frontmatter.difficulty} · ${lesson.readingTime} min`}
              title={lesson.frontmatter.title}
              description={lesson.frontmatter.description}
              meta={lesson.frontmatter.subtitle}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-serif text-2xl leading-snug text-ink">
            Not sure where to begin? The first path assumes no prior reading.
          </p>
          <Link href={routes.path("what-is-philosophy")} className="btn btn-primary shrink-0">
            Begin with What Is Philosophy?
          </Link>
        </div>
      </section>
    </div>
  );
}
