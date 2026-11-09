import { describe, expect, it } from "vitest";
import {
  branches,
  concepts,
  connections,
  getConcept,
  getContentCounts,
  getLearningPath,
  getPhilosopher,
  getPractice,
  getPracticalTopic,
  getTradition,
  learningPaths,
  philosophers,
  practicalTopics,
  practices,
  primaryTexts,
  traditions,
} from "@/lib/content";
import { getLessonBySlug, getPublishedLessons } from "@/lib/content/lessons";

describe("content registries", () => {
  it("reports the expected content counts", () => {
    expect(getPublishedLessons()).toHaveLength(20);
    expect(getContentCounts()).toMatchObject({
      philosophers: 25,
      concepts: 31,
      traditions: 16,
      branches: 10,
      paths: 10,
      practices: 12,
      topics: 12,
      connections: 6,
    });
  });

  it("has unique slugs across each registry", () => {
    const registries = [
      branches,
      concepts,
      learningPaths,
      philosophers,
      practicalTopics,
      practices,
      primaryTexts,
      traditions,
      connections,
    ];

    for (const registry of registries) {
      const slugs = registry.map((item) => item.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("resolves every path lesson and prerequisite", () => {
    for (const path of learningPaths) {
      for (const slug of path.lessonSlugs) {
        expect(getLessonBySlug(slug), `${path.slug} -> ${slug}`).not.toBeNull();
      }
      for (const slug of path.prerequisites) {
        expect(getLearningPath(slug), `${path.slug} prerequisite -> ${slug}`).not.toBeNull();
      }
    }
  });

  it("resolves every practical topic reference", () => {
    for (const topic of practicalTopics) {
      for (const slug of topic.practices) {
        expect(getPractice(slug), `${topic.slug} practice -> ${slug}`).not.toBeNull();
      }
      for (const slug of topic.concepts) {
        expect(getConcept(slug), `${topic.slug} concept -> ${slug}`).not.toBeNull();
      }
      for (const slug of topic.philosophers) {
        expect(getPhilosopher(slug), `${topic.slug} philosopher -> ${slug}`).not.toBeNull();
      }
    }
  });

  it("resolves tradition and connection references", () => {
    for (const lesson of getPublishedLessons()) {
      for (const slug of lesson.frontmatter.traditions) {
        expect(getTradition(slug), `${lesson.frontmatter.slug} tradition -> ${slug}`).not.toBeNull();
      }
      for (const slug of lesson.frontmatter.concepts) {
        expect(getConcept(slug), `${lesson.frontmatter.slug} concept -> ${slug}`).not.toBeNull();
      }
      for (const slug of lesson.frontmatter.philosophers) {
        expect(getPhilosopher(slug), `${lesson.frontmatter.slug} philosopher -> ${slug}`).not.toBeNull();
      }
    }

    for (const connection of connections) {
      for (const slug of connection.relatedLessons) {
        expect(getLessonBySlug(slug), `${connection.slug} lesson -> ${slug}`).not.toBeNull();
      }
    }
  });

  it("gives every lesson a comprehension check and substantive body", () => {
    for (const lesson of getPublishedLessons()) {
      expect(lesson.frontmatter.checks.length, lesson.frontmatter.slug).toBeGreaterThan(0);
      expect(lesson.wordCount, lesson.frontmatter.slug).toBeGreaterThanOrEqual(500);
      expect(lesson.readingTime, lesson.frontmatter.slug).toBeGreaterThan(0);
    }
  });
});
