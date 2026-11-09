import { NotebookClient } from "@/components/notebook/notebook-client";

export const metadata = {
  title: "Bookmarks",
  description: "Lessons, thinkers, and paths you have saved.",
};

export default function NotebookBookmarksPage() {
  return <NotebookClient initialTab="bookmarks" />;
}
