import Link from "next/link";
import type { ReactNode } from "react";

export function EmptyState({
  title,
  children,
  action,
}: {
  title: string;
  children?: ReactNode;
  action?: { href: string; label: string };
}) {
  return (
    <div className="border border-dashed border-line-strong px-6 py-10 text-center">
      <p className="font-serif text-xl text-ink">{title}</p>
      {children ? (
        <div className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-muted">
          {children}
        </div>
      ) : null}
      {action ? (
        <Link href={action.href} className="btn btn-secondary mt-5">
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
