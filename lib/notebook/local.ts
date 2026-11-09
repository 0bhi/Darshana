import {
  emptyNotebookState,
  isEntityType,
  type NotebookBookmark,
  type NotebookHistoryItem,
  type NotebookLessonProgress,
  type NotebookNote,
  type NotebookPracticeCompletion,
  type NotebookSavedPractice,
  type NotebookState,
} from "@/lib/notebook/types";

const STORAGE_KEY = "philosophy-academy-notebook-v1";

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

export function readLocalNotebook(): NotebookState {
  if (typeof window === "undefined") return emptyNotebookState(true);

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyNotebookState(true);
    const parsed = JSON.parse(raw) as Partial<NotebookState>;

    return {
      authenticated: false,
      local: true,
      user: null,
      bookmarks: asArray<NotebookBookmark>(parsed.bookmarks).filter((item) =>
        isEntityType(item.entityType),
      ),
      notes: asArray<NotebookNote>(parsed.notes),
      lessonProgress: asArray<NotebookLessonProgress>(parsed.lessonProgress),
      readingHistory: asArray<NotebookHistoryItem>(parsed.readingHistory).filter((item) =>
        isEntityType(item.entityType),
      ),
      savedPractices: asArray<NotebookSavedPractice>(parsed.savedPractices),
      practiceCompletions: asArray<NotebookPracticeCompletion>(parsed.practiceCompletions),
    };
  } catch {
    return emptyNotebookState(true);
  }
}

export function writeLocalNotebook(state: NotebookState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        bookmarks: state.bookmarks,
        notes: state.notes,
        lessonProgress: state.lessonProgress,
        readingHistory: state.readingHistory,
        savedPractices: state.savedPractices,
        practiceCompletions: state.practiceCompletions,
      }),
    );
  } catch {
    return;
  }
}

export function clearLocalNotebook() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
}
