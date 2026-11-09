import { getPublishedLessons } from "@/lib/content/lessons";
import {
  branches,
  concepts,
  learningPaths,
  philosophers,
  practicalTopics,
  practices,
  primaryTexts,
  traditions,
} from "@/lib/content";
import { routes } from "@/lib/routes";
import type { SearchItem } from "@/lib/search";

export function getSearchIndex(): SearchItem[] {
  const lessons: SearchItem[] = getPublishedLessons().map((lesson) => ({
    type: "lesson",
    title: lesson.frontmatter.title,
    subtitle: lesson.frontmatter.subtitle,
    description: lesson.frontmatter.description,
    href: routes.lesson(lesson.frontmatter.slug),
    meta: `${lesson.frontmatter.difficulty} · ${lesson.readingTime} min read`,
    keywords: [
      lesson.frontmatter.hook,
      ...lesson.frontmatter.branches,
      ...lesson.frontmatter.traditions,
      ...lesson.frontmatter.philosophers,
      ...lesson.frontmatter.concepts,
    ].join(" "),
  }));

  const philosopherItems: SearchItem[] = philosophers.map((item) => ({
    type: "philosopher",
    title: item.name,
    subtitle: item.dates,
    description: item.summary,
    href: routes.philosopher(item.slug),
    meta: item.era,
    keywords: [...item.traditions, ...item.concepts, ...item.ideas.map((idea) => idea.title)].join(" "),
  }));

  const conceptItems: SearchItem[] = concepts.map((item) => ({
    type: "concept",
    title: item.name,
    subtitle: item.shortDefinition,
    description: item.significance,
    href: routes.concept(item.slug),
    meta: item.origins,
    keywords: [...(item.alternateNames ?? []), ...item.traditions].join(" "),
  }));

  const traditionItems: SearchItem[] = traditions.map((item) => ({
    type: "tradition",
    title: item.name,
    subtitle: item.era,
    description: item.summary,
    href: routes.tradition(item.slug),
    meta: item.region,
    keywords: [...item.centralQuestions, ...item.figures.map((figure) => figure.name)].join(" "),
  }));

  const branchItems: SearchItem[] = branches.map((item) => ({
    type: "branch",
    title: item.name,
    subtitle: item.tagline,
    description: item.description,
    href: routes.branch(item.slug),
    meta: item.subfields.join(" · "),
    keywords: item.centralQuestions.join(" "),
  }));

  const pathItems: SearchItem[] = learningPaths.map((item) => ({
    type: "path",
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
    href: routes.path(item.slug),
    meta: `${item.level} · ${item.estimatedHours} hours`,
    keywords: [...item.objectives, ...item.branches, ...item.traditions].join(" "),
  }));

  const practiceItems: SearchItem[] = practices.map((item) => ({
    type: "practice",
    title: item.title,
    subtitle: item.frequency,
    description: item.description,
    href: routes.practice(item.slug),
    meta: item.timeCommitment,
    keywords: [...item.relatedConcepts, item.principle].join(" "),
  }));

  const topicItems: SearchItem[] = practicalTopics.map((item) => ({
    type: "topic",
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
    href: routes.topic(item.slug),
    meta: `${item.practices.length} practices`,
    keywords: [...item.concepts, ...item.reflectionPrompts].join(" "),
  }));

  const textItems: SearchItem[] = primaryTexts.map((item) => ({
    type: "text",
    title: item.title,
    subtitle: item.author,
    description: item.note,
    href: item.href ?? routes.thinkers,
    meta: item.date,
    keywords: [item.author, item.tradition ?? ""].join(" "),
  }));

  return [
    ...lessons,
    ...philosopherItems,
    ...conceptItems,
    ...traditionItems,
    ...branchItems,
    ...pathItems,
    ...practiceItems,
    ...topicItems,
    ...textItems,
  ];
}
