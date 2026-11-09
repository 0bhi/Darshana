import { NotebookClient } from "@/components/notebook/notebook-client";

export const metadata = {
  title: "Notebook",
  description:
    "Your private reading record: bookmarks, notes, lesson progress, history, and practice logs.",
};

export default function NotebookPage() {
  return <NotebookClient initialTab="overview" />;
}
