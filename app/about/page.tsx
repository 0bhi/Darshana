import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "About",
  description:
    "The Philosophy Academy is an independent educational project for careful, non-dogmatic study of philosophy.",
};

export default function AboutPage() {
  return (
    <div className="container-editorial">
      <PageHeader
        eyebrow="About"
        title="Philosophy is a practice before it is a subject"
        intro="The academy exists for readers who want to think carefully about difficult questions, not to collect quotations or win arguments."
      />

      <div className="grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div className="prose-editorial max-w-2xl">
          <h2>What this is</h2>
          <p>
            The Philosophy Academy is an independent educational project. It offers
            structured lessons, primary-text guidance, and practical exercises across
            several traditions. The aim is not to deliver a finished worldview. It is to
            help you read, reconstruct arguments, notice assumptions, and hold
            disagreement without pretending it away.
          </p>

          <h2>What it is not</h2>
          <p>
            This is not a credential, a substitute for primary texts, or a survey that
            treats every tradition as a variation on a European story. It is also not a
            personality brand. There is no feed, no engagement metric, and no incentive
            to make you angry enough to return.
          </p>

          <h2>How the material is organized</h2>
          <p>
            Lessons are the core. They introduce a question, explain the positions, and
            end with a comprehension check. Learning paths sequence lessons around a
            problem. Thinkers and concepts provide reference entries. Apply translates
            arguments into exercises that can be practiced badly at first.
          </p>

          <h2>Editorial commitments</h2>
          <ul>
            <li>
              Short quotations are attributed. We do not invent quotations or assign
              positions to thinkers without textual warrant.
            </li>
            <li>
              Comparisons state their limits. Resemblance is not identity, and a caveat
              is part of the argument, not a disclaimer bolted on afterward.
            </li>
            <li>
              Difficulty is not used as a gate. Technical terms are explained where they
              first matter, and each lesson can be read without prior coursework.
            </li>
            <li>
              Practices are offered as experiments, not medical or therapeutic advice.
              Philosophical exercises can surface difficult material; they are not a
              substitute for care from a qualified professional.
            </li>
          </ul>

          <h2>Privacy</h2>
          <p>
            There are no advertising trackers on this site. An account is optional and
            exists to sync a private notebook. Notebook contents are visible only to the
            account that owns them.
          </p>
        </div>

        <aside className="h-fit space-y-8">
          <div className="border-t border-line pt-5">
            <p className="label label-green">Start here</p>
            <ul className="mt-3 space-y-3">
              <li>
                <Link
                  href={routes.lesson("what-is-philosophy")}
                  className="group flex items-start justify-between gap-3 font-serif text-xl text-ink hover:text-green"
                >
                  What Is Philosophy?
                  <ArrowRight
                    className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.7}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={routes.paths}
                  className="group flex items-start justify-between gap-3 font-serif text-xl text-ink hover:text-green"
                >
                  Browse learning paths
                  <ArrowRight
                    className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.7}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={routes.methodology}
                  className="group flex items-start justify-between gap-3 font-serif text-xl text-ink hover:text-green"
                >
                  Read the methodology
                  <ArrowRight
                    className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.7}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="border border-line bg-paper-deep p-5">
            <p className="label">A working assumption</p>
            <p className="mt-2 font-serif text-lg leading-relaxed text-ink-soft">
              A good question is not a failure to have an answer. It is often the most
              honest thing available.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
