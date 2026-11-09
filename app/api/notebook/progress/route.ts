import { NextResponse } from "next/server";
import { lessonProgressSchema } from "@/lib/api-schemas";
import { getSessionUser } from "@/lib/auth/session";
import { assertSameOrigin, checkRateLimit, jsonError } from "@/lib/http";
import { setLessonProgress } from "@/lib/notebook/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  const user = await getSessionUser();
  if (!user) return jsonError("Sign in to track progress", 401);

  const limit = checkRateLimit(`progress:${user.id}`, 120, 60_000);
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

  const parsed = lessonProgressSchema.safeParse(payload);
  if (!parsed.success) return jsonError("Invalid progress update", 400, parsed.error.flatten());

  const { lessonSlug, lessonTitle, lessonHref, status } = parsed.data;
  await setLessonProgress(user.id, lessonSlug, lessonTitle, lessonHref, status);

  return NextResponse.json({ ok: true });
}
