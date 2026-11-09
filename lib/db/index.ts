import fs from "node:fs";
import path from "node:path";
import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import * as schema from "./schema";

function createDrizzle(client: PGlite) {
  return drizzle(client, { schema });
}

export type Database = ReturnType<typeof createDrizzle>;

type DbGlobal = typeof globalThis & {
  __philosophyPglite?: PGlite;
  __philosophyDb?: Database;
  __philosophyDbReady?: Promise<Database>;
};

const globalForDb = globalThis as DbGlobal;

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS users (
  id text PRIMARY KEY,
  email text NOT NULL,
  name text NOT NULL,
  password_hash text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS users_email_unique ON users (email);

CREATE TABLE IF NOT EXISTS sessions (
  id text PRIMARY KEY,
  user_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash text NOT NULL,
  expires_at timestamp with time zone NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS sessions_token_hash_unique ON sessions (token_hash);
CREATE INDEX IF NOT EXISTS sessions_user_id_idx ON sessions (user_id);

CREATE TABLE IF NOT EXISTS bookmarks (
  id text PRIMARY KEY,
  user_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  entity_type text NOT NULL,
  entity_slug text NOT NULL,
  entity_title text NOT NULL,
  entity_href text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS bookmarks_owner_entity_unique
  ON bookmarks (user_id, entity_type, entity_slug);
CREATE INDEX IF NOT EXISTS bookmarks_user_id_idx ON bookmarks (user_id);

CREATE TABLE IF NOT EXISTS notes (
  id text PRIMARY KEY,
  user_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title text NOT NULL,
  body text NOT NULL,
  entity_type text,
  entity_slug text,
  entity_title text,
  entity_href text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS notes_user_id_idx ON notes (user_id);

CREATE TABLE IF NOT EXISTS lesson_progress (
  id text PRIMARY KEY,
  user_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  lesson_slug text NOT NULL,
  lesson_title text NOT NULL,
  lesson_href text NOT NULL,
  status text NOT NULL,
  completed_at timestamp with time zone,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS lesson_progress_owner_lesson_unique
  ON lesson_progress (user_id, lesson_slug);
CREATE INDEX IF NOT EXISTS lesson_progress_user_id_idx ON lesson_progress (user_id);

CREATE TABLE IF NOT EXISTS reading_history (
  id text PRIMARY KEY,
  user_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  entity_type text NOT NULL,
  entity_slug text NOT NULL,
  entity_title text NOT NULL,
  entity_href text NOT NULL,
  last_read_at timestamp with time zone NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS reading_history_owner_entity_unique
  ON reading_history (user_id, entity_type, entity_slug);
CREATE INDEX IF NOT EXISTS reading_history_user_id_idx ON reading_history (user_id);

CREATE TABLE IF NOT EXISTS saved_practices (
  id text PRIMARY KEY,
  user_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  practice_slug text NOT NULL,
  practice_title text NOT NULL,
  practice_href text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS saved_practices_owner_practice_unique
  ON saved_practices (user_id, practice_slug);
CREATE INDEX IF NOT EXISTS saved_practices_user_id_idx ON saved_practices (user_id);

CREATE TABLE IF NOT EXISTS practice_completions (
  id text PRIMARY KEY,
  user_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  practice_slug text NOT NULL,
  practice_title text NOT NULL,
  practice_href text NOT NULL,
  reflection text,
  completed_at timestamp with time zone NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS practice_completions_user_id_idx
  ON practice_completions (user_id);
CREATE INDEX IF NOT EXISTS practice_completions_practice_slug_idx
  ON practice_completions (practice_slug);
`;

async function initialize(): Promise<Database> {
  const dataDir =
    process.env.PHILOSOPHY_DATA_DIR ??
    path.join(process.cwd(), ".data", "pglite");
  fs.mkdirSync(path.dirname(dataDir), { recursive: true });

  const client = new PGlite(dataDir);
  await client.exec(SCHEMA_SQL);
  const db = createDrizzle(client);

  globalForDb.__philosophyPglite = client;
  globalForDb.__philosophyDb = db;
  return db;
}

export async function getDb(): Promise<Database> {
  if (globalForDb.__philosophyDb) return globalForDb.__philosophyDb;
  if (!globalForDb.__philosophyDbReady) {
    globalForDb.__philosophyDbReady = initialize().catch((error: unknown) => {
      globalForDb.__philosophyDbReady = undefined;
      throw error;
    });
  }
  return globalForDb.__philosophyDbReady;
}
