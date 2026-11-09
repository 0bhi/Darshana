import { NextResponse } from "next/server";
import { destroySession } from "@/lib/auth/session";
import { assertSameOrigin, jsonError } from "@/lib/http";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!assertSameOrigin(request)) return jsonError("Invalid origin", 403);

  await destroySession();
  return NextResponse.json({ ok: true });
}
