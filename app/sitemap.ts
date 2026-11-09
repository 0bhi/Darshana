import type { MetadataRoute } from "next";
import {
  branches,
  concepts,
  learningPaths,
  philosophers,
  practicalTopics,
  practices,
  traditions,
} from "@/lib/content";
import { getPublishedLessons } from "@/lib/content/lessons";
import { routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: absoluteUrl(routes.home), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl(routes.discover), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl(routes.learn), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl(routes.paths), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl(routes.thinkers), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl(routes.apply), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl(routes.about), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl(routes.methodology), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const lessonEntries: MetadataRoute.Sitemap = getPublishedLessons().map((lesson) => ({
    url: absoluteUrl(routes.lesson(lesson.frontmatter.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const pathEntries: MetadataRoute.Sitemap = learningPaths.map((path) => ({
    url: absoluteUrl(routes.path(path.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const branchEntries: MetadataRoute.Sitemap = branches.map((branch) => ({
    url: absoluteUrl(routes.branch(branch.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const traditionEntries: MetadataRoute.Sitemap = traditions.map((tradition) => ({
    url: absoluteUrl(routes.tradition(tradition.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const philosopherEntries: MetadataRoute.Sitemap = philosophers.map((philosopher) => ({
    url: absoluteUrl(routes.philosopher(philosopher.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const conceptEntries: MetadataRoute.Sitemap = concepts.map((concept) => ({
    url: absoluteUrl(routes.concept(concept.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const practiceEntries: MetadataRoute.Sitemap = practices.map((practice) => ({
    url: absoluteUrl(routes.practice(practice.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const topicEntries: MetadataRoute.Sitemap = practicalTopics.map((topic) => ({
    url: absoluteUrl(routes.topic(topic.slug)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...lessonEntries,
    ...pathEntries,
    ...branchEntries,
    ...traditionEntries,
    ...philosopherEntries,
    ...conceptEntries,
    ...practiceEntries,
    ...topicEntries,
  ];
}
