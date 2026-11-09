import { philosophers } from "@/content/philosophers";
import { concepts } from "@/content/concepts";
import { traditions } from "@/content/traditions";
import { branches } from "@/content/branches";
import { learningPaths } from "@/content/learning-paths";
import { practices } from "@/content/practices";
import { practicalTopics } from "@/content/practical-topics";
import { connections } from "@/content/connections";
import { primaryTexts } from "@/content/primary-texts";

export { philosophers, concepts, traditions, branches, learningPaths, practices, practicalTopics, connections, primaryTexts };

const philosopherMap = new Map(philosophers.map((item) => [item.slug, item]));
const conceptMap = new Map(concepts.map((item) => [item.slug, item]));
const traditionMap = new Map(traditions.map((item) => [item.slug, item]));
const branchMap = new Map(branches.map((item) => [item.slug, item]));
const pathMap = new Map(learningPaths.map((item) => [item.slug, item]));
const practiceMap = new Map(practices.map((item) => [item.slug, item]));
const topicMap = new Map(practicalTopics.map((item) => [item.slug, item]));
const connectionMap = new Map(connections.map((item) => [item.slug, item]));

export function getPhilosopher(slug: string) {
  return philosopherMap.get(slug) ?? null;
}

export function getConcept(slug: string) {
  return conceptMap.get(slug) ?? null;
}

export function getTradition(slug: string) {
  return traditionMap.get(slug) ?? null;
}

export function getBranch(slug: string) {
  return branchMap.get(slug) ?? null;
}

export function getLearningPath(slug: string) {
  return pathMap.get(slug) ?? null;
}

export function getPractice(slug: string) {
  return practiceMap.get(slug) ?? null;
}

export function getPracticalTopic(slug: string) {
  return topicMap.get(slug) ?? null;
}

export function getConnection(slug: string) {
  return connectionMap.get(slug) ?? null;
}

export function getPhilosopherName(slug: string): string {
  return philosopherMap.get(slug)?.name ?? slug;
}

export function getConceptName(slug: string): string {
  return conceptMap.get(slug)?.name ?? slug;
}

export function getTraditionName(slug: string): string {
  return traditionMap.get(slug)?.name ?? slug;
}

export function getBranchName(slug: string): string {
  return branchMap.get(slug)?.name ?? slug;
}

export function getPracticeName(slug: string): string {
  return practiceMap.get(slug)?.title ?? slug;
}

export function getTopicName(slug: string): string {
  return topicMap.get(slug)?.title ?? slug;
}

export function getContentCounts() {
  return {
    philosophers: philosophers.length,
    concepts: concepts.length,
    traditions: traditions.length,
    branches: branches.length,
    paths: learningPaths.length,
    practices: practices.length,
    topics: practicalTopics.length,
    connections: connections.length,
  };
}

export function getFeaturedPaths(limit = 3) {
  return learningPaths.slice(0, limit);
}

export function getPracticesForTopic(topicSlug: string) {
  const topic = getPracticalTopic(topicSlug);
  if (!topic) return [];
  return topic.practices.map((slug) => practiceMap.get(slug)).filter((item) => item !== undefined);
}

export function getRelatedPhilosophers(slugs: string[]) {
  return slugs.map((slug) => philosopherMap.get(slug)).filter((item) => item !== undefined);
}

export function getRelatedConcepts(slugs: string[]) {
  return slugs.map((slug) => conceptMap.get(slug)).filter((item) => item !== undefined);
}

export function getRelatedLessonsMeta(slugs: string[]) {
  return slugs;
}

export function getConnectionForSlug(slug: string) {
  return connectionMap.get(slug) ?? null;
}

export function getAllConnections() {
  return connections;
}

export function getPrimaryTexts() {
  return primaryTexts;
}
