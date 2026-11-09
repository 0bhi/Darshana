export const routes = {
  home: "/",
  discover: "/discover",
  learn: "/learn",
  paths: "/learn/paths",
  path: (slug: string) => `/learn/paths/${slug}`,
  branch: (slug: string) => `/learn/branches/${slug}`,
  tradition: (slug: string) => `/learn/traditions/${slug}`,
  lesson: (slug: string) => `/learn/lessons/${slug}`,
  thinkers: "/thinkers",
  philosopher: (slug: string) => `/thinkers/philosophers/${slug}`,
  concept: (slug: string) => `/thinkers/concepts/${slug}`,
  apply: "/apply",
  topic: (slug: string) => `/apply/topics/${slug}`,
  practice: (slug: string) => `/apply/practices/${slug}`,
  search: "/search",
  notebook: "/notebook",
  notebookNotes: "/notebook/notes",
  notebookBookmarks: "/notebook/bookmarks",
  notebookHistory: "/notebook/history",
  notebookPractices: "/notebook/practices",
  about: "/about",
  methodology: "/methodology",
  signIn: "/sign-in",
  signUp: "/sign-up",
} as const;

export function signInWithNext(next: string) {
  return `${routes.signIn}?next=${encodeURIComponent(next)}`;
}
