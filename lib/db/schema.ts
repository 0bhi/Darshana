import {
  index,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    passwordHash: text("password_hash").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("users_email_unique").on(table.email)],
);

export const sessions = pgTable(
  "sessions",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("sessions_token_hash_unique").on(table.tokenHash),
    index("sessions_user_id_idx").on(table.userId),
  ],
);

export const bookmarks = pgTable(
  "bookmarks",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    entityType: text("entity_type").notNull(),
    entitySlug: text("entity_slug").notNull(),
    entityTitle: text("entity_title").notNull(),
    entityHref: text("entity_href").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("bookmarks_owner_entity_unique").on(
      table.userId,
      table.entityType,
      table.entitySlug,
    ),
    index("bookmarks_user_id_idx").on(table.userId),
  ],
);

export const notes = pgTable(
  "notes",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    body: text("body").notNull(),
    entityType: text("entity_type"),
    entitySlug: text("entity_slug"),
    entityTitle: text("entity_title"),
    entityHref: text("entity_href"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("notes_user_id_idx").on(table.userId)],
);

export const lessonProgress = pgTable(
  "lesson_progress",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonSlug: text("lesson_slug").notNull(),
    lessonTitle: text("lesson_title").notNull(),
    lessonHref: text("lesson_href").notNull(),
    status: text("status").notNull(),
    completedAt: timestamp("completed_at", { withTimezone: true }),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("lesson_progress_owner_lesson_unique").on(
      table.userId,
      table.lessonSlug,
    ),
    index("lesson_progress_user_id_idx").on(table.userId),
  ],
);

export const readingHistory = pgTable(
  "reading_history",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    entityType: text("entity_type").notNull(),
    entitySlug: text("entity_slug").notNull(),
    entityTitle: text("entity_title").notNull(),
    entityHref: text("entity_href").notNull(),
    lastReadAt: timestamp("last_read_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("reading_history_owner_entity_unique").on(
      table.userId,
      table.entityType,
      table.entitySlug,
    ),
    index("reading_history_user_id_idx").on(table.userId),
  ],
);

export const savedPractices = pgTable(
  "saved_practices",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    practiceSlug: text("practice_slug").notNull(),
    practiceTitle: text("practice_title").notNull(),
    practiceHref: text("practice_href").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex("saved_practices_owner_practice_unique").on(
      table.userId,
      table.practiceSlug,
    ),
    index("saved_practices_user_id_idx").on(table.userId),
  ],
);

export const practiceCompletions = pgTable(
  "practice_completions",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    practiceSlug: text("practice_slug").notNull(),
    practiceTitle: text("practice_title").notNull(),
    practiceHref: text("practice_href").notNull(),
    reflection: text("reflection"),
    completedAt: timestamp("completed_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("practice_completions_user_id_idx").on(table.userId),
    index("practice_completions_practice_slug_idx").on(table.practiceSlug),
  ],
);

export type User = typeof users.$inferSelect;
export type Session = typeof sessions.$inferSelect;
export type Bookmark = typeof bookmarks.$inferSelect;
export type Note = typeof notes.$inferSelect;
export type LessonProgressRow = typeof lessonProgress.$inferSelect;
export type ReadingHistoryRow = typeof readingHistory.$inferSelect;
export type SavedPracticeRow = typeof savedPractices.$inferSelect;
export type PracticeCompletionRow = typeof practiceCompletions.$inferSelect;
