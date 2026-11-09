"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { routes } from "@/lib/routes";
import type { SessionUser } from "@/lib/auth/session";
import { SignOutButton } from "@/components/sign-out-button";

const navigation = [
  { href: routes.learn, label: "Learn", note: "Paths, branches, and lessons" },
  { href: routes.thinkers, label: "Thinkers", note: "Philosophers and concepts" },
  { href: routes.apply, label: "Apply", note: "Practices for ordinary life" },
  { href: routes.discover, label: "Discover", note: "Connections and primary texts" },
  { href: routes.notebook, label: "Notebook", note: "Your reading and notes" },
  { href: routes.search, label: "Search", note: "Find a question" },
];

export function MobileNav({ user }: { user: SessionUser | null }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-green hover:text-green lg:hidden"
        >
          <Menu className="h-4 w-4" strokeWidth={1.6} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/25" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-line bg-paper px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-serif text-2xl text-ink">
                The Academy
              </Dialog.Title>
              <Dialog.Description className="mt-1 font-sans text-xs text-muted">
                Question everything. Understand more. Live deliberately.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close navigation menu"
                className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-green hover:text-green"
              >
                <X className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile" className="mt-10 flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group border-t border-line py-4 last:border-b"
              >
                <span className="font-serif text-xl text-ink transition-colors group-hover:text-green">
                  {item.label}
                </span>
                <span className="mt-1 block font-sans text-xs text-muted">{item.note}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-line pt-5">
            {user ? (
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-sans text-sm text-ink">{user.name}</p>
                  <p className="font-sans text-xs text-muted">{user.email}</p>
                </div>
                <SignOutButton />
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href={routes.signIn}
                  onClick={() => setOpen(false)}
                  className="btn btn-primary"
                >
                  Sign in
                </Link>
                <Link
                  href={routes.signUp}
                  onClick={() => setOpen(false)}
                  className="btn"
                >
                  Create an account
                </Link>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
