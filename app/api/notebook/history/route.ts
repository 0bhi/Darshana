import { NextResponse } from "next/server";
import { historySchema } from "@/lib/api-schemas";
import { getSessionUser } from "@/lib/auth/session";
import { assertSameOrigin, checkRateLimit, jsonError } from "@/lib/http";
import { recordReadingHistory } from "@/lib/notebook/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  const user = await getSessionUser();
  if (!user) return jsonError("Sign in to record history", 401);

  const limit = checkRateLimit(`history:${user.id}`, 240, 60_000);
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

  const parsed = historySchema.safeParse(payload);
  if (!parsed.success) return jsonError("Invalid history entry", 400, parsed.error.flatten());

  const { entityType, entitySlug, entityTitle, entityHref } = parsed.data;
  await recordReadingHistory(user.id, entityType, entitySlug, entityTitle, entityHref);

  return NextResponse.json({ ok: true });
}
