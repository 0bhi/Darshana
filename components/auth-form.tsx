"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";

export function AuthForm({
  mode,
  next,
}: {
  mode: "signin" | "signup";
  next: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        mode === "signup" ? { name, email, password } : { email, password },
      ),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "Something went wrong. Please try again.");
      setPending(false);
      return;
    }

    window.location.assign(next);
  }

  const isSignUp = mode === "signup";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isSignUp ? (
        <label className="block">
          <span className="label">Name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="name"
            maxLength={80}
            className="input mt-2"
          />
        </label>
      ) : null}

      <label className="block">
        <span className="label">Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="email"
          className="input mt-2"
        />
      </label>

      <label className="block">
        <span className="label">Password</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={isSignUp ? 8 : undefined}
          autoComplete={isSignUp ? "new-password" : "current-password"}
          className="input mt-2"
        />
        {isSignUp ? (
          <span className="mt-2 block font-sans text-xs text-muted">
            At least 8 characters. Passwords are hashed with scrypt.
          </span>
        ) : null}
      </label>

      {error ? (
        <p className="border-l-2 border-burgundy pl-3 font-sans text-sm text-burgundy" aria-live="polite">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={pending} className="btn btn-primary w-full">
        {pending ? "Please wait" : isSignUp ? "Create account" : "Sign in"}
      </button>

      <p className="font-sans text-xs leading-relaxed text-muted">
        {isSignUp ? "Already have an account? " : "New here? "}
        <Link
          href={`${isSignUp ? routes.signIn : routes.signUp}?next=${encodeURIComponent(next)}`}
          className="text-green underline underline-offset-2"
        >
          {isSignUp ? "Sign in" : "Create an account"}
        </Link>
        .
      </p>
    </form>
  );
}
