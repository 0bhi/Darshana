"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { readLocalNotebook, writeLocalNotebook } from "@/lib/notebook/local";
import {
  emptyNotebookState,
  type EntityType,
  type NotebookLessonProgress,
  type NotebookState,
} from "@/lib/notebook/types";

export type BookmarkTarget = {
  entityType: EntityType;
  entitySlug: string;
  entityTitle: string;
  entityHref: string;
};

export type ProgressTarget = {
  lessonSlug: string;
  lessonTitle: string;
  lessonHref: string;
  status: "started" | "completed";
};

export type HistoryTarget = {
  entityType: EntityType;
  entitySlug: string;
  entityTitle: string;
  entityHref: string;
};

export type PracticeTarget = {
  practiceSlug: string;
  practiceTitle: string;
  practiceHref: string;
};

export type NoteDraft = {
  title: string;
  body: string;
  entityType?: EntityType | null;
  entitySlug?: string | null;
  entityTitle?: string | null;
  entityHref?: string | null;
};

type NotebookContextValue = {
  state: NotebookState;
  loading: boolean;
  refresh: () => Promise<void>;
  isBookmarked: (entityType: EntityType, entitySlug: string) => boolean;
  toggleBookmark: (target: BookmarkTarget) => Promise<boolean>;
  getLessonProgress: (lessonSlug: string) => NotebookLessonProgress | null;
  setLessonProgress: (target: ProgressTarget) => Promise<boolean>;
  recordHistory: (target: HistoryTarget) => Promise<boolean>;
  isPracticeSaved: (practiceSlug: string) => boolean;
  togglePracticeSaved: (target: PracticeTarget) => Promise<boolean>;
  addPracticeCompletion: (target: PracticeTarget, reflection: string | null) => Promise<boolean>;
  deletePracticeCompletion: (completionId: string) => Promise<boolean>;
  createNote: (draft: NoteDraft) => Promise<boolean>;
  updateNote: (noteId: string, draft: { title: string; body: string }) => Promise<boolean>;
  deleteNote: (noteId: string) => Promise<boolean>;
};

const NotebookContext = createContext<NotebookContextValue | null>(null);

function nowIso() {
  return new Date().toISOString();
}

