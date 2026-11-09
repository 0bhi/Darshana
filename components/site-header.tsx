import Link from "next/link";
import { BookMarked, Search } from "lucide-react";
import { getSessionUser } from "@/lib/auth/session";
import { routes } from "@/lib/routes";
import { MobileNav } from "@/components/mobile-nav";
import { SignOutButton } from "@/components/sign-out-button";

const navigation = [
  { href: routes.learn, label: "Learn" },
  { href: routes.thinkers, label: "Thinkers" },
  { href: routes.apply, label: "Apply" },
  { href: routes.discover, label: "Discover" },
];

export async function SiteHeader() {
  const user = await getSessionUser();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="container-editorial flex h-[4.5rem] items-center justify-between gap-6">
        <Link href={routes.home} className="group flex items-baseline gap-3">
          <span className="font-serif text-[1.35rem] leading-none tracking-tight text-ink">
            The Philosophy Academy
          </span>
          <span className="hidden font-sans text-[0.6rem] uppercase tracking-[0.22em] text-muted md:inline">
            Est. for the examined life
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover-underline font-sans text-[0.78rem] font-medium uppercase tracking-[0.12em] text-ink-soft hover:text-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={routes.search}
            aria-label="Search the academy"
            className="hidden h-9 w-9 items-center justify-center text-muted transition-colors hover:text-green sm:flex"
          >
            <Search className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />
          </Link>
          <Link
            href={routes.notebook}
            className="hidden items-center gap-2 font-sans text-[0.74rem] font-medium uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-green sm:flex"
          >
            <BookMarked className="h-4 w-4" strokeWidth={1.6} />
            Notebook
          </Link>

          {user ? (
            <div className="hidden items-center gap-3 border-l border-line pl-3 md:flex">
              <span className="max-w-[9rem] truncate font-sans text-xs text-muted">
                {user.name}
              </span>
              <SignOutButton />
            </div>
          ) : (
            <Link
              href={routes.signIn}
              className="hidden font-sans text-[0.74rem] font-medium uppercase tracking-[0.12em] text-green hover:text-green-deep md:inline"
            >
              Sign in
            </Link>
          )}

          <MobileNav user={user} />
        </div>
      </div>
    </header>
  );
}
