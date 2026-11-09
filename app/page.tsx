import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContentCard } from "@/components/content-card";
import { SectionHeading } from "@/components/section-heading";
import {
  branches,
  connections,
  getContentCounts,
  learningPaths,
  philosophers,
  practicalTopics,
  primaryTexts,
} from "@/lib/content";
import { getLessonBySlug, getPublishedLessons } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";

const startHereSlugs = [
  "what-is-philosophy",
  "plato-allegory-cave",
  "problem-of-other-minds",
  "free-will-problem",
];

const featuredPhilosophers = [
  "socrates",
  "plato",
  "aristotle",
  "buddha",
  "nietzsche",
  "camus",
];

export default function HomePage() {
  const lessons = getPublishedLessons();
  const counts = getContentCounts();
  const startHere = startHereSlugs
    .map((slug) => getLessonBySlug(slug))
    .filter((lesson) => lesson !== null);
  const featuredPaths = learningPaths.slice(0, 3);
  const featuredThinkers = featuredPhilosophers
    .map((slug) => philosophers.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);
  const featuredTopics = practicalTopics.slice(0, 4);
  const featuredTexts = primaryTexts.slice(0, 4);
  const featuredConnections = connections.slice(0, 3);

  return (
    <>
      <section className="border-b border-line">
        <div className="container-editorial grid gap-12 py-14 md:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div className="reveal">
            <p className="label label-green">A school for the examined life</p>
            <h1 className="mt-6 max-w-3xl text-balance font-serif text-[clamp(3rem,6.4vw,6rem)] leading-[0.98] tracking-[-0.035em] text-ink">
              Question everything. Understand more. Live deliberately.
            </h1>
            <p className="mt-7 max-w-xl text-pretty font-serif text-xl leading-relaxed text-ink-soft md:text-2xl">
              Philosophy is not a museum of opinions. It is a practice of staying with a
              question long enough to change how you see. Begin anywhere; begin well.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href={routes.paths} className="btn btn-primary">
                Explore learning paths
                <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
              </Link>
              <Link href={routes.lesson("what-is-philosophy")} className="btn btn-secondary">
                Start with the first lesson
              </Link>
            </div>
          </div>

          <aside className="reveal-late flex flex-col justify-between border-l border-line pl-6 lg:pl-8">
            <div>
              <p className="label">Begin with a question</p>
              <p className="mt-4 font-serif text-3xl leading-tight text-ink">
                What would you choose if you did not know who you would be?
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
                John Rawls asked us to design a society behind a veil of ignorance.
                The thought experiment is one way into the question of justice.
              </p>
              <Link
                href={routes.lesson("veil-of-ignorance")}
                className="mt-5 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-green hover:text-green-deep"
              >
                Read the lesson
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.7} />
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6">
              <div>
                <dt className="label">Lessons</dt>
                <dd className="mt-1 font-serif text-3xl text-ink">{lessons.length}</dd>
              </div>
              <div>
                <dt className="label">Thinkers</dt>
                <dd className="mt-1 font-serif text-3xl text-ink">
                  {counts.philosophers}
                </dd>
              </div>
              <div>
                <dt className="label">Paths</dt>
                <dd className="mt-1 font-serif text-3xl text-ink">{counts.paths}</dd>
              </div>
              <div>
                <dt className="label">Traditions</dt>
                <dd className="mt-1 font-serif text-3xl text-ink">
                  {counts.traditions}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-20">
        <SectionHeading
          label="Start here"
          title="Four lessons that show how philosophy works"
          description="No prior reading required. Each lesson introduces a problem, follows the argument, and asks what it changes."
          action={{ href: routes.learn, label: "All lessons" }}
        />
        <div className="mt-8 grid gap-x-10 md:grid-cols-2">
          {startHere.map((lesson, index) => (
            <ContentCard
              key={lesson.frontmatter.slug}
              href={routes.lesson(lesson.frontmatter.slug)}
              label={`${String(index + 1).padStart(2, "0")} · ${lesson.frontmatter.difficulty}`}
              title={lesson.frontmatter.title}
              description={lesson.frontmatter.description}
              meta={`${lesson.readingTime} min read`}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="container-editorial py-16 md:py-20">
          <SectionHeading
            label="Learning paths"
            title="Sequences for a sustained inquiry"
            description="Each path gathers lessons around a problem or tradition, with objectives and a suggested order."
            action={{ href: routes.paths, label: "All paths" }}
          />
          <div className="mt-8 grid gap-x-10 md:grid-cols-3">
            {featuredPaths.map((path) => (
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
        </div>
      </section>

      <section className="container-editorial py-16 md:py-20">
        <SectionHeading
          label="Branches"
          title="The questions philosophy keeps asking"
          description="Branches are not silos. They are clusters of problems that repeatedly cross into one another."
          action={{ href: routes.learn, label: "Browse branches" }}
        />
        <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <Link
              key={branch.slug}
              href={routes.branch(branch.slug)}
              className="group flex items-start gap-4 border-t border-line py-5 transition-colors hover:border-green"
            >
              <span className="font-sans text-[0.68rem] tracking-[0.12em] text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-serif text-xl text-ink transition-colors group-hover:text-green">
                  {branch.name}
                </span>
                <span className="mt-1 block font-sans text-sm text-muted">
                  {branch.tagline}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-editorial py-16 md:py-20">
          <SectionHeading
            label="Thinkers"
            title="Read them in their own terms"
            description="Biography, context, central ideas, and the strongest criticisms. No hagiography, no caricature."
            action={{ href: routes.thinkers, label: "All thinkers" }}
          />
          <div className="mt-8 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {featuredThinkers.map((thinker) => (
              <ContentCard
                key={thinker.slug}
                href={routes.philosopher(thinker.slug)}
                label={`${thinker.dates} · ${thinker.era}`}
                title={thinker.name}
                description={thinker.summary}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-20">
        <SectionHeading
          label="Practical philosophy"
          title="Ideas under the pressure of a life"
          description="Not self-help slogans. Practices with historical sources, explicit limitations, and room for disagreement."
          action={{ href: routes.apply, label: "Go to Apply" }}
        />
        <div className="mt-8 grid gap-x-10 md:grid-cols-2">
          {featuredTopics.map((topic) => (
            <ContentCard
              key={topic.slug}
              href={routes.topic(topic.slug)}
              label="Practical topic"
              title={topic.title}
              description={topic.description}
              meta={`${topic.practices.length} related practices`}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="container-editorial py-16 md:py-20">
          <SectionHeading
            label="Connections"
            title="Ideas that rhyme across traditions"
            description="Comparisons are arguments, not decorations. Each connection states its resonance, its differences, and its caveats."
            action={{ href: routes.discover, label: "More connections" }}
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {featuredConnections.map((connection) => (
              <article key={connection.slug} className="border-t border-line pt-5">
                <p className="label">
                  {connection.left.label} · {connection.right.label}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-snug text-ink">
                  {connection.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                  {connection.summary}
                </p>
                <Link
                  href={routes.discover}
                  className="mt-4 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-green hover:text-green-deep"
                >
                  Read the comparison
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.7} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-20">
        <SectionHeading
          label="Primary texts"
          title="Go to the source"
          description="Public-domain editions and reliable reference entries for readers who want to continue beyond the lesson."
          action={{ href: routes.discover, label: "Reading list" }}
        />
        <div className="mt-8 grid gap-x-10 md:grid-cols-2">
          {featuredTexts.map((text) => (
            <div key={text.slug} className="border-t border-line py-5">
              <p className="label">
                {text.author} · {text.date}
              </p>
              <h3 className="mt-2 font-serif text-xl text-ink">{text.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                {text.note}
              </p>
              {text.href ? (
                <a
                  href={text.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block font-sans text-xs uppercase tracking-[0.12em] text-green hover:text-green-deep"
                >
                  Read the text →
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial pb-20">
        <div className="border-y border-line-strong bg-surface px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="label label-green">A note on method</p>
              <h2 className="mt-3 max-w-2xl font-serif text-[clamp(2rem,3.4vw,3.2rem)] leading-tight text-ink">
                We would rather be clear than conclusive.
              </h2>
              <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-muted">
                Every lesson distinguishes what a thinker argued from what later
                interpreters made of it. Where the evidence is contested, we say so.
                Where a practice is modern, we label it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href={routes.methodology} className="btn btn-secondary">
                Read our methodology
              </Link>
              <Link href={routes.about} className="btn btn-ghost">
                About the academy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