function localId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `local-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

async function sendJson(path: string, method: string, body: unknown) {
  const response = await fetch(path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return response.ok;
}

export function NotebookProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<NotebookState>(() => emptyNotebookState(true));
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch("/api/notebook", { cache: "no-store" });
      if (!response.ok) throw new Error("Notebook request failed");
      const data = (await response.json()) as NotebookState;
      if (data.authenticated) {
        setState(data);
        setHydrated(true);
        setLoading(false);
        return;
      }
    } catch {
      setState(readLocalNotebook());
      setHydrated(true);
      setLoading(false);
      return;
    }

    setState(readLocalNotebook());
    setHydrated(true);
    setLoading(false);
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  useEffect(() => {
    if (hydrated && !state.authenticated) {
      writeLocalNotebook(state);
    }
  }, [hydrated, state]);

  const isBookmarked = useCallback(
    (entityType: EntityType, entitySlug: string) =>
      state.bookmarks.some(
        (item) => item.entityType === entityType && item.entitySlug === entitySlug,
      ),
    [state.bookmarks],
  );

  const toggleBookmark = useCallback(
    async (target: BookmarkTarget) => {
      const saved = !state.bookmarks.some(
        (item) =>
          item.entityType === target.entityType && item.entitySlug === target.entitySlug,
      );

      if (saved) {
        setState((current) => ({
          ...current,
          bookmarks: [
            {
              id: localId(),
              ...target,
              createdAt: nowIso(),
            },
            ...current.bookmarks,
          ],
        }));
      } else {
        setState((current) => ({
          ...current,
          bookmarks: current.bookmarks.filter(
            (item) =>
              !(
                item.entityType === target.entityType &&
                item.entitySlug === target.entitySlug
              ),
          ),
        }));
      }

      if (!state.authenticated) return true;

      const ok = await sendJson("/api/notebook/bookmarks", "POST", {
        ...target,
        saved,
      });
      if (!ok) await refresh();
      return ok;
    },
    [refresh, state.authenticated, state.bookmarks],
  );

  const getLessonProgress = useCallback(
    (lessonSlug: string) =>
      state.lessonProgress.find((item) => item.lessonSlug === lessonSlug) ?? null,
    [state.lessonProgress],
  );

  const setLessonProgress = useCallback(
    async (target: ProgressTarget) => {
      const timestamp = nowIso();
      setState((current) => {
        const existing = current.lessonProgress.find(
          (item) => item.lessonSlug === target.lessonSlug,
        );
        const next: NotebookLessonProgress = {
          lessonSlug: target.lessonSlug,
          lessonTitle: target.lessonTitle,
          lessonHref: target.lessonHref,
          status: target.status,
          completedAt: target.status === "completed" ? timestamp : null,
          updatedAt: timestamp,
        };
        return {
          ...current,
          lessonProgress: existing
            ? current.lessonProgress.map((item) =>
                item.lessonSlug === target.lessonSlug ? next : item,
              )
            : [next, ...current.lessonProgress],
        };
      });

      if (!state.authenticated) return true;
      const ok = await sendJson("/api/notebook/progress", "POST", target);
      if (!ok) await refresh();
      return ok;
    },
    [refresh, state.authenticated],
  );

  const recordHistory = useCallback(
    async (target: HistoryTarget) => {
      const timestamp = nowIso();
      setState((current) => {
        const existing = current.readingHistory.find(
          (item) =>
            item.entityType === target.entityType && item.entitySlug === target.entitySlug,
        );
        return {
          ...current,
          readingHistory: [
            {
              id: existing?.id ?? localId(),
              ...target,
              lastReadAt: timestamp,
            },
            ...current.readingHistory.filter(
              (item) =>
                !(
                  item.entityType === target.entityType &&
                  item.entitySlug === target.entitySlug
                ),
            ),
          ],
        };
      });

      if (!state.authenticated) return true;
      const ok = await sendJson("/api/notebook/history", "POST", target);
      if (!ok) await refresh();
      return ok;
    },
    [refresh, state.authenticated],
  );

  const isPracticeSaved = useCallback(
    (practiceSlug: string) =>
      state.savedPractices.some((item) => item.practiceSlug === practiceSlug),
    [state.savedPractices],
  );

  const togglePracticeSaved = useCallback(
    async (target: PracticeTarget) => {
      const saved = !state.savedPractices.some(
        (item) => item.practiceSlug === target.practiceSlug,
      );

      if (saved) {
        setState((current) => ({
          ...current,
          savedPractices: [
            { id: localId(), ...target, createdAt: nowIso() },
            ...current.savedPractices,
          ],
        }));
      } else {
        setState((current) => ({
          ...current,
          savedPractices: current.savedPractices.filter(
            (item) => item.practiceSlug !== target.practiceSlug,
          ),
        }));
      }

      if (!state.authenticated) return true;
      const ok = await sendJson("/api/notebook/practices", "POST", {
        action: "save",
        ...target,
        saved,
      });
      if (!ok) await refresh();
      return ok;
    },
    [refresh, state.authenticated, state.savedPractices],
  );

  const addPracticeCompletion = useCallback(
    async (target: PracticeTarget, reflection: string | null) => {
      const completedAt = nowIso();
      setState((current) => ({
        ...current,
        practiceCompletions: [
          {
            id: localId(),
            ...target,
            reflection,
            completedAt,
          },
          ...current.practiceCompletions,
        ],
      }));

      if (!state.authenticated) return true;
      const ok = await sendJson("/api/notebook/practices", "POST", {
        action: "complete",
        ...target,
        reflection,
      });
      if (ok) {
        await refresh();
      } else {
        await refresh();
      }
      return ok;
    },
    [refresh, state.authenticated],
  );

  const deletePracticeCompletion = useCallback(
    async (completionId: string) => {
      setState((current) => ({
        ...current,
        practiceCompletions: current.practiceCompletions.filter(
          (item) => item.id !== completionId,
        ),
      }));

      if (!state.authenticated) return true;
      const ok = await sendJson("/api/notebook/practices", "POST", {
        action: "delete-completion",
        completionId,
      });
      if (!ok) await refresh();
      return ok;
    },
    [refresh, state.authenticated],
  );

  const createNote = useCallback(
    async (draft: NoteDraft) => {
      const timestamp = nowIso();
      setState((current) => ({
        ...current,
        notes: [
          {
            id: localId(),
            title: draft.title,
            body: draft.body,
            entityType: draft.entityType ?? null,
            entitySlug: draft.entitySlug ?? null,
            entityTitle: draft.entityTitle ?? null,
            entityHref: draft.entityHref ?? null,
            createdAt: timestamp,
            updatedAt: timestamp,
          },
          ...current.notes,
        ],
      }));

      if (!state.authenticated) return true;
      const ok = await sendJson("/api/notebook/notes", "POST", draft);
      if (ok) {
        await refresh();
      } else {
        await refresh();
      }
      return ok;
    },
    [refresh, state.authenticated],
  );

  const updateNote = useCallback(
    async (noteId: string, draft: { title: string; body: string }) => {
      setState((current) => ({
        ...current,
        notes: current.notes.map((note) =>
          note.id === noteId
            ? { ...note, ...draft, updatedAt: nowIso() }
            : note,
        ),
      }));

      if (!state.authenticated) return true;
      const ok = await sendJson("/api/notebook/notes", "PATCH", {
        id: noteId,
        ...draft,
      });
      if (!ok) await refresh();
      return ok;
    },
    [refresh, state.authenticated],
  );

  const deleteNote = useCallback(
    async (noteId: string) => {
      setState((current) => ({
        ...current,
        notes: current.notes.filter((note) => note.id !== noteId),
      }));

      if (!state.authenticated) return true;
      const ok = await sendJson("/api/notebook/notes", "DELETE", { id: noteId });
      if (!ok) await refresh();
      return ok;
    },
    [refresh, state.authenticated],
  );

  const value = useMemo<NotebookContextValue>(
    () => ({
      state,
      loading,
      refresh,
      isBookmarked,
      toggleBookmark,
      getLessonProgress,
      setLessonProgress,
      recordHistory,
      isPracticeSaved,
      togglePracticeSaved,
      addPracticeCompletion,
      deletePracticeCompletion,
      createNote,
      updateNote,
      deleteNote,
    }),
    [
      state,
      loading,
      refresh,
      isBookmarked,
      toggleBookmark,
      getLessonProgress,
      setLessonProgress,
      recordHistory,
      isPracticeSaved,
      togglePracticeSaved,
      addPracticeCompletion,
      deletePracticeCompletion,
      createNote,
      updateNote,
      deleteNote,
    ],
  );

  return <NotebookContext.Provider value={value}>{children}</NotebookContext.Provider>;
}

export function useNotebook() {
  const context = useContext(NotebookContext);
  if (!context) {
    throw new Error("useNotebook must be used within NotebookProvider");
  }
  return context;
}
