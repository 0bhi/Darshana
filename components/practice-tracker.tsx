"use client";

import { useState } from "react";
import { Check, Bookmark, BookmarkCheck } from "lucide-react";
import {
  useNotebook,
  type PracticeTarget,
} from "@/components/notebook/notebook-provider";
import { formatShortDate } from "@/lib/utils";

type PracticeTrackerProps = PracticeTarget & {
  reflectionPrompts: string[];
};

export function PracticeTracker({
  practiceSlug,
  practiceTitle,
  practiceHref,
  reflectionPrompts,
}: PracticeTrackerProps) {
  const {
    state,
    isPracticeSaved,
    togglePracticeSaved,
    addPracticeCompletion,
  } = useNotebook();
  const [reflection, setReflection] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const saved = isPracticeSaved(practiceSlug);
  const completions = state.practiceCompletions.filter(
    (item) => item.practiceSlug === practiceSlug,
  );

  async function handleSave() {
    setPending(true);
    const ok = await togglePracticeSaved({
      practiceSlug,
      practiceTitle,
      practiceHref,
    });
    setPending(false);
    setMessage(ok ? null : "Could not update saved practice.");
  }

  async function handleComplete(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    const ok = await addPracticeCompletion(
      { practiceSlug, practiceTitle, practiceHref },
      reflection.trim() || null,
    );
    setPending(false);
    if (ok) {
      setReflection("");
      setMessage("Practice recorded in your notebook.");
    } else {
      setMessage("Could not record the practice. Try again.");
    }
  }

  return (
    <section aria-labelledby="practice-tracker" className="panel">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="label label-green">Practice log</p>
          <h2 id="practice-tracker" className="mt-2 font-serif text-2xl text-ink">
            Keep a record
          </h2>
          <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-muted">
            This is a private record, not a score. You can keep it on this device or
            sync it to your account.
          </p>
        </div>
        <button
          type="button"
          onClick={handleSave}
          disabled={pending}
          className="btn btn-sm"
        >
          {saved ? (
            <BookmarkCheck className="h-3.5 w-3.5" strokeWidth={1.7} />
          ) : (
            <Bookmark className="h-3.5 w-3.5" strokeWidth={1.7} />
          )}
          {saved ? "Saved practice" : "Save practice"}
        </button>
      </div>

      <form onSubmit={handleComplete} className="mt-6 space-y-3 border-t border-line pt-5">
        <label className="block">
          <span className="label">What did you notice?</span>
          <textarea
            value={reflection}
            onChange={(event) => setReflection(event.target.value)}
            maxLength={20000}
            placeholder={reflectionPrompts[0] ?? "A sentence is enough."}
            className="textarea mt-1.5 min-h-[6.5rem]"
          />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={pending}
            className="btn btn-sm btn-primary"
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2} />
            Record completion
          </button>
          <span className="font-sans text-xs text-muted">
            {completions.length === 0
              ? "No completions recorded yet."
              : `${completions.length} completion${completions.length === 1 ? "" : "s"} recorded.`}
          </span>
        </div>
        {message ? (
          <p className="font-sans text-xs text-muted" aria-live="polite">
            {message}
          </p>
        ) : null}
      </form>

      {completions.length > 0 ? (
        <div className="mt-5 space-y-3 border-t border-line pt-5">
          {completions.slice(0, 3).map((completion) => (
            <div key={completion.id} className="font-sans text-sm text-ink-soft">
              <p className="text-xs uppercase tracking-[0.12em] text-muted">
                {formatShortDate(completion.completedAt)}
              </p>
              {completion.reflection ? (
                <p className="note-body mt-1 leading-relaxed">{completion.reflection}</p>
              ) : (
                <p className="mt-1 text-muted">Completed without a written reflection.</p>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
