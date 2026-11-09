import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  meta?: ReactNode;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, intro, meta, children }: PageHeaderProps) {
  return (
    <header className="border-b border-line pb-10 pt-12 md:pb-14 md:pt-16">
      {eyebrow ? <p className="label label-green">{eyebrow}</p> : null}
      <h1 className="mt-4 max-w-4xl text-balance font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.025em] text-ink">
        {title}
      </h1>
      {intro ? (
        <p className="mt-6 max-w-2xl text-pretty font-serif text-xl leading-relaxed text-ink-soft md:text-2xl">
          {intro}
        </p>
      ) : null}
      {meta ? <div className="mt-7">{meta}</div> : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </header>
  );
}
