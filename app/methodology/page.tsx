import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Methodology",
  description:
    "How lessons are written, sourced, sequenced, and checked, and what the limits of this project are.",
};

export default function MethodologyPage() {
  return (
    <div className="container-editorial">
      <PageHeader
        eyebrow="Methodology"
        title="How the material is made"
        intro="A short account of the editorial standards behind the lessons, so that readers can judge the work rather than trust it."
      />

      <div className="grid gap-12 py-14 lg:grid-cols-[1fr_18rem] lg:gap-20">
        <div className="prose-editorial max-w-2xl">
          <h2>Sources</h2>
          <p>
            Lessons are built around primary texts where a suitable public-domain
            translation or open edition exists. Secondary sources are used to check
            historical context and to identify live interpretive disputes. Reference
            entries distinguish between what a thinker wrote, what interpreters argue,
            and what the lesson itself is claiming.
          </p>
          <p>
            Quotations are kept short and attributed. Where a well-known line is
            apocryphal, the lesson says so or leaves it out. Paraphrase is marked by
            context rather than presented as quotation.
          </p>

          <h2>Argument before summary</h2>
          <p>
            A lesson is not a list of views. It reconstructs at least one argument in
            premise-and-conclusion form, considers an objection, and explains what would
            have to be true for the position to fail. Comprehension checks ask readers to
            identify inferential moves, not to recall trivia.
          </p>

          <h2>Comparison</h2>
          <p>
            Comparative material is included only when the comparison does explanatory
            work. Each connection entry states a resonance, a difference, and a caveat.
            The caveat is not decoration: it names what the comparison obscures, which is
            often the most important part.
          </p>

          <h2>Difficulty and sequence</h2>
          <p>
            Difficulty labels describe conceptual load, not reader intelligence.
            Introductory lessons assume no prior coursework. Intermediate lessons assume
            familiarity with the vocabulary introduced earlier. Advanced lessons may
            require a primary text alongside the lesson.
          </p>
          <p>
            Paths sequence lessons, but they are not locks. Prerequisites are
            recommendations about background, not permissions.
          </p>

          <h2>Practical exercises</h2>
          <p>
            Practices are framed as experiments in attention, reasoning, or conduct.
            They are not presented as treatments for mental health conditions, and no
            practice is claimed to produce a result on a timetable. The practice tracker
            records what you did; it does not score you.
          </p>

          <h2>Limits and corrections</h2>
          <p>
            No short treatment of a major thinker can be complete. Translations differ,
            historical context is contested, and the selection of examples reflects
            editorial judgment. The lessons aim to be accurate and fair, not final.
          </p>
          <p>
            External reading links can rot. Where a link is broken, the citation in the
            lesson remains the reliable reference; search the title and translator in a
            library catalogue.
          </p>

          <h2>What is not claimed</h2>
          <ul>
            <li>That philosophy can be reduced to a set of techniques.</li>
            <li>That every tradition is answering the same question.</li>
            <li>That a lesson replaces sustained reading of a primary text.</li>
            <li>That the absence of a view from the curriculum is a verdict on it.</li>
          </ul>
        </div>

        <aside className="h-fit border-t border-line pt-5">
          <p className="label">Contents</p>
          <ul className="mt-3 space-y-2 font-sans text-sm text-ink-soft">
            <li>Sources</li>
            <li>Argument before summary</li>
            <li>Comparison</li>
            <li>Difficulty and sequence</li>
            <li>Practical exercises</li>
            <li>Limits and corrections</li>
          </ul>
          <div className="mt-8 border-t border-line pt-5">
            <p className="label">Related</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href={routes.about} className="font-serif text-lg text-ink hover:text-green">
                  About the academy
                </Link>
              </li>
              <li>
                <Link
                  href={routes.lesson("what-is-philosophy")}
                  className="font-serif text-lg text-ink hover:text-green"
                >
                  Begin with a lesson
                </Link>
              </li>
              <li>
                <Link href={routes.discover} className="font-serif text-lg text-ink hover:text-green">
                  Browse primary texts
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
