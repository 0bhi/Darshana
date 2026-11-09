import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { signInSchema } from "@/lib/api-schemas";
import { verifyPassword } from "@/lib/auth/password";
import { createSession } from "@/lib/auth/session";
import { getDb } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { assertSameOrigin, checkRateLimit, getClientIp, jsonError } from "@/lib/http";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid JSON");
  }

  const parsed = signInSchema.safeParse(payload);
  if (!parsed.success) return jsonError("Invalid email or password", 400);

  const { email, password } = parsed.data;
  const ip = getClientIp(request);
  const limit = checkRateLimit(`signin:${ip}:${email}`, 10, 10 * 60_000);
  if (!limit.allowed) {
    return jsonError("Too many attempts. Try again later.", 429, {
      retryAfter: limit.retryAfterSeconds,
    });
  }

  const db = await getDb();
  const rows = await db
    .select({
      id: users.id,
      passwordHash: users.passwordHash,
    })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  const account = rows[0];
  if (!account) {
    return jsonError("Invalid email or password.", 401);
  }

  const valid = await verifyPassword(password, account.passwordHash);
  if (!valid) {
    return jsonError("Invalid email or password.", 401);
  }

  await createSession(account.id);
  return NextResponse.json({ ok: true });
}
