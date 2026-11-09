import type { ReactNode } from "react";

export function ThoughtExperiment({
  title = "Thought experiment",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-9 border-y border-line-strong bg-paper-deep px-5 py-6 md:px-7">
      <p className="label label-green">{title}</p>
      <div className="mt-3 space-y-3 font-serif text-[1.02em] leading-relaxed text-ink-soft [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}

export function PullQuote({
  children,
  source,
}: {
  children: ReactNode;
  source?: string;
}) {
  return (
    <figure className="my-10 border-l-2 border-green pl-5 md:pl-7">
      <blockquote className="font-serif text-[1.45em] italic leading-[1.45] text-ink">
        {children}
      </blockquote>
      {source ? (
        <figcaption className="mt-4 font-sans text-[0.68rem] uppercase tracking-[0.14em] text-muted">
          {source}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function Caveat({
  title = "A note of caution",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 border border-burgundy/30 bg-burgundy-wash/50 px-5 py-5">
      <p className="label label-burgundy">{title}</p>
      <div className="mt-2.5 space-y-2 font-sans text-sm leading-relaxed text-ink-soft [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}

export function Argument({ children }: { children: ReactNode }) {
  return (
    <aside className="my-9 border border-line-strong bg-surface px-5 py-6">
      <p className="label">The argument</p>
      <div className="mt-3 space-y-3 font-serif text-[1.02em] leading-relaxed text-ink-soft [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}

export const mdxComponents = {
  ThoughtExperiment,
  PullQuote,
  Caveat,
  Argument,
};
