import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionUser } from "@/lib/auth/session";
import { getDb } from "@/lib/db";
import { sessions } from "@/lib/db/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const db = await getDb();
  const rows = await db.select().from(sessions);
  const user = await getSessionUser();

  return NextResponse.json({
    header: request.headers.get("cookie"),
    cookies: cookieStore.getAll(),
    sessionCount: rows.length,
    tokenHashes: rows.map((row) => row.tokenHash.slice(0, 8)),
    user,
  });
}
