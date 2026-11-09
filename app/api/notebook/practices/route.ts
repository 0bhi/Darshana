import { NextResponse } from "next/server";
import { practiceActionSchema } from "@/lib/api-schemas";
import { getSessionUser } from "@/lib/auth/session";
import { assertSameOrigin, checkRateLimit, jsonError } from "@/lib/http";
import {
  addPracticeCompletion,
  deletePracticeCompletion,
  setPracticeSaved,
} from "@/lib/notebook/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  const user = await getSessionUser();
  if (!user) return jsonError("Sign in to use practices", 401);

  const limit = checkRateLimit(`practices:${user.id}`, 120, 60_000);
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

  const parsed = practiceActionSchema.safeParse(payload);
  if (!parsed.success) return jsonError("Invalid practice action", 400, parsed.error.flatten());

  const data = parsed.data;

  if (data.action === "save") {
    await setPracticeSaved(
      user.id,
      data.practiceSlug,
      data.practiceTitle,
      data.practiceHref,
      data.saved,
    );
    return NextResponse.json({ ok: true });
  }

  if (data.action === "complete") {
    const completion = await addPracticeCompletion(
      user.id,
      data.practiceSlug,
      data.practiceTitle,
      data.practiceHref,
      data.reflection ?? null,
    );
    return NextResponse.json({ ok: true, id: completion.id }, { status: 201 });
  }

  await deletePracticeCompletion(user.id, data.completionId);
  return NextResponse.json({ ok: true });
}
