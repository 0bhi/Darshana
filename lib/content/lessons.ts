import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { lessonFrontmatterSchema, type LessonFrontmatter } from "@/lib/content/schemas";
import { readingTimeFromText } from "@/lib/utils";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type Lesson = {
  frontmatter: LessonFrontmatter;
  content: string;
  readingTime: number;
  wordCount: number;
  toc: TocItem[];
};

const lessonsDirectory = path.join(process.cwd(), "content", "lessons");

let lessonCache: Lesson[] | null = null;

function headingText(raw: string) {
  return raw
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .trim();
}

function extractToc(content: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  let inFence = false;

  for (const line of content.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(##|###)\s+(.+?)\s*$/.exec(line);
    if (!match) continue;

    const marker = match[1];
    const rawText = match[2];
    if (!marker || !rawText) continue;

    const text = headingText(rawText);
    items.push({
      id: slugger.slug(text),
      text,
      level: marker.length === 2 ? 2 : 3,
    });
  }

  return items;
}

function plainText(content: string) {
  return content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`~[\]()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseLesson(fileName: string): Lesson {
  const filePath = path.join(lessonsDirectory, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = lessonFrontmatterSchema.parse(data);
  const fileSlug = fileName.replace(/\.mdx$/, "");

  if (frontmatter.slug !== fileSlug) {
    throw new Error(
      `Lesson slug "${frontmatter.slug}" does not match filename "${fileName}"`,
    );
  }

  const text = plainText(content);
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  return {
    frontmatter,
    content,
    readingTime: readingTimeFromText(text),
    wordCount,
    toc: extractToc(content),
  };
}

export function getAllLessons(): Lesson[] {
  if (lessonCache) return lessonCache;

  if (!fs.existsSync(lessonsDirectory)) {
    lessonCache = [];
    return lessonCache;
  }

  const lessons = fs
    .readdirSync(lessonsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map(parseLesson)
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));

  lessonCache = lessons;
  return lessons;
}

export function getPublishedLessons(): Lesson[] {
  return getAllLessons().filter((lesson) => lesson.frontmatter.published);
}

export function getLessonBySlug(slug: string): Lesson | null {
  return getAllLessons().find((lesson) => lesson.frontmatter.slug === slug) ?? null;
}

export function getLessonSlugs(): string[] {
  return getPublishedLessons().map((lesson) => lesson.frontmatter.slug);
}

export function getLessonTitle(slug: string): string | null {
  return getLessonBySlug(slug)?.frontmatter.title ?? null;
}

export function getLessonWordCount(slug: string): number {
  return getLessonBySlug(slug)?.wordCount ?? 0;
}
