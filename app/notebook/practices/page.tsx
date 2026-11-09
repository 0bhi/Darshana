import { NotebookClient } from "@/components/notebook/notebook-client";

export const metadata = {
  title: "Practice log",
  description: "Saved practices and recorded completions.",
};

export default function NotebookPracticesPage() {
  return <NotebookClient initialTab="practices" />;
}
