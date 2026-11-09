import { z } from "zod";

export const difficultySchema = z.enum(["beginner", "intermediate", "advanced"]);
export const sourceTypeSchema = z.enum([
  "historical",
  "modern-adaptation",
  "editorial-interpretation",
]);
export const frequencySchema = z.enum(["daily", "weekly", "situational"]);

export const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().optional(),
  note: z.string().optional(),
});

export const furtherReadingSchema = z.object({
  label: z.string().min(1),
  author: z.string().optional(),
  note: z.string().optional(),
  href: z.string().optional(),
  kind: z.enum(["primary", "secondary", "reference"]).default("secondary"),
});

export const comprehensionCheckSchema = z
  .object({
    question: z.string().min(1),
    options: z.array(z.string().min(1)).min(2).max(4),
    answerIndex: z.number().int().min(0).max(3),
    explanation: z.string().min(1),
  })
  .superRefine((check, ctx) => {
    if (check.answerIndex >= check.options.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "answerIndex must point to an existing option",
        path: ["answerIndex"],
      });
    }
  });

export const lessonFrontmatterSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  hook: z.string().min(1),
  difficulty: difficultySchema,
  branches: z.array(z.string()).min(1),
  traditions: z.array(z.string()).default([]),
  philosophers: z.array(z.string()).default([]),
  concepts: z.array(z.string()).default([]),
  relatedLessons: z.array(z.string()).default([]),
  learningObjectives: z.array(z.string()).min(1),
  checks: z.array(comprehensionCheckSchema).default([]),
  furtherReading: z.array(furtherReadingSchema).default([]),
  published: z.boolean().default(true),
  featured: z.boolean().default(false),
});

export type LessonFrontmatter = z.infer<typeof lessonFrontmatterSchema>;

export const philosopherSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  dates: z.string().min(1),
  era: z.string().min(1),
  traditions: z.array(z.string()).min(1),
  summary: z.string().min(1),
  biography: z.array(z.string()).min(1),
  context: z.array(z.string()).default([]),
  ideas: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(2),
  works: z
    .array(
      z.object({
        title: z.string().min(1),
        date: z.string().optional(),
        note: z.string().optional(),
      }),
    )
    .min(1),
  criticisms: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .default([]),
  concepts: z.array(z.string()).default([]),
  relatedPhilosophers: z.array(z.string()).default([]),
  relatedLessons: z.array(z.string()).default([]),
  furtherReading: z.array(furtherReadingSchema).default([]),
  portrait: z
    .object({
      src: z.string(),
      alt: z.string(),
      credit: z.string(),
    })
    .optional(),
});

export type Philosopher = z.infer<typeof philosopherSchema>;

export const conceptSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  alternateNames: z.array(z.string()).optional(),
  shortDefinition: z.string().min(1),
  significance: z.string().min(1),
  origins: z.string().min(1),
  interpretations: z
    .array(
      z.object({
        label: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1),
  arguments: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .default([]),
  criticisms: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .default([]),
  philosophers: z.array(z.string()).default([]),
  traditions: z.array(z.string()).default([]),
  relatedConcepts: z.array(z.string()).default([]),
  relatedLessons: z.array(z.string()).default([]),
  practicalRelevance: z.string().optional(),
});

export type Concept = z.infer<typeof conceptSchema>;

export const traditionSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  region: z.string().min(1),
  era: z.string().min(1),
  summary: z.string().min(1),
  description: z.array(z.string()).min(1),
  centralQuestions: z.array(z.string()).min(2),
  figures: z
    .array(
      z.object({
        name: z.string().min(1),
        slug: z.string().optional(),
      }),
    )
    .min(1),
  keyTexts: z.array(linkSchema).default([]),
  relatedLessons: z.array(z.string()).default([]),
  relatedTraditions: z.array(z.string()).default([]),
});

export type Tradition = z.infer<typeof traditionSchema>;

export const branchSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  centralQuestions: z.array(z.string()).min(2),
  subfields: z.array(z.string()).default([]),
  relatedLessons: z.array(z.string()).default([]),
  relatedConcepts: z.array(z.string()).default([]),
});

export type Branch = z.infer<typeof branchSchema>;

export const learningPathSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  level: difficultySchema,
  estimatedHours: z.number().positive(),
  objectives: z.array(z.string()).min(2),
  prerequisites: z.array(z.string()).default([]),
  lessonSlugs: z.array(z.string()).min(3),
  branches: z.array(z.string()).default([]),
  traditions: z.array(z.string()).default([]),
});

export type LearningPath = z.infer<typeof learningPathSchema>;

export const practiceSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  description: z.string().min(1),
  sourceType: sourceTypeSchema,
  sourceNote: z.string().min(1),
  philosophicalSource: z
    .array(
      z.object({
        name: z.string().min(1),
        slug: z.string().optional(),
      }),
    )
    .min(1),
  origin: z.string().min(1),
  historicalContext: z.string().min(1),
  principle: z.string().min(1),
  instructions: z.array(z.string()).min(3),
  frequency: frequencySchema,
  timeCommitment: z.string().min(1),
  reflectionPrompts: z.array(z.string()).min(2),
  limitations: z.array(z.string()).min(1),
  relatedLessons: z.array(z.string()).default([]),
  relatedConcepts: z.array(z.string()).default([]),
  relatedPhilosophers: z.array(z.string()).default([]),
  relatedTopics: z.array(z.string()).default([]),
});

export type Practice = z.infer<typeof practiceSchema>;

export const practicalTopicSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  intro: z.array(z.string()).min(1),
  sections: z
    .array(
      z.object({
        title: z.string().min(1),
        body: z.array(z.string()).min(1),
      }),
    )
    .min(2),
  practices: z.array(z.string()).default([]),
  lessons: z.array(z.string()).default([]),
  philosophers: z.array(z.string()).default([]),
  concepts: z.array(z.string()).default([]),
  reflectionPrompts: z.array(z.string()).min(2),
  relatedTopics: z.array(z.string()).default([]),
});

export type PracticalTopic = z.infer<typeof practicalTopicSchema>;

export const connectionSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  left: z.object({
    label: z.string().min(1),
    href: z.string().min(1),
  }),
  right: z.object({
    label: z.string().min(1),
    href: z.string().min(1),
  }),
  summary: z.string().min(1),
  resonance: z.array(z.string()).min(1),
  difference: z.array(z.string()).min(1),
  caveat: z.string().min(1),
  relatedLessons: z.array(z.string()).default([]),
});

export type Connection = z.infer<typeof connectionSchema>;

export const primaryTextSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  author: z.string().min(1),
  authorSlug: z.string().optional(),
  date: z.string().min(1),
  tradition: z.string().optional(),
  note: z.string().min(1),
  href: z.string().optional(),
});

export type PrimaryText = z.infer<typeof primaryTextSchema>;
