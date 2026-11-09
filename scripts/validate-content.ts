import { getAllLessons } from "../lib/content/lessons";
import {
  philosophers,
  concepts,
  traditions,
  branches,
  learningPaths,
  practices,
  practicalTopics,
  connections,
  primaryTexts,
} from "../lib/content";
import {
  branchSchema,
  conceptSchema,
  connectionSchema,
  learningPathSchema,
  philosopherSchema,
  practicalTopicSchema,
  practiceSchema,
  primaryTextSchema,
  traditionSchema,
} from "../lib/content/schemas";

const errors: string[] = [];
const warnings: string[] = [];

function fail(message: string) {
  errors.push(message);
}

function warn(message: string) {
  warnings.push(message);
}

function checkUnique(label: string, slugs: string[]) {
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) fail(`${label}: duplicate slug "${slug}"`);
    seen.add(slug);
  }
}

function checkRefs(
  label: string,
  refs: string[],
  valid: Set<string>,
  kind: string,
) {
  for (const ref of refs) {
    if (!valid.has(ref)) fail(`${label}: unknown ${kind} "${ref}"`);
  }
}

const lessonList = getAllLessons();
const publishedLessons = lessonList.filter((lesson) => lesson.frontmatter.published);
const lessonSlugs = new Set(lessonList.map((lesson) => lesson.frontmatter.slug));
const philosopherSlugs = new Set(philosophers.map((item) => item.slug));
const conceptSlugs = new Set(concepts.map((item) => item.slug));
const traditionSlugs = new Set(traditions.map((item) => item.slug));
const branchSlugs = new Set(branches.map((item) => item.slug));
const pathSlugs = new Set(learningPaths.map((item) => item.slug));
const practiceSlugs = new Set(practices.map((item) => item.slug));
const topicSlugs = new Set(practicalTopics.map((item) => item.slug));

checkUnique("lessons", lessonList.map((item) => item.frontmatter.slug));
checkUnique("philosophers", philosophers.map((item) => item.slug));
checkUnique("concepts", concepts.map((item) => item.slug));
checkUnique("traditions", traditions.map((item) => item.slug));
checkUnique("branches", branches.map((item) => item.slug));
checkUnique("paths", learningPaths.map((item) => item.slug));
checkUnique("practices", practices.map((item) => item.slug));
checkUnique("topics", practicalTopics.map((item) => item.slug));
checkUnique("connections", connections.map((item) => item.slug));

for (const lesson of lessonList) {
  const fm = lesson.frontmatter;
  const label = `lesson "${fm.slug}"`;
  checkRefs(label, fm.branches, branchSlugs, "branch");
  checkRefs(label, fm.traditions, traditionSlugs, "tradition");
  checkRefs(label, fm.philosophers, philosopherSlugs, "philosopher");
  checkRefs(label, fm.concepts, conceptSlugs, "concept");
  checkRefs(label, fm.relatedLessons, lessonSlugs, "lesson");
  if (fm.relatedLessons.includes(fm.slug)) {
    fail(`${label}: relates to itself`);
  }
  if (fm.published && lesson.wordCount < 500) {
    fail(`${label}: published lesson has only ${lesson.wordCount} words`);
  }
  if (fm.published && fm.checks.length === 0) {
    fail(`${label}: published lesson has no comprehension check`);
  }
  if (fm.published && fm.furtherReading.length === 0) {
    warn(`${label}: no further reading listed`);
  }
  for (const item of fm.furtherReading) {
    if (item.href && !/^https?:\/\//.test(item.href)) {
      fail(`${label}: further reading link must be absolute: ${item.href}`);
    }
  }
}

for (const item of philosophers) {
  philosopherSchema.parse(item);
  const label = `philosopher "${item.slug}"`;
  checkRefs(label, item.traditions, traditionSlugs, "tradition");
  checkRefs(label, item.concepts, conceptSlugs, "concept");
  checkRefs(label, item.relatedPhilosophers, philosopherSlugs, "philosopher");
  checkRefs(label, item.relatedLessons, lessonSlugs, "lesson");
}

for (const item of concepts) {
  conceptSchema.parse(item);
  const label = `concept "${item.slug}"`;
  checkRefs(label, item.philosophers, philosopherSlugs, "philosopher");
  checkRefs(label, item.traditions, traditionSlugs, "tradition");
  checkRefs(label, item.relatedConcepts, conceptSlugs, "concept");
  checkRefs(label, item.relatedLessons, lessonSlugs, "lesson");
  if (item.relatedConcepts.includes(item.slug)) {
    fail(`${label}: relates to itself`);
  }
}

