import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { ContentCard } from "@/components/content-card";
import { practicalTopics, practices } from "@/lib/content";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Apply",
  description:
    "Practical philosophy: topics and exercises with historical sources, explicit limitations, and room for disagreement.",
};

export default function ApplyPage() {
  return (
    <div className="container-editorial">
      <PageHeader
        eyebrow="Apply"
        title="Philosophy under the pressure of a life"
        intro="This is not a shelf of life hacks. These practices have histories, assumptions, and limits. Use them critically, and stop when they stop serving inquiry."
      />

      <section className="py-14">
        <SectionHeading
          label="Practical topics"
          title="Begin with a situation, not a doctrine"
          description="Each topic gathers lessons, concepts, and practices around a recurring human difficulty."
        />
        <div className="mt-8 grid gap-x-10 md:grid-cols-2">
          {practicalTopics.map((topic) => (
            <ContentCard
              key={topic.slug}
              href={routes.topic(topic.slug)}
              label="Topic"
              title={topic.title}
              description={topic.description}
              meta={`${topic.practices.length} practices · ${topic.lessons.length} lessons`}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-14">
        <SectionHeading
          label="Practices"
          title="Exercises with a provenance"
          description="Each practice names its source, distinguishes historical practice from modern adaptation, and states its limitations."
        />
        <div className="mt-8 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice) => (
            <ContentCard
              key={practice.slug}
              href={routes.practice(practice.slug)}
              label={`${practice.frequency} · ${practice.timeCommitment}`}
              title={practice.title}
              description={practice.description}
              meta={
                practice.sourceType === "historical"
                  ? "Historical practice"
                  : practice.sourceType === "modern-adaptation"
                    ? "Modern adaptation"
                    : "Editorial interpretation"
              }
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-14">
        <div className="panel-deep flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="label label-burgundy">A caution</p>
            <p className="mt-2 max-w-2xl font-serif text-xl leading-snug text-ink">
              Philosophical practice is not a substitute for medical or psychological care.
            </p>
          </div>
          <Link href={routes.methodology} className="btn btn-secondary shrink-0">
            Read our approach
          </Link>
        </div>
      </section>
    </div>
  );
}
