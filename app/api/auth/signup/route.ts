import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { signUpSchema } from "@/lib/api-schemas";
import { hashPassword } from "@/lib/auth/password";
import { createSession } from "@/lib/auth/session";
import { getDb } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { assertSameOrigin, checkRateLimit, getClientIp, jsonError } from "@/lib/http";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  const ip = getClientIp(request);
  const limit = checkRateLimit(`signup:${ip}`, 5, 10 * 60_000);
  if (!limit.allowed) {
    return jsonError("Too many attempts. Try again later.", 429, {
      retryAfter: limit.retryAfterSeconds,
    });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid JSON");
  }

  const parsed = signUpSchema.safeParse(payload);
  if (!parsed.success) {
    return jsonError(
      parsed.error.issues[0]?.message ?? "Invalid account details",
      400,
      parsed.error.flatten(),
    );
  }

  const { name, email, password } = parsed.data;
  const db = await getDb();

  const existing = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existing.length > 0) {
    return jsonError("An account with that email already exists.", 409);
  }

  const passwordHash = await hashPassword(password);

  let userId: string;
  try {
    userId = randomUUID();
    await db.insert(users).values({ id: userId, name, email, passwordHash });
  } catch {
    return jsonError("An account with that email already exists.", 409);
  }

  await createSession(userId);

  return NextResponse.json({ ok: true }, { status: 201 });
}
