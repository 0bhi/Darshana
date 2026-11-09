"use client";

import { useState } from "react";
import type { LessonFrontmatter } from "@/lib/content/schemas";
import { cn } from "@/lib/utils";

type Checks = LessonFrontmatter["checks"];

export function ComprehensionCheck({ checks }: { checks: Checks }) {
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    checks.map(() => null),
  );
  const [revealed, setRevealed] = useState<boolean[]>(() => checks.map(() => false));

  function selectAnswer(index: number, optionIndex: number) {
    setAnswers((current) => current.map((value, i) => (i === index ? optionIndex : value)));
    setRevealed((current) => current.map((value, i) => (i === index ? false : value)));
  }

  function reveal(index: number) {
    setRevealed((current) => current.map((value, i) => (i === index ? true : value)));
  }

  function reset() {
    setAnswers(checks.map(() => null));
    setRevealed(checks.map(() => false));
  }

  if (checks.length === 0) return null;

  return (
    <section aria-labelledby="comprehension-heading" className="border-t border-line pt-8">
      <p className="label label-green">Check your understanding</p>
      <h2
        id="comprehension-heading"
        className="mt-2 font-serif text-2xl text-ink md:text-3xl"
      >
        Before you move on
      </h2>
      <p className="mt-2 max-w-xl font-sans text-sm text-muted">
        These questions test the argument, not your agreement with it.
      </p>

      <div className="mt-8 space-y-8">
        {checks.map((check, index) => {
          const selected = answers[index] ?? null;
          const isRevealed = revealed[index] ?? false;
          const correct = selected === check.answerIndex;

          return (
            <fieldset key={check.question} className="border-t border-line pt-5">
              <legend className="max-w-2xl font-serif text-xl leading-snug text-ink">
                {index + 1}. {check.question}
              </legend>
              <div className="mt-4 space-y-2">
                {check.options.map((option, optionIndex) => {
                  const isSelected = selected === optionIndex;
                  const showCorrect = isRevealed && optionIndex === check.answerIndex;
                  const showIncorrect = isRevealed && isSelected && !correct;

                  return (
                    <label
                      key={option}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 border px-3.5 py-3 font-sans text-sm leading-relaxed transition-colors",
                        isSelected
                          ? "border-green bg-green-wash text-ink"
                          : "border-line bg-surface/60 text-ink-soft hover:border-line-strong",
                        showCorrect && "border-green bg-green-wash",
                        showIncorrect && "border-burgundy bg-burgundy-wash",
                      )}
                    >
                      <input
                        type="radio"
                        name={`check-${index}`}
                        checked={isSelected}
                        onChange={() => selectAnswer(index, optionIndex)}
                        className="mt-1 accent-[var(--green)]"
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => reveal(index)}
                  disabled={selected === null}
                  className="btn btn-sm btn-primary"
                >
                  Check answer
                </button>
                {isRevealed ? (
                  <span
                    aria-live="polite"
                    className={cn(
                      "font-sans text-xs uppercase tracking-[0.12em]",
                      correct ? "text-green" : "text-burgundy",
                    )}
                  >
                    {correct ? "Correct" : "Not quite"}
                  </span>
                ) : null}
              </div>

              {isRevealed ? (
                <p className="mt-4 max-w-2xl border-l-2 border-line-strong pl-4 font-sans text-sm leading-relaxed text-muted">
                  {check.explanation}
                </p>
              ) : null}
            </fieldset>
          );
        })}
      </div>

      <button
        type="button"
        onClick={reset}
        className="mt-6 font-sans text-xs uppercase tracking-[0.12em] text-muted hover:text-green"
      >
        Reset answers
      </button>
    </section>
  );
}
