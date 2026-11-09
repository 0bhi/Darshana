import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth/session";
import { getNotebookState } from "@/lib/notebook/server";
import { emptyNotebookState } from "@/lib/notebook/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json(emptyNotebookState(true), {
      headers: { "Cache-Control": "no-store" },
    });
  }

  const state = await getNotebookState(user.id, user);
  return NextResponse.json(state, {
    headers: { "Cache-Control": "no-store" },
  });
}
