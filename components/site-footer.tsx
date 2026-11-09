import Link from "next/link";
import { routes } from "@/lib/routes";

const columns = [
  {
    title: "Learn",
    links: [
      { href: routes.learn, label: "All lessons" },
      { href: routes.paths, label: "Learning paths" },
      { href: routes.learn, label: "Branches of philosophy" },
    ],
  },
  {
    title: "Thinkers",
    links: [
      { href: routes.thinkers, label: "Philosophers" },
      { href: `${routes.thinkers}#concepts`, label: "Concepts" },
      { href: routes.discover, label: "Connections" },
    ],
  },
  {
    title: "Practice",
    links: [
      { href: routes.apply, label: "Practical topics" },
      { href: routes.apply, label: "Practices" },
      { href: routes.notebook, label: "Your notebook" },
    ],
  },
  {
    title: "The Academy",
    links: [
      { href: routes.about, label: "About" },
      { href: routes.methodology, label: "Methodology" },
      { href: routes.search, label: "Search" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-paper-deep">
      <div className="container-editorial py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="label label-green">The Philosophy Academy</p>
            <p className="mt-4 max-w-sm font-serif text-2xl leading-snug text-ink">
              A school for the examined life, open to anyone willing to stay with a
              difficult question.
            </p>
            <p className="mt-4 max-w-sm font-sans text-xs leading-relaxed text-muted">
              Read slowly. Argue charitably. Keep what survives examination.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="label">{column.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-ink-soft transition-colors hover:text-green"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-muted">
            © {new Date().getFullYear()} The Philosophy Academy. Written for careful readers.
          </p>
          <p className="font-sans text-xs text-muted">
            No ads. No tracking. No manufactured certainty.
          </p>
        </div>
      </div>
    </footer>
  );
}
