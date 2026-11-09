import { NotebookClient } from "@/components/notebook/notebook-client";

export const metadata = {
  title: "Notes",
  description: "Your private notes from across the academy.",
};

export default function NotebookNotesPage() {
  return <NotebookClient initialTab="notes" />;
}
