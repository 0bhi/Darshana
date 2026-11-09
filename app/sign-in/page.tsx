import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { getSessionUser } from "@/lib/auth/session";
import { routes } from "@/lib/routes";
import { safeRedirectPath } from "@/lib/utils";

export const metadata = {
  title: "Sign in",
  description: "Sign in to sync your notebook across devices.",
};

type PageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function SignInPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const next = safeRedirectPath(params.next);
  const user = await getSessionUser();
  if (user) redirect(next);

  return (
    <div className="container-editorial py-14 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_26rem] lg:gap-20">
        <div>
          <p className="label label-green">Return to the notebook</p>
          <h1 className="mt-4 max-w-xl font-serif text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.025em] text-ink">
            Keep your reading in one place.
          </h1>
          <p className="mt-6 max-w-lg font-serif text-xl leading-relaxed text-ink-soft">
            An account syncs bookmarks, notes, lesson progress, reading history, and
            practice records across devices.
          </p>
          <p className="mt-6 max-w-lg font-sans text-sm leading-relaxed text-muted">
            You can use the notebook without an account; it will be stored on this
            device. Signing in moves the record to your account for the future.
          </p>
          <p className="mt-10 font-sans text-xs uppercase tracking-[0.12em] text-muted">
            New here?{" "}
            <Link href={routes.signUp} className="text-green underline underline-offset-2">
              Create an account
            </Link>
          </p>
        </div>

        <div className="border border-line bg-surface p-6 md:p-8">
          <p className="label">Sign in</p>
          <div className="mt-6">
            <AuthForm mode="signin" next={next} />
          </div>
        </div>
      </div>
    </div>
  );
}
