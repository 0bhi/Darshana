import { PageHeader } from "@/components/page-header";
import { ContentCard } from "@/components/content-card";
import { learningPaths } from "@/lib/content";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Learning paths",
  description:
    "Structured sequences through philosophy, with objectives, suggested order, and estimated reading time.",
};

export default function PathsPage() {
  const levels = ["beginner", "intermediate", "advanced"] as const;

  return (
    <div className="container-editorial">
      <PageHeader
        eyebrow="Learning paths"
        title="Choose a question and follow it"
        intro="A path is a sequence, not a syllabus. It suggests where to begin and what to read next, while leaving room for detours."
      />

      <div className="py-14">
        {levels.map((level) => {
          const paths = learningPaths.filter((path) => path.level === level);
          if (paths.length === 0) return null;

          return (
            <section key={level} className="mb-12 last:mb-0">
              <p className="label label-green">{level}</p>
              <div className="mt-5 grid gap-x-10 md:grid-cols-2">
                {paths.map((path) => (
                  <ContentCard
                    key={path.slug}
                    href={routes.path(path.slug)}
                    label={`${path.estimatedHours} hours`}
                    title={path.title}
                    description={path.description}
                    meta={`${path.lessonSlugs.length} lessons · ${path.objectives.length} objectives`}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
