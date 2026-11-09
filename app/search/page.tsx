import { PageHeader } from "@/components/page-header";
import { SearchClient } from "@/components/search-client";
import { getSearchIndex } from "@/lib/search-index";
import { SEARCH_TYPES, type SearchType } from "@/lib/search";

export const metadata = {
  title: "Search",
  description:
    "Search lessons, philosophers, concepts, traditions, learning paths, practices, and primary texts.",
};

type PageProps = {
  searchParams: Promise<{ q?: string; type?: string }>;
};

export default async function SearchPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const type =
    params.type && (SEARCH_TYPES as readonly string[]).includes(params.type)
      ? (params.type as SearchType)
      : "all";
  const items = getSearchIndex();

  return (
    <div className="container-editorial">
      <PageHeader
        eyebrow="Search"
        title="Find a question, a thinker, or a practice"
        intro="Search across the whole academy. Results are ranked by title, description, and related terms."
      />
      <div className="py-10">
        <SearchClient items={items} initialQuery={query} initialType={type} />
      </div>
    </div>
  );
}
