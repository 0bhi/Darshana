import Link from "next/link";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  action?: { href: string; label: string };
  children?: ReactNode;
};

export function SectionHeading({
  label,
  title,
  description,
  action,
  children,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {label ? <p className="label">{label}</p> : null}
        <h2 className="mt-2 font-serif text-[clamp(1.7rem,2.6vw,2.4rem)] leading-tight text-ink">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
        {children}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="shrink-0 font-sans text-[0.74rem] font-medium uppercase tracking-[0.12em] text-green hover:text-green-deep"
        >
          {action.label} →
        </Link>
      ) : null}
    </div>
  );
}
