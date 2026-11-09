"use client";

import { useState } from "react";
import Link from "next/link";
import { PenLine } from "lucide-react";
import {
  useNotebook,
  type NoteDraft,
} from "@/components/notebook/notebook-provider";
import { routes } from "@/lib/routes";

type QuickNoteProps = {
  entityType: NoteDraft["entityType"];
  entitySlug: string;
  entityTitle: string;
  entityHref: string;
};

export function QuickNote({
  entityType,
  entitySlug,
  entityTitle,
  entityHref,
}: QuickNoteProps) {
  const { createNote } = useNotebook();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(`Note on ${entityTitle}`);
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!body.trim()) return;
    setStatus("saving");
    const ok = await createNote({
      title: title.trim() || `Note on ${entityTitle}`,
      body: body.trim(),
      entityType: entityType ?? null,
      entitySlug,
      entityTitle,
      entityHref,
    });
    if (ok) {
      setBody("");
      setStatus("saved");
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="border-t border-line pt-4">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-green hover:text-green-deep"
      >
        <PenLine className="h-3.5 w-3.5" strokeWidth={1.7} />
        {open ? "Close note" : "Add a note"}
      </button>

      {open ? (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <label className="block">
            <span className="label">Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              maxLength={160}
              className="input mt-1.5"
            />
          </label>
          <label className="block">
            <span className="label">Note</span>
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              maxLength={20000}
              required
              placeholder="What do you want to remember or question?"
              className="textarea mt-1.5 min-h-[7rem]"
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === "saving" || !body.trim()}
              className="btn btn-sm btn-primary"
            >
              {status === "saving" ? "Saving" : "Save note"}
            </button>
            {status === "saved" ? (
              <Link
                href={routes.notebookNotes}
                className="font-sans text-xs text-green underline underline-offset-2"
              >
                View in notebook
              </Link>
            ) : null}
            {status === "error" ? (
              <span className="font-sans text-xs text-burgundy">
                Could not save. Try again.
              </span>
            ) : null}
          </div>
        </form>
      ) : null}
    </div>
  );
}
