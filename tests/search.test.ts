import { describe, expect, it } from "vitest";
import { filterSearchItems, SEARCH_TYPES, type SearchItem } from "@/lib/search";
import { getSearchIndex } from "@/lib/search-index";
import { safeRedirectPath } from "@/lib/utils";

const items: SearchItem[] = [
  {
    type: "lesson",
    title: "The Ship of Theseus",
    subtitle: "Identity and replacement",
    description: "A lesson about persistence through change.",
    href: "/learn/lessons/ship-of-theseus",
    meta: "introductory",
    keywords: "identity persistence change",
  },
  {
    type: "philosopher",
    title: "Plato",
    subtitle: "c. 428–348 BCE",
    description: "Plato wrote dialogues on justice, knowledge, and the good.",
    href: "/thinkers/philosophers/plato",
    meta: "ancient",
    keywords: "forms cave socrates",
  },
  {
    type: "concept",
    title: "Personal identity",
    subtitle: "What makes a person the same over time",
    description: "A concept in metaphysics.",
    href: "/thinkers/concepts/personal-identity",
    meta: "metaphysics",
    keywords: "self persistence",
  },
];

describe("search", () => {
  it("ranks an exact title match first", () => {
    const results = filterSearchItems(items, "plato");
    expect(results[0]?.title).toBe("Plato");
  });

  it("filters by type", () => {
    const results = filterSearchItems(items, "identity", "lesson");
    expect(results).toHaveLength(1);
    expect(results[0]?.type).toBe("lesson");
  });

  it("matches keywords and descriptions", () => {
    expect(filterSearchItems(items, "forms")[0]?.title).toBe("Plato");
    expect(filterSearchItems(items, "metaphysics")[0]?.title).toBe("Personal identity");
  });

  it("returns an empty list when nothing matches", () => {
    expect(filterSearchItems(items, "zzzz-not-found")).toEqual([]);
  });

  it("builds a complete index with local links", () => {
    const index = getSearchIndex();
    const types = new Set(index.map((item) => item.type));

    expect(index.length).toBeGreaterThan(100);
    for (const type of SEARCH_TYPES) {
      expect(types.has(type), type).toBe(true);
    }
    for (const item of index) {
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.href.startsWith("/") || item.href.startsWith("https://")).toBe(true);
    }
  });
});

describe("safeRedirectPath", () => {
  it("accepts local paths", () => {
    expect(safeRedirectPath("/notebook/notes")).toBe("/notebook/notes");
  });

  it("rejects protocol-relative and external paths", () => {
    expect(safeRedirectPath("//evil.example")).toBe("/notebook");
    expect(safeRedirectPath("https://evil.example")).toBe("/notebook");
    expect(safeRedirectPath("javascript:alert(1)")).toBe("/notebook");
    expect(safeRedirectPath(undefined)).toBe("/notebook");
  });
});
