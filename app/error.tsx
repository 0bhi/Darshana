"use client";

import { useEffect } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-editorial flex min-h-[60vh] flex-col justify-center py-20">
      <p className="label label-burgundy">Something went wrong</p>
      <h1 className="mt-4 max-w-2xl font-serif text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[1.04] tracking-[-0.03em] text-ink">
        The page could not be rendered.
      </h1>
      <p className="mt-6 max-w-lg font-serif text-xl leading-relaxed text-ink-soft">
        This is a fault in the site, not in the question you were pursuing. Try again,
        or return to a stable page.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={reset} className="btn btn-primary">
          Try again
        </button>
        <Link href={routes.home} className="btn btn-secondary">
          Return home
        </Link>
      </div>
    </div>
  );
}
