"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useNotebook } from "@/components/notebook/notebook-provider";
import { routes } from "@/lib/routes";
import { cn, formatShortDate } from "@/lib/utils";

type Tab = "overview" | "notes" | "bookmarks" | "history" | "practices";

const tabs: Array<{ id: Tab; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "notes", label: "Notes" },
  { id: "bookmarks", label: "Bookmarks" },
  { id: "history", label: "History" },
  { id: "practices", label: "Practices" },
];

const entityLabels: Record<string, string> = {
  lesson: "Lesson",
  philosopher: "Philosopher",
  concept: "Concept",
  practice: "Practice",
  path: "Path",
  topic: "Topic",
  tradition: "Tradition",
  branch: "Branch",
};

export function NotebookClient({ initialTab = "overview" }: { initialTab?: Tab }) {
  const {
    state,
    loading,
    toggleBookmark,
    deletePracticeCompletion,
    createNote,
    updateNote,
    deleteNote,
  } = useNotebook();
  const [tab, setTab] = useState<Tab>(initialTab);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [noteStatus, setNoteStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const stats = useMemo(() => {
    const completed = state.lessonProgress.filter((item) => item.status === "completed").length;
    const started = state.lessonProgress.filter((item) => item.status === "started").length;
    return {
      completed,
      started,
      bookmarks: state.bookmarks.length,
      notes: state.notes.length,
      completions: state.practiceCompletions.length,
      saved: state.savedPractices.length,
    };
  }, [state]);

  async function handleCreateNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!noteBody.trim()) return;
    setNoteStatus("saving");
    const ok = await createNote({
      title: noteTitle.trim() || "Untitled note",
      body: noteBody.trim(),
    });
    if (ok) {
      setNoteTitle("");
      setNoteBody("");
      setNoteStatus("saved");
    } else {
      setNoteStatus("error");
    }
  }

  function beginEdit(noteId: string, title: string, body: string) {
    setEditingId(noteId);
    setEditTitle(title);
    setEditBody(body);
  }

  async function saveEdit(noteId: string) {
    const ok = await updateNote(noteId, {
      title: editTitle.trim() || "Untitled note",
      body: editBody.trim(),
    });
    if (ok) setEditingId(null);
  }

  async function removeNote(noteId: string) {
    if (!window.confirm("Delete this note? This cannot be undone.")) return;
    await deleteNote(noteId);
  }

  return (
    <div className="container-editorial">
      <PageHeader
        eyebrow="Your notebook"
        title="A place to keep the question open"
        intro="Bookmarks, notes, reading history, and practice records. Your notebook is private to you."
      />

      {!loading && !state.authenticated ? (
        <div className="mt-8 flex flex-col gap-3 border border-line bg-paper-deep px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-sm leading-relaxed text-ink-soft">
            This notebook is stored on this device only. Sign in to keep it across
            browsers and devices.
          </p>
          <Link href={routes.signIn} className="btn btn-sm btn-secondary shrink-0">
            Sign in to sync
          </Link>
        </div>
      ) : null}

      {!loading && state.authenticated && state.user ? (
        <p className="mt-6 font-sans text-xs uppercase tracking-[0.12em] text-muted">
          Signed in as {state.user.name} Â· {state.user.email}
        </p>
      ) : null}

      <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: "Completed", value: stats.completed },
          { label: "In progress", value: stats.started },
          { label: "Bookmarks", value: stats.bookmarks },
          { label: "Notes", value: stats.notes },
          { label: "Saved practices", value: stats.saved },
          { label: "Practice log", value: stats.completions },
        ].map((item) => (
          <div key={item.label} className="bg-surface px-4 py-4">
            <p className="label">{item.label}</p>
            <p className="mt-1 font-serif text-2xl text-ink">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="no-scrollbar mt-10 flex gap-7 overflow-x-auto border-b border-line">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={cn("tab shrink-0", tab === item.id && "tab-active")}
          >
            {item.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="py-14 font-sans text-sm text-muted">Loading your notebookâ€¦</p>
      ) : (
        <div className="py-10">
          {tab === "overview" ? renderOverview(setTab) : null}

          {tab === "notes" ? (
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
              <div>
                <div className="flex items-baseline justify-between border-b border-line pb-3">
                  <p className="label">All notes</p>
                  <p className="font-sans text-xs text-muted">{state.notes.length} total</p>
                </div>
                {state.notes.length === 0 ? (
                  <p className="border-b border-line py-8 font-sans text-sm text-muted">
                    No notes yet. Use the form to begin, or add a note from any lesson.
                  </p>
                ) : (
                  <ul>
                    {state.notes.map((note) => (
                      <li key={note.id} className="border-b border-line py-5">
                        {editingId === note.id ? (
                          <div className="space-y-3">
                            <input
                              value={editTitle}
                              onChange={(event) => setEditTitle(event.target.value)}
                              maxLength={160}
                              className="input"
                            />
                            <textarea
                              value={editBody}
                              onChange={(event) => setEditBody(event.target.value)}
                              maxLength={20000}
                              className="textarea min-h-[8rem]"
                            />
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => saveEdit(note.id)}
                                className="btn btn-sm btn-primary"
                              >
                                Save changes
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingId(null)}
                                className="btn btn-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <h2 className="font-serif text-xl text-ink">{note.title}</h2>
                                <p className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                                  {formatShortDate(note.updatedAt)}
                                  {note.entityType
                                    ? ` Â· ${entityLabels[note.entityType] ?? note.entityType}`
                                    : ""}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <button
                                  type="button"
                                  onClick={() => beginEdit(note.id, note.title, note.body)}
                                  className="btn btn-sm btn-ghost"
                                  aria-label="Edit note"
                                >
                                  <Pencil className="h-3.5 w-3.5" strokeWidth={1.7} />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeNote(note.id)}
                                  className="btn btn-sm btn-ghost text-burgundy"
                                  aria-label="Delete note"
                                >
                                  <Trash2 className="h-3.5 w-3.5" strokeWidth={1.7} />
                                </button>
                              </div>
                            </div>
                            <p className="note-body mt-3 font-sans text-sm leading-relaxed text-ink-soft">
                              {note.body}
                            </p>
                            {note.entityHref && note.entityTitle ? (
                              <Link
                                href={note.entityHref}
                                className="mt-2 inline-block font-sans text-xs uppercase tracking-[0.12em] text-green hover:text-green-deep"
                              >
                                Open {note.entityTitle} â†’
                              </Link>
                            ) : null}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <form onSubmit={handleCreateNote} className="panel h-fit space-y-3">
                <p className="label label-green">New note</p>
                <input
                  value={noteTitle}
                  onChange={(event) => setNoteTitle(event.target.value)}
                  placeholder="Title"
                  maxLength={160}
                  className="input"
                />
                <textarea
                  value={noteBody}
                  onChange={(event) => setNoteBody(event.target.value)}
                  placeholder="A question, an objection, a sentence you want to keep."
                  required
                  maxLength={20000}
                  className="textarea min-h-[10rem]"
                />
                <button
                  type="submit"
                  disabled={noteStatus === "saving" || !noteBody.trim()}
                  className="btn btn-sm btn-primary w-full"
                >
                  {noteStatus === "saving" ? "Saving" : "Save note"}
                </button>
                {noteStatus === "saved" ? (
                  <p className="font-sans text-xs text-green">Note saved.</p>
                ) : null}
                {noteStatus === "error" ? (
                  <p className="font-sans text-xs text-burgundy">
                    Could not save the note. Try again.
                  </p>
                ) : null}
              </form>
            </div>
          ) : null}

          {tab === "bookmarks" ? (
            <div>
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <p className="label">Saved entries</p>
                <p className="font-sans text-xs text-muted">{state.bookmarks.length} total</p>
              </div>
              {state.bookmarks.length === 0 ? (
                <p className="border-b border-line py-8 font-sans text-sm text-muted">
                  No bookmarks yet. Use the Save button on any lesson, thinker, or path.
                </p>
              ) : (
                <ul>
                  {state.bookmarks.map((bookmark) => (
                    <li
                      key={bookmark.id}
                      className="flex flex-wrap items-center justify-between gap-3 border-b border-line py-4"
                    >
                      <div>
                        <p className="label">{entityLabels[bookmark.entityType]}</p>
                        <Link
                          href={bookmark.entityHref}
                          className="mt-1 block font-serif text-xl text-ink hover:text-green"
                        >
                          {bookmark.entityTitle}
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-xs text-muted">
                          {formatShortDate(bookmark.createdAt)}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            void toggleBookmark({
                              entityType: bookmark.entityType,
                              entitySlug: bookmark.entitySlug,
                              entityTitle: bookmark.entityTitle,
                              entityHref: bookmark.entityHref,
                            })
                          }
                          className="btn btn-sm btn-ghost text-burgundy"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}

          {tab === "history" ? (
            <div>
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <p className="label">Recently visited</p>
                <p className="font-sans text-xs text-muted">
                  {state.readingHistory.length} entries
                </p>
              </div>
              {state.readingHistory.length === 0 ? (
                <p className="border-b border-line py-8 font-sans text-sm text-muted">
                  Your reading history will appear here as you explore.
                </p>
              ) : (
                <ul>
                  {state.readingHistory.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-wrap items-center justify-between gap-3 border-b border-line py-4"
                    >
                      <div>
                        <p className="label">{entityLabels[item.entityType]}</p>
                        <Link
                          href={item.entityHref}
                          className="mt-1 block font-serif text-xl text-ink hover:text-green"
                        >
                          {item.entityTitle}
                        </Link>
                      </div>
                      <span className="font-sans text-xs text-muted">
                        {formatShortDate(item.lastReadAt)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}

          {tab === "practices" ? (
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-baseline justify-between border-b border-line pb-3">
                  <p className="label">Saved practices</p>
                  <p className="font-sans text-xs text-muted">{state.savedPractices.length}</p>
                </div>
                {state.savedPractices.length === 0 ? (
                  <p className="border-b border-line py-6 font-sans text-sm text-muted">
                    No saved practices yet.
                  </p>
                ) : (
                  <ul>
                    {state.savedPractices.map((practice) => (
                      <li
                        key={practice.id}
                        className="flex items-center justify-between gap-3 border-b border-line py-4"
                      >
                        <Link
                          href={practice.practiceHref}
                          className="font-serif text-lg text-ink hover:text-green"
                        >
                          {practice.practiceTitle}
                        </Link>
                        <Link href={practice.practiceHref} className="btn btn-sm btn-ghost">
                          Open
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <div className="flex items-baseline justify-between border-b border-line pb-3">
                  <p className="label">Practice log</p>
                  <p className="font-sans text-xs text-muted">
                    {state.practiceCompletions.length}
                  </p>
                </div>
                {state.practiceCompletions.length === 0 ? (
                  <p className="border-b border-line py-6 font-sans text-sm text-muted">
                    No completions recorded yet.
                  </p>
                ) : (
                  <ul>
                    {state.practiceCompletions.map((completion) => (
                      <li key={completion.id} className="border-b border-line py-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link
                              href={completion.practiceHref}
                              className="font-serif text-lg text-ink hover:text-green"
                            >
                              {completion.practiceTitle}
                            </Link>
                            <p className="mt-1 font-sans text-xs text-muted">
                              {formatShortDate(completion.completedAt)}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => void deletePracticeCompletion(completion.id)}
                            className="btn btn-sm btn-ghost text-burgundy"
                            aria-label="Delete practice record"
                          >
                            <Trash2 className="h-3.5 w-3.5" strokeWidth={1.7} />
                          </button>
                        </div>
                        {completion.reflection ? (
                          <p className="note-body mt-2 font-sans text-sm leading-relaxed text-muted">
                            {completion.reflection}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );

  function renderOverview(onNavigate: (next: Tab) => void) {
    const recentHistory = state.readingHistory.slice(0, 4);
    const activeLessons = state.lessonProgress.slice(0, 4);
    const recentNotes = state.notes.slice(0, 3);
    const recentCompletions = state.practiceCompletions.slice(0, 3);

    return (
      <div className="grid gap-10 lg:grid-cols-2">
        <section>
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <p className="label">Continue reading</p>
            <button
              type="button"
              onClick={() => onNavigate("history")}
              className="font-sans text-xs uppercase tracking-[0.12em] text-green"
            >
              All history
            </button>
          </div>
          {recentHistory.length === 0 ? (
            <div className="border-b border-line py-6">
              <p className="font-sans text-sm text-muted">
                Nothing here yet. The first lesson is a good place to begin.
              </p>
              <Link href={routes.lesson("what-is-philosophy")} className="btn btn-sm btn-secondary mt-3">
                Begin with What Is Philosophy?
              </Link>
            </div>
          ) : (
            <ul>
              {recentHistory.map((item) => (
                <li key={item.id} className="border-b border-line py-3.5">
                  <Link
                    href={item.entityHref}
                    className="flex items-baseline justify-between gap-3 font-serif text-lg text-ink hover:text-green"
                  >
                    <span>{item.entityTitle}</span>
                    <span className="shrink-0 font-sans text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                      {entityLabels[item.entityType]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <p className="label">Lesson progress</p>
            <span className="font-sans text-xs text-muted">{stats.completed} complete</span>
          </div>
          {activeLessons.length === 0 ? (
            <p className="border-b border-line py-6 font-sans text-sm text-muted">
              Mark a lesson as started or complete to track your progress.
            </p>
          ) : (
            <ul>
              {activeLessons.map((lesson) => (
                <li key={lesson.lessonSlug} className="border-b border-line py-3.5">
                  <Link
                    href={lesson.lessonHref}
                    className="flex items-baseline justify-between gap-3 font-serif text-lg text-ink hover:text-green"
                  >
                    <span>{lesson.lessonTitle}</span>
                    <span className="shrink-0 font-sans text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                      {lesson.status === "completed" ? "Complete" : "Started"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <p className="label">Recent notes</p>
            <button
              type="button"
              onClick={() => onNavigate("notes")}
              className="font-sans text-xs uppercase tracking-[0.12em] text-green"
            >
              All notes
            </button>
          </div>
          {recentNotes.length === 0 ? (
            <p className="border-b border-line py-6 font-sans text-sm text-muted">
              Notes you write on lessons will appear here.
            </p>
          ) : (
            <ul>
              {recentNotes.map((note) => (
                <li key={note.id} className="border-b border-line py-3.5">
                  <p className="font-serif text-lg text-ink">{note.title}</p>
                  <p className="mt-1 line-clamp-2 font-sans text-sm leading-relaxed text-muted">
                    {note.body}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <p className="label">Practice</p>
            <button
              type="button"
              onClick={() => onNavigate("practices")}
              className="font-sans text-xs uppercase tracking-[0.12em] text-green"
            >
              All practice
            </button>
          </div>
          {recentCompletions.length === 0 && state.savedPractices.length === 0 ? (
            <p className="border-b border-line py-6 font-sans text-sm text-muted">
              Save a practice from Apply and record completions here.
            </p>
          ) : (
            <ul>
              {state.savedPractices.slice(0, 2).map((practice) => (
                <li key={practice.id} className="border-b border-line py-3.5">
                  <Link
                    href={practice.practiceHref}
                    className="font-serif text-lg text-ink hover:text-green"
                  >
                    {practice.practiceTitle}
                  </Link>
                  <p className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                    Saved practice
                  </p>
                </li>
              ))}
              {recentCompletions.map((completion) => (
                <li key={completion.id} className="border-b border-line py-3.5">
                  <Link
                    href={completion.practiceHref}
                    className="font-serif text-lg text-ink hover:text-green"
                  >
                    {completion.practiceTitle}
                  </Link>
                  <p className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                    Completed {formatShortDate(completion.completedAt)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="lg:col-span-2">
          <div className="border border-line bg-paper-deep p-5">
            <p className="label label-green">A note on progress</p>
            <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-ink-soft">
              The notebook is a record, not a measure of worth. You are allowed to read
              without saving, to disagree with a lesson, and to leave a question open.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

