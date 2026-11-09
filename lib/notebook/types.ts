export const ENTITY_TYPES = [
  "lesson",
  "philosopher",
  "concept",
  "practice",
  "path",
  "topic",
  "tradition",
  "branch",
] as const;

export type EntityType = (typeof ENTITY_TYPES)[number];

export type NotebookBookmark = {
  id: string;
  entityType: EntityType;
  entitySlug: string;
  entityTitle: string;
  entityHref: string;
  createdAt: string;
};

export type NotebookNote = {
  id: string;
  title: string;
  body: string;
  entityType: EntityType | null;
  entitySlug: string | null;
  entityTitle: string | null;
  entityHref: string | null;
  createdAt: string;
  updatedAt: string;
};

export type NotebookLessonProgress = {
  lessonSlug: string;
  lessonTitle: string;
  lessonHref: string;
  status: "started" | "completed";
  completedAt: string | null;
  updatedAt: string;
};

export type NotebookHistoryItem = {
  id: string;
  entityType: EntityType;
  entitySlug: string;
  entityTitle: string;
  entityHref: string;
  lastReadAt: string;
};

export type NotebookSavedPractice = {
  id: string;
  practiceSlug: string;
  practiceTitle: string;
  practiceHref: string;
  createdAt: string;
};

export type NotebookPracticeCompletion = {
  id: string;
  practiceSlug: string;
  practiceTitle: string;
  practiceHref: string;
  reflection: string | null;
  completedAt: string;
};

export type NotebookUser = {
  id: string;
  name: string;
  email: string;
};

export type NotebookState = {
  authenticated: boolean;
  local: boolean;
  user: NotebookUser | null;
  bookmarks: NotebookBookmark[];
  notes: NotebookNote[];
  lessonProgress: NotebookLessonProgress[];
  readingHistory: NotebookHistoryItem[];
  savedPractices: NotebookSavedPractice[];
  practiceCompletions: NotebookPracticeCompletion[];
};

export function emptyNotebookState(local = true): NotebookState {
  return {
    authenticated: false,
    local,
    user: null,
    bookmarks: [],
    notes: [],
    lessonProgress: [],
    readingHistory: [],
    savedPractices: [],
    practiceCompletions: [],
  };
}

export function isEntityType(value: string): value is EntityType {
  return (ENTITY_TYPES as readonly string[]).includes(value);
}
