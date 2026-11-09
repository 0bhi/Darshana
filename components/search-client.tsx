"use client";

import { useDeferredValue, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import {
  SEARCH_TYPES,
  SEARCH_TYPE_LABELS,
  filterSearchItems,
  type SearchItem,
  type SearchType,
} from "@/lib/search";
import { cn } from "@/lib/utils";

export function SearchClient({
  items,
  initialQuery = "",
  initialType = "all",
}: {
  items: SearchItem[];
  initialQuery?: string;
  initialType?: SearchType | "all";
}) {
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState<SearchType | "all">(initialType);
  const deferredQuery = useDeferredValue(query);
  const results = filterSearchItems(items, deferredQuery, type);

  const filters: Array<{ value: SearchType | "all"; label: string }> = [
    { value: "all", label: "Everything" },
    ...SEARCH_TYPES.map((value) => ({
      value,
      label: SEARCH_TYPE_LABELS[value],
    })),
  ];

  return (
    <div>
      <div className="border border-line-strong bg-surface p-2">
        <div className="flex items-center gap-3 px-2">
          <Search className="h-5 w-5 shrink-0 text-muted" strokeWidth={1.6} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search lessons, thinkers, concepts, practices..."
            aria-label="Search the academy"
            className="h-12 w-full bg-transparent font-serif text-lg text-ink outline-none placeholder:text-faint"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="text-muted hover:text-green"
            >
              <X className="h-4 w-4" strokeWidth={1.7} />
            </button>
          ) : null}
        </div>
      </div>

      <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setType(filter.value)}
            className={cn("chip shrink-0", type === filter.value && "chip-active")}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-baseline justify-between border-b border-line pb-3">
        <p className="label">
          {results.length} {results.length === 1 ? "result" : "results"}
        </p>
        {deferredQuery ? (
          <p className="font-sans text-xs text-muted">for “{deferredQuery}”</p>
        ) : null}
      </div>

      {results.length === 0 ? (
        <div className="border-b border-line py-14 text-center">
          <p className="font-serif text-2xl text-ink">No matching entries.</p>
          <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-muted">
            Try a broader term, a philosopher&apos;s name, or a question such as
            &ldquo;freedom&rdquo; or &ldquo;the self&rdquo;.
          </p>
        </div>
      ) : (
        <ul>
          {results.map((item) => {
            const external = item.href.startsWith("http");
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="label">{SEARCH_TYPE_LABELS[item.type]}</p>
                    <h3 className="mt-1.5 font-serif text-xl leading-snug text-ink transition-colors group-hover:text-green">
                      {item.title}
                    </h3>
                  </div>
                  <span className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.12em] text-faint">
                    {item.meta}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </>
            );

            return (
              <li key={`${item.type}-${item.href}-${item.title}`} className="border-b border-line">
                {external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block py-5"
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={item.href} className="group block py-5">
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
