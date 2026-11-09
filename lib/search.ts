export const SEARCH_TYPES = [
  "lesson",
  "philosopher",
  "concept",
  "tradition",
  "branch",
  "path",
  "practice",
  "topic",
  "text",
] as const;

export type SearchType = (typeof SEARCH_TYPES)[number];

export type SearchItem = {
  type: SearchType;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  meta: string;
  keywords: string;
};

export const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  lesson: "Lesson",
  philosopher: "Philosopher",
  concept: "Concept",
  tradition: "Tradition",
  branch: "Branch",
  path: "Learning path",
  practice: "Practice",
  topic: "Practical topic",
  text: "Primary text",
};

function normalize(value: string) {
  return value
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
}

function scoreItem(item: SearchItem, query: string) {
  const title = normalize(item.title);
  const subtitle = normalize(item.subtitle);
  const description = normalize(item.description);
  const meta = normalize(item.meta);
  const keywords = normalize(item.keywords);

  let score = 0;
  if (title === query) score += 20;
  if (title.startsWith(query)) score += 12;
  if (title.includes(query)) score += 8;
  if (subtitle.includes(query)) score += 5;
  if (keywords.includes(query)) score += 4;
  if (description.includes(query)) score += 2;
  if (meta.includes(query)) score += 1;
  return score;
}

export function filterSearchItems(
  items: SearchItem[],
  query: string,
  type: SearchType | "all" = "all",
  limit = 60,
): SearchItem[] {
  const normalizedQuery = normalize(query.trim());
  const pool = type === "all" ? items : items.filter((item) => item.type === type);

  if (!normalizedQuery) return pool.slice(0, limit);

  return pool
    .map((item) => ({ item, score: scoreItem(item, normalizedQuery) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map((entry) => entry.item);
}
