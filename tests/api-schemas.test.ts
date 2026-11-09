import { describe, expect, it } from "vitest";
import {
  bookmarkSchema,
  historySchema,
  hrefSchema,
  lessonProgressSchema,
  noteCreateSchema,
  practiceActionSchema,
  signInSchema,
  signUpSchema,
} from "@/lib/api-schemas";

describe("API schemas", () => {
  it("accepts local hrefs and rejects external or protocol-relative hrefs", () => {
    expect(hrefSchema.safeParse("/learn/lessons/what-is-philosophy").success).toBe(true);
    expect(hrefSchema.safeParse("https://example.com").success).toBe(false);
    expect(hrefSchema.safeParse("//example.com").success).toBe(false);
    expect(hrefSchema.safeParse("javascript:alert(1)").success).toBe(false);
  });

  it("validates bookmarks and strips unknown fields", () => {
    const valid = {
      entityType: "lesson",
      entitySlug: "what-is-philosophy",
      entityTitle: "What Is Philosophy?",
      entityHref: "/learn/lessons/what-is-philosophy",
      saved: true,
    };
    expect(bookmarkSchema.safeParse(valid).success).toBe(true);
    expect(bookmarkSchema.safeParse({ ...valid, extra: "nope" }).success).toBe(false);
    expect(bookmarkSchema.safeParse({ ...valid, entityType: "unknown" }).success).toBe(false);
  });

  it("validates lesson progress and history", () => {
    expect(
      lessonProgressSchema.safeParse({
        lessonSlug: "what-is-philosophy",
        lessonTitle: "What Is Philosophy?",
        lessonHref: "/learn/lessons/what-is-philosophy",
        status: "completed",
      }).success,
    ).toBe(true);
    expect(
      historySchema.safeParse({
        entityType: "philosopher",
        entitySlug: "plato",
        entityTitle: "Plato",
        entityHref: "/thinkers/philosophers/plato",
      }).success,
    ).toBe(true);
  });

  it("normalizes optional note context", () => {
    const parsed = noteCreateSchema.safeParse({
      title: "A question",
      body: "What survives replacement?",
    });
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.entityType).toBeUndefined();
    }
  });

  it("validates each practice action", () => {
    const target = {
      practiceSlug: "socratic-questioning",
      practiceTitle: "Socratic questioning",
      practiceHref: "/apply/practices/socratic-questioning",
    };
    expect(practiceActionSchema.safeParse({ ...target, action: "save", saved: true }).success).toBe(true);
    expect(
      practiceActionSchema.safeParse({ ...target, action: "complete", reflection: null }).success,
    ).toBe(true);
    expect(
      practiceActionSchema.safeParse({
        action: "delete-completion",
        completionId: "00000000-0000-4000-8000-000000000000",
      }).success,
    ).toBe(true);
    expect(practiceActionSchema.safeParse({ ...target, action: "unknown" }).success).toBe(false);
  });

  it("validates sign-up and sign-in payloads", () => {
    expect(
      signUpSchema.safeParse({
        name: "Ada",
        email: "ADA@example.com",
        password: "correct horse",
      }).success,
    ).toBe(true);
    expect(
      signUpSchema.safeParse({ name: "A", email: "not-an-email", password: "short" }).success,
    ).toBe(false);
    expect(signInSchema.safeParse({ email: "ada@example.com", password: "x" }).success).toBe(true);
    expect(signInSchema.safeParse({ email: "ada@example.com", password: "" }).success).toBe(false);
  });
});
