import { NextResponse } from "next/server";
import { noteCreateSchema, noteUpdateSchema, idSchema } from "@/lib/api-schemas";
import { getSessionUser } from "@/lib/auth/session";
import { assertSameOrigin, checkRateLimit, jsonError } from "@/lib/http";
import { createNote, deleteNote, updateNote } from "@/lib/notebook/server";

export const runtime = "nodejs";

async function requireUser() {
  const user = await getSessionUser();
  return user;
}

export async function POST(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  const user = await requireUser();
  if (!user) return jsonError("Sign in to save notes", 401);

  const limit = checkRateLimit(`notes:create:${user.id}`, 60, 60_000);
  if (!limit.allowed) {
    return jsonError("Too many requests", 429, {
      retryAfter: limit.retryAfterSeconds,
    });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid JSON");
  }

  const parsed = noteCreateSchema.safeParse(payload);
  if (!parsed.success) return jsonError("Invalid note", 400, parsed.error.flatten());

  const data = parsed.data;
  const hasEntity = data.entityType != null;

  const note = await createNote(user.id, {
    title: data.title,
    body: data.body,
    entityType: hasEntity ? (data.entityType ?? null) : null,
    entitySlug: hasEntity ? (data.entitySlug ?? null) : null,
    entityTitle: hasEntity ? (data.entityTitle ?? null) : null,
    entityHref: hasEntity ? (data.entityHref ?? null) : null,
  });

  return NextResponse.json({ ok: true, id: note.id }, { status: 201 });
}

export async function PATCH(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  const user = await requireUser();
  if (!user) return jsonError("Sign in to edit notes", 401);

  const limit = checkRateLimit(`notes:update:${user.id}`, 120, 60_000);
  if (!limit.allowed) {
    return jsonError("Too many requests", 429, {
      retryAfter: limit.retryAfterSeconds,
    });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid JSON");
  }

  const parsed = noteUpdateSchema.safeParse(payload);
  if (!parsed.success) return jsonError("Invalid note", 400, parsed.error.flatten());

  await updateNote(user.id, parsed.data.id, {
    title: parsed.data.title,
    body: parsed.data.body,
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  const user = await requireUser();
  if (!user) return jsonError("Sign in to delete notes", 401);

  const limit = checkRateLimit(`notes:delete:${user.id}`, 60, 60_000);
  if (!limit.allowed) {
    return jsonError("Too many requests", 429, {
      retryAfter: limit.retryAfterSeconds,
    });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid JSON");
  }

  const parsed = idSchema.safeParse(payload);
  if (!parsed.success) return jsonError("Invalid note id", 400, parsed.error.flatten());

  await deleteNote(user.id, parsed.data.id);
  return NextResponse.json({ ok: true });
}
