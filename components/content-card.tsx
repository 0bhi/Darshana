import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ContentCardProps = {
  href: string;
  label?: string;
  title: string;
  description?: string;
  meta?: string;
  className?: string;
  titleClassName?: string;
};

export function ContentCard({
  href,
  label,
  title,
  description,
  meta,
  className,
  titleClassName,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col border-t border-line py-5 transition-colors hover:border-green",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {label ? <p className="label">{label}</p> : null}
          <h3
            className={cn(
              "mt-2 font-serif text-2xl leading-snug text-ink transition-colors group-hover:text-green",
              titleClassName,
            )}
          >
            {title}
          </h3>
        </div>
        <ArrowUpRight
          className="mt-1 h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-green"
          strokeWidth={1.5}
        />
      </div>
      {description ? (
        <p className="mt-2.5 max-w-xl font-sans text-sm leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      {meta ? (
        <p className="mt-4 font-sans text-[0.68rem] uppercase tracking-[0.12em] text-faint">
          {meta}
        </p>
      ) : null}
    </Link>
  );
}
