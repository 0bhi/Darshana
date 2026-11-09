import { randomUUID } from "node:crypto";
import { and, desc, eq } from "drizzle-orm";
import { getDb } from "@/lib/db";
import {
  bookmarks,
  lessonProgress,
  notes,
  practiceCompletions,
  readingHistory,
  savedPractices,
} from "@/lib/db/schema";
import type {
  EntityType,
  NotebookState,
  NotebookUser,
} from "@/lib/notebook/types";

function iso(value: Date | null | undefined): string | null {
  return value ? value.toISOString() : null;
}

export async function getNotebookState(
  userId: string,
  user: NotebookUser,
): Promise<NotebookState> {
  const db = await getDb();

  const [bookmarkRows, noteRows, progressRows, historyRows, savedRows, completionRows] =
    await Promise.all([
      db.select().from(bookmarks).where(eq(bookmarks.userId, userId)).orderBy(desc(bookmarks.createdAt)),
      db.select().from(notes).where(eq(notes.userId, userId)).orderBy(desc(notes.updatedAt)),
      db.select().from(lessonProgress).where(eq(lessonProgress.userId, userId)).orderBy(desc(lessonProgress.updatedAt)),
      db.select().from(readingHistory).where(eq(readingHistory.userId, userId)).orderBy(desc(readingHistory.lastReadAt)),
      db.select().from(savedPractices).where(eq(savedPractices.userId, userId)).orderBy(desc(savedPractices.createdAt)),
      db.select().from(practiceCompletions).where(eq(practiceCompletions.userId, userId)).orderBy(desc(practiceCompletions.completedAt)),
    ]);

  return {
    authenticated: true,
    local: false,
    user,
    bookmarks: bookmarkRows.map((row) => ({
      id: row.id,
      entityType: row.entityType as EntityType,
      entitySlug: row.entitySlug,
      entityTitle: row.entityTitle,
      entityHref: row.entityHref,
      createdAt: row.createdAt.toISOString(),
    })),
    notes: noteRows.map((row) => ({
      id: row.id,
      title: row.title,
      body: row.body,
      entityType: (row.entityType as EntityType | null) ?? null,
      entitySlug: row.entitySlug,
      entityTitle: row.entityTitle,
      entityHref: row.entityHref,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    })),
    lessonProgress: progressRows.map((row) => ({
      lessonSlug: row.lessonSlug,
      lessonTitle: row.lessonTitle,
      lessonHref: row.lessonHref,
      status: row.status === "completed" ? "completed" : "started",
      completedAt: iso(row.completedAt),
      updatedAt: row.updatedAt.toISOString(),
    })),
    readingHistory: historyRows.map((row) => ({
      id: row.id,
      entityType: row.entityType as EntityType,
      entitySlug: row.entitySlug,
      entityTitle: row.entityTitle,
      entityHref: row.entityHref,
      lastReadAt: row.lastReadAt.toISOString(),
    })),
    savedPractices: savedRows.map((row) => ({
      id: row.id,
      practiceSlug: row.practiceSlug,
      practiceTitle: row.practiceTitle,
      practiceHref: row.practiceHref,
      createdAt: row.createdAt.toISOString(),
    })),
    practiceCompletions: completionRows.map((row) => ({
      id: row.id,
      practiceSlug: row.practiceSlug,
      practiceTitle: row.practiceTitle,
      practiceHref: row.practiceHref,
      reflection: row.reflection,
      completedAt: row.completedAt.toISOString(),
    })),
  };
}

export async function setBookmark(
  userId: string,
  entityType: EntityType,
  entitySlug: string,
  entityTitle: string,
  entityHref: string,
  saved: boolean,
): Promise<void> {
  const db = await getDb();
  if (saved) {
    await db
      .insert(bookmarks)
      .values({
        id: randomUUID(),
        userId,
        entityType,
        entitySlug,
        entityTitle,
        entityHref,
      })
      .onConflictDoUpdate({
        target: [bookmarks.userId, bookmarks.entityType, bookmarks.entitySlug],
        set: { entityTitle, entityHref },
      });
    return;
  }

  await db
    .delete(bookmarks)
    .where(
      and(
        eq(bookmarks.userId, userId),
        eq(bookmarks.entityType, entityType),
        eq(bookmarks.entitySlug, entitySlug),
      ),
    );
}

