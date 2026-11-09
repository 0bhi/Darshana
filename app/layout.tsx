import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/inter";
import "./globals.css";
import { NotebookProvider } from "@/components/notebook/notebook-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "The Philosophy Academy",
    template: "%s · The Philosophy Academy",
  },
  description:
    "A school for the examined life: clear lessons in philosophy, careful histories of ideas, and practices for thinking and living deliberately.",
  openGraph: {
    title: "The Philosophy Academy",
    description:
      "Question everything. Understand more. Live deliberately. Lessons, thinkers, and practices from the history of philosophy.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ea",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="paper-grain flex min-h-screen flex-col">
        <NotebookProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </NotebookProvider>
      </body>
    </html>
  );
}
