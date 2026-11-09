"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function signOut() {
    setPending(true);
    await fetch("/api/auth/signout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={signOut}
      disabled={pending}
      className="font-sans text-[0.72rem] uppercase tracking-[0.12em] text-muted transition-colors hover:text-burgundy disabled:opacity-60"
    >
      {pending ? "Signing out" : "Sign out"}
    </button>
  );
}