export async function setLessonProgress(
  userId: string,
  lessonSlug: string,
  lessonTitle: string,
  lessonHref: string,
  status: "started" | "completed",
): Promise<void> {
  const db = await getDb();
  const now = new Date();
  await db
    .insert(lessonProgress)
    .values({
      id: randomUUID(),
      userId,
      lessonSlug,
      lessonTitle,
      lessonHref,
      status,
      completedAt: status === "completed" ? now : null,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: [lessonProgress.userId, lessonProgress.lessonSlug],
      set: {
        lessonTitle,
        lessonHref,
        status,
        completedAt: status === "completed" ? now : null,
        updatedAt: now,
      },
    });
}

export async function recordReadingHistory(
  userId: string,
  entityType: EntityType,
  entitySlug: string,
  entityTitle: string,
  entityHref: string,
): Promise<void> {
  const db = await getDb();
  const now = new Date();
  await db
    .insert(readingHistory)
    .values({
      id: randomUUID(),
      userId,
      entityType,
      entitySlug,
      entityTitle,
      entityHref,
      lastReadAt: now,
    })
    .onConflictDoUpdate({
      target: [readingHistory.userId, readingHistory.entityType, readingHistory.entitySlug],
      set: { entityTitle, entityHref, lastReadAt: now },
    });
}

export async function setPracticeSaved(
  userId: string,
  practiceSlug: string,
  practiceTitle: string,
  practiceHref: string,
  saved: boolean,
): Promise<void> {
  const db = await getDb();
  if (saved) {
    await db
      .insert(savedPractices)
      .values({
        id: randomUUID(),
        userId,
        practiceSlug,
        practiceTitle,
        practiceHref,
      })
      .onConflictDoUpdate({
        target: [savedPractices.userId, savedPractices.practiceSlug],
        set: { practiceTitle, practiceHref },
      });
    return;
  }

  await db
    .delete(savedPractices)
    .where(
      and(
        eq(savedPractices.userId, userId),
        eq(savedPractices.practiceSlug, practiceSlug),
      ),
    );
}

export async function addPracticeCompletion(
  userId: string,
  practiceSlug: string,
  practiceTitle: string,
  practiceHref: string,
  reflection: string | null,
) {
  const db = await getDb();
  const row = {
    id: randomUUID(),
    userId,
    practiceSlug,
    practiceTitle,
    practiceHref,
    reflection,
    completedAt: new Date(),
  };
  await db.insert(practiceCompletions).values(row);
  return row;
}

export async function deletePracticeCompletion(
  userId: string,
  completionId: string,
): Promise<void> {
  const db = await getDb();
  await db
    .delete(practiceCompletions)
    .where(
      and(
        eq(practiceCompletions.userId, userId),
        eq(practiceCompletions.id, completionId),
      ),
    );
}

export async function createNote(
  userId: string,
  input: {
    title: string;
    body: string;
    entityType: EntityType | null;
    entitySlug: string | null;
    entityTitle: string | null;
    entityHref: string | null;
  },
) {
  const db = await getDb();
  const now = new Date();
  const row = {
    id: randomUUID(),
    userId,
    title: input.title,
    body: input.body,
    entityType: input.entityType,
    entitySlug: input.entitySlug,
    entityTitle: input.entityTitle,
    entityHref: input.entityHref,
    createdAt: now,
    updatedAt: now,
  };
  await db.insert(notes).values(row);
  return row;
}

export async function updateNote(
  userId: string,
  noteId: string,
  input: { title: string; body: string },
): Promise<void> {
  const db = await getDb();
  await db
    .update(notes)
    .set({ title: input.title, body: input.body, updatedAt: new Date() })
    .where(and(eq(notes.userId, userId), eq(notes.id, noteId)));
}

export async function deleteNote(userId: string, noteId: string): Promise<void> {
  const db = await getDb();
  await db.delete(notes).where(and(eq(notes.userId, userId), eq(notes.id, noteId)));
}
