import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { ContentCard } from "@/components/content-card";
import { concepts, philosophers } from "@/lib/content";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Thinkers",
  description:
    "Philosophers and concepts from across the history of philosophy, presented with context, arguments, and criticisms.",
};

export default function ThinkersPage() {
  return (
    <div className="container-editorial">
      <PageHeader
        eyebrow="Thinkers"
        title="Ideas have authors, and authors have contexts"
        intro="Read philosophers in their own terms before judging them. Each entry distinguishes biography, argument, and later interpretation."
      />

      <section className="py-14">
        <SectionHeading
          label="Philosophers"
          title="A chronological conversation"
          description="The list is not a canon. It is a set of entry points into problems that remain live."
        />
        <div className="mt-8">
          {philosophers.map((philosopher, index) => (
            <Link
              key={philosopher.slug}
              href={routes.philosopher(philosopher.slug)}
              className="group grid gap-3 border-t border-line py-5 transition-colors hover:border-green sm:grid-cols-[2.5rem_11rem_1fr] sm:gap-6"
            >
              <span className="font-sans text-xs tracking-[0.12em] text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-serif text-xl text-ink transition-colors group-hover:text-green">
                  {philosopher.name}
                </span>
                <span className="mt-1 block font-sans text-xs text-muted">
                  {philosopher.dates}
                </span>
              </span>
              <span>
                <span className="block font-sans text-sm leading-relaxed text-ink-soft">
                  {philosopher.summary}
                </span>
                <span className="mt-1.5 block font-sans text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                  {philosopher.era}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="concepts" className="border-t border-line py-14">
        <SectionHeading
          label="Concepts"
          title="The vocabulary of the problems"
          description="Concepts are tools. Each entry explains what the term means, where it came from, and what can be said against it."
          action={{ href: routes.discover, label: "See connections" }}
        />
        <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <ContentCard
              key={concept.slug}
              href={routes.concept(concept.slug)}
              label="Concept"
              title={concept.name}
              description={concept.shortDefinition}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
