import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { getSessionUser } from "@/lib/auth/session";
import { routes } from "@/lib/routes";
import { safeRedirectPath } from "@/lib/utils";

export const metadata = {
  title: "Create an account",
  description: "Create an account to sync your notebook across devices.",
};

type PageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function SignUpPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const next = safeRedirectPath(params.next);
  const user = await getSessionUser();
  if (user) redirect(next);

  return (
    <div className="container-editorial py-14 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_26rem] lg:gap-20">
        <div>
          <p className="label label-green">Begin a notebook</p>
          <h1 className="mt-4 max-w-xl font-serif text-[clamp(2.4rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.025em] text-ink">
            A record of what you read and what you question.
          </h1>
          <p className="mt-6 max-w-lg font-serif text-xl leading-relaxed text-ink-soft">
            Accounts are for keeping a private notebook. They are not a social profile,
            and there is no feed to perform for.
          </p>
          <p className="mt-6 max-w-lg font-sans text-sm leading-relaxed text-muted">
            We ask only for a name, an email, and a password. Passwords are hashed with
            scrypt and never stored in plain text.
          </p>
          <p className="mt-10 font-sans text-xs uppercase tracking-[0.12em] text-muted">
            Already have an account?{" "}
            <Link href={routes.signIn} className="text-green underline underline-offset-2">
              Sign in
            </Link>
          </p>
        </div>

        <div className="border border-line bg-surface p-6 md:p-8">
          <p className="label">Create account</p>
          <div className="mt-6">
            <AuthForm mode="signup" next={next} />
          </div>
        </div>
      </div>
    </div>
  );
}
