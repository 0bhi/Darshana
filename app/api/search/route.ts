import { NextResponse } from "next/server";
import { getSearchIndex } from "@/lib/search-index";
import { filterSearchItems, SEARCH_TYPES, type SearchType } from "@/lib/search";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") ?? "").slice(0, 200);
  const requestedType = searchParams.get("type") ?? "all";
  const type =
    requestedType !== "all" && (SEARCH_TYPES as readonly string[]).includes(requestedType)
      ? (requestedType as SearchType)
      : "all";

  const items = filterSearchItems(getSearchIndex(), query, type, 30);

  return NextResponse.json(
    { query, type, count: items.length, items },
    { headers: { "Cache-Control": "public, max-age=300, stale-while-revalidate=3600" } },
  );
}
