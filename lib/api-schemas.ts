import { z } from "zod";
import { ENTITY_TYPES } from "@/lib/notebook/types";

export const entityTypeSchema = z.enum(ENTITY_TYPES);

export const slugSchema = z
  .string()
  .trim()
  .min(1)
  .max(160)
  .regex(/^[a-z0-9-]+$/, "Invalid slug");

export const titleSchema = z.string().trim().min(1).max(160);
export const bodySchema = z.string().trim().min(1).max(20000);
export const hrefSchema = z
  .string()
  .trim()
  .min(1)
  .max(500)
  .refine(
    (value) => value.startsWith("/") && !value.startsWith("//"),
    "Href must be a local path",
  );

export const entityContextSchema = z.object({
  entityType: entityTypeSchema.nullable().optional(),
  entitySlug: slugSchema.nullable().optional(),
  entityTitle: titleSchema.nullable().optional(),
  entityHref: hrefSchema.nullable().optional(),
});

export const practiceTargetSchema = z.object({
  practiceSlug: slugSchema,
  practiceTitle: titleSchema,
  practiceHref: hrefSchema,
});

export const lessonProgressSchema = z.object({
  lessonSlug: slugSchema,
  lessonTitle: titleSchema,
  lessonHref: hrefSchema,
  status: z.enum(["started", "completed"]),
});

export const bookmarkSchema = z
  .object({
    entityType: entityTypeSchema,
    entitySlug: slugSchema,
    entityTitle: titleSchema,
    entityHref: hrefSchema,
    saved: z.boolean(),
  })
  .strict();

export const historySchema = z
  .object({
    entityType: entityTypeSchema,
    entitySlug: slugSchema,
    entityTitle: titleSchema,
    entityHref: hrefSchema,
  })
  .strict();

export const noteCreateSchema = z
  .object({
    title: titleSchema,
    body: bodySchema,
  })
  .merge(entityContextSchema)
  .strict();

export const noteUpdateSchema = z
  .object({
    id: z.string().uuid(),
    title: titleSchema,
    body: bodySchema,
  })
  .strict();

export const idSchema = z.object({
  id: z.string().uuid(),
});

export const practiceActionSchema = z.discriminatedUnion("action", [
  practiceTargetSchema
    .extend({
      action: z.literal("save"),
      saved: z.boolean(),
    })
    .strict(),
  practiceTargetSchema
    .extend({
      action: z.literal("complete"),
      reflection: z.string().trim().max(5000).nullable().optional(),
    })
    .strict(),
  z
    .object({
      action: z.literal("delete-completion"),
      completionId: z.string().uuid(),
    })
    .strict(),
]);

export const signUpSchema = z
  .object({
    name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
    email: z.string().trim().toLowerCase().email().max(254),
    password: z.string().min(8, "Password must be at least 8 characters").max(200),
  })
  .strict();

export const signInSchema = z
  .object({
    email: z.string().trim().toLowerCase().email().max(254),
    password: z.string().min(1).max(200),
  })
  .strict();
