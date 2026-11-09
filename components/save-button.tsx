"use client";

import { useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import {
  useNotebook,
  type BookmarkTarget,
} from "@/components/notebook/notebook-provider";
import { cn } from "@/lib/utils";

type SaveButtonProps = BookmarkTarget & {
  label?: string;
  className?: string;
};

export function SaveButton({
  entityType,
  entitySlug,
  entityTitle,
  entityHref,
  label,
  className,
}: SaveButtonProps) {
  const { isBookmarked, toggleBookmark } = useNotebook();
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const saved = isBookmarked(entityType, entitySlug);

  async function handleClick() {
    setPending(true);
    setFailed(false);
    const ok = await toggleBookmark({
      entityType,
      entitySlug,
      entityTitle,
      entityHref,
    });
    setPending(false);
    setFailed(!ok);
  }

  const Icon = saved ? BookmarkCheck : Bookmark;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      aria-pressed={saved}
      className={cn(
        "btn btn-sm",
        saved && "border-green bg-green-wash text-green",
        failed && "border-burgundy text-burgundy",
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
      {failed ? "Try again" : saved ? "Saved" : (label ?? "Save")}
    </button>
  );
}
