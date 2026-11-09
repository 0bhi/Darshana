import { NotebookClient } from "@/components/notebook/notebook-client";

export const metadata = {
  title: "Reading history",
  description: "A record of what you have visited in the academy.",
};

export default function NotebookHistoryPage() {
  return <NotebookClient initialTab="history" />;
}
