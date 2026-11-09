"use client";

import { useEffect, useRef } from "react";
import { useNotebook, type HistoryTarget } from "@/components/notebook/notebook-provider";

export function RecordVisit({ entityType, entitySlug, entityTitle, entityHref }: HistoryTarget) {
  const { recordHistory } = useNotebook();
  const recorded = useRef(false);

  useEffect(() => {
    if (recorded.current) return;
    recorded.current = true;
    void recordHistory({ entityType, entitySlug, entityTitle, entityHref });
  }, [entityHref, entitySlug, entityTitle, entityType, recordHistory]);

  return null;
}
