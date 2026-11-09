"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import {
  useNotebook,
  type ProgressTarget,
} from "@/components/notebook/notebook-provider";
import { formatShortDate } from "@/lib/utils";

export function LessonProgressButton({
  lessonSlug,
  lessonTitle,
  lessonHref,
}: Omit<ProgressTarget, "status">) {
  const { getLessonProgress, setLessonProgress } = useNotebook();
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const progress = getLessonProgress(lessonSlug);

  async function update(status: "started" | "completed") {
    setPending(true);
    setFailed(false);
    const ok = await setLessonProgress({
      lessonSlug,
      lessonTitle,
      lessonHref,
      status,
    });
    setPending(false);
    setFailed(!ok);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {progress?.status === "completed" ? (
        <>
          <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-green">
            <Check className="h-4 w-4" strokeWidth={2} />
            Completed
            {progress.completedAt ? (
              <span className="normal-case tracking-normal text-muted">
                {formatShortDate(progress.completedAt)}
              </span>
            ) : null}
          </span>
          <button
            type="button"
            onClick={() => update("started")}
            disabled={pending}
            className="btn btn-sm btn-ghost"
          >
            Mark unread
          </button>
        </>
      ) : (
        <>
          {progress?.status !== "started" ? (
            <button
              type="button"
              onClick={() => update("started")}
              disabled={pending}
              className="btn btn-sm"
            >
              Start lesson
            </button>
          ) : (
            <span className="font-sans text-xs uppercase tracking-[0.12em] text-muted">
              In progress
            </span>
          )}
          <button
            type="button"
            onClick={() => update("completed")}
            disabled={pending}
            className="btn btn-sm btn-primary"
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2} />
            Mark complete
          </button>
        </>
      )}
      {failed ? (
        <span className="font-sans text-xs text-burgundy">Could not save. Try again.</span>
      ) : null}
    </div>
  );
}
