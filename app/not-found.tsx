import Link from "next/link";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="container-editorial flex min-h-[60vh] flex-col justify-center py-20">
      <p className="label label-green">404</p>
      <h1 className="mt-4 max-w-2xl font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.03em] text-ink">
        This page is not in the archive.
      </h1>
      <p className="mt-6 max-w-lg font-serif text-xl leading-relaxed text-ink-soft">
        The address may be mistyped, or the page may have moved. The question is still
        available elsewhere.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={routes.home} className="btn btn-primary">
          Return home
        </Link>
        <Link href={routes.search} className="btn btn-secondary">
          Search the academy
        </Link>
        <Link href={routes.learn} className="btn btn-ghost">
          Browse lessons
        </Link>
      </div>
    </div>
  );
}
