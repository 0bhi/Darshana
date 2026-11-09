import { NextResponse } from "next/server";
import { bookmarkSchema } from "@/lib/api-schemas";
import { getSessionUser } from "@/lib/auth/session";
import { assertSameOrigin, checkRateLimit, jsonError } from "@/lib/http";
import { setBookmark } from "@/lib/notebook/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  const user = await getSessionUser();
  if (!user) return jsonError("Sign in to save bookmarks", 401);

  const limit = checkRateLimit(`bookmarks:${user.id}`, 120, 60_000);
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

  const parsed = bookmarkSchema.safeParse(payload);
  if (!parsed.success) return jsonError("Invalid bookmark", 400, parsed.error.flatten());

  const { entityType, entitySlug, entityTitle, entityHref, saved } = parsed.data;
  await setBookmark(user.id, entityType, entitySlug, entityTitle, entityHref, saved);

  return NextResponse.json({ ok: true });
}