for (const item of traditions) {
  traditionSchema.parse(item);
  const label = `tradition "${item.slug}"`;
  for (const figure of item.figures) {
    if (figure.slug) checkRefs(label, [figure.slug], philosopherSlugs, "philosopher");
  }
  checkRefs(label, item.relatedLessons, lessonSlugs, "lesson");
  checkRefs(label, item.relatedTraditions, traditionSlugs, "tradition");
  if (item.relatedTraditions.includes(item.slug)) {
    fail(`${label}: relates to itself`);
  }
}

for (const item of branches) {
  branchSchema.parse(item);
  const label = `branch "${item.slug}"`;
  checkRefs(label, item.relatedLessons, lessonSlugs, "lesson");
  checkRefs(label, item.relatedConcepts, conceptSlugs, "concept");
}

for (const item of learningPaths) {
  learningPathSchema.parse(item);
  const label = `path "${item.slug}"`;
  checkRefs(label, item.lessonSlugs, lessonSlugs, "lesson");
  checkRefs(label, item.branches, branchSlugs, "branch");
  checkRefs(label, item.traditions, traditionSlugs, "tradition");
  checkRefs(label, item.prerequisites, pathSlugs, "path");
  if (item.lessonSlugs.length < 3) {
    fail(`${label}: needs at least three lessons`);
  }
}

for (const item of practices) {
  practiceSchema.parse(item);
  const label = `practice "${item.slug}"`;
  checkRefs(label, item.relatedLessons, lessonSlugs, "lesson");
  checkRefs(label, item.relatedConcepts, conceptSlugs, "concept");
  checkRefs(label, item.relatedPhilosophers, philosopherSlugs, "philosopher");
  checkRefs(label, item.relatedTopics, topicSlugs, "topic");
  for (const source of item.philosophicalSource) {
    if (source.slug) checkRefs(label, [source.slug], philosopherSlugs, "philosopher");
  }
}

for (const item of practicalTopics) {
  practicalTopicSchema.parse(item);
  const label = `topic "${item.slug}"`;
  checkRefs(label, item.practices, practiceSlugs, "practice");
  checkRefs(label, item.lessons, lessonSlugs, "lesson");
  checkRefs(label, item.philosophers, philosopherSlugs, "philosopher");
  checkRefs(label, item.concepts, conceptSlugs, "concept");
  checkRefs(label, item.relatedTopics, topicSlugs, "topic");
  if (item.relatedTopics.includes(item.slug)) {
    fail(`${label}: relates to itself`);
  }
}

for (const item of connections) {
  connectionSchema.parse(item);
  const label = `connection "${item.slug}"`;
  checkRefs(label, item.relatedLessons, lessonSlugs, "lesson");
  for (const side of [item.left, item.right]) {
    const segments = side.href.replace(/^\//, "").split("/");
    if (segments.length !== 3) {
      fail(`${label}: invalid href ${side.href}`);
      continue;
    }
    const section = `${segments[0]}/${segments[1]}`;
    const slug = segments[2];
    if (!slug) {
      fail(`${label}: invalid href ${side.href}`);
      continue;
    }
    const map: Record<string, Set<string>> = {
      "thinkers/philosophers": philosopherSlugs,
      "thinkers/concepts": conceptSlugs,
      "learn/traditions": traditionSlugs,
      "learn/branches": branchSlugs,
      "learn/lessons": lessonSlugs,
      "learn/paths": pathSlugs,
      "apply/practices": practiceSlugs,
      "apply/topics": topicSlugs,
    };
    if (!map[section]?.has(slug)) {
      fail(`${label}: href does not resolve: ${side.href}`);
    }
  }
}

for (const item of primaryTexts) {
  primaryTextSchema.parse(item);
  const label = `primary text "${item.slug}"`;
  if (item.authorSlug) checkRefs(label, [item.authorSlug], philosopherSlugs, "philosopher");
  if (item.tradition) checkRefs(label, [item.tradition], traditionSlugs, "tradition");
}

const referencedLessons = new Set(
  learningPaths.flatMap((path) => path.lessonSlugs),
);
for (const lesson of publishedLessons) {
  if (!referencedLessons.has(lesson.frontmatter.slug)) {
    warn(`lesson "${lesson.frontmatter.slug}" is not part of any learning path`);
  }
}

const totalWords = publishedLessons.reduce((sum, lesson) => sum + lesson.wordCount, 0);

if (warnings.length > 0) {
  console.log("\nWarnings:");
  for (const warning of warnings) console.log(`  - ${warning}`);
}

if (errors.length > 0) {
  console.error("\nContent validation failed:");
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `\nContent validated: ${publishedLessons.length} lessons (${totalWords.toLocaleString()} words), ` +
    `${philosophers.length} philosophers, ${concepts.length} concepts, ` +
    `${traditions.length} traditions, ${branches.length} branches, ` +
    `${learningPaths.length} paths, ${practices.length} practices, ` +
    `${practicalTopics.length} topics, ${connections.length} connections.`,
);
