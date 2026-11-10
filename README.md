# The Philosophy Academy

An independent educational site for careful, non-dogmatic study of philosophy. It combines structured MDX lessons, learning paths, reference entries for thinkers and concepts, practical exercises, search, and a private notebook.

## Stack

- Next.js 15 App Router, React 19, strict TypeScript
- Tailwind CSS 3.4 with an editorial design system
- MDX via `next-mdx-remote/rsc`, `remark-gfm`, and `rehype-slug`
- Zod for content and API validation
- PGlite + Drizzle ORM for local persistence
- Hosted PostgreSQL + Drizzle ORM for serverless production deployments
- Custom scrypt authentication with database-backed sessions
- Vitest for unit tests

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The database initializes automatically on first use and persists to `.data/pglite`. No external database is required for local development.

## Environment

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata and sitemap | `http://localhost:3000` |
| `DATABASE_URL` | Hosted PostgreSQL connection string for production | unset |
| `PHILOSOPHY_DATA_DIR` | PGlite data directory | `.data/pglite` |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Validate content, then create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js ESLint checks |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run validate:content` | Validate lessons, references, paths, and connections |
| `npm test` | Run Vitest |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:studio` | Open Drizzle Studio |

## Content authoring

Lessons live in `content/lessons/*.mdx`. Frontmatter is validated by `lib/content/schemas.ts`.

```yaml
---
slug: "what-is-philosophy"
title: "What Is Philosophy?"
subtitle: "The art of staying with a question"
description: "A one-sentence description."
hook: "An opening question."
difficulty: "beginner"
branches: ["epistemology", "ethics"]
traditions: ["ancient-greek"]
philosophers: ["socrates", "plato"]
concepts: ["skepticism", "virtue"]
relatedLessons: ["plato-allegory-cave"]
learningObjectives:
  - "An objective."
checks:
  - question: "A question?"
    options: ["A", "B", "C", "D"]
    answerIndex: 0
    explanation: "Why the answer is correct."
furtherReading:
  - label: "Apology"
    author: "Plato"
    href: "https://www.gutenberg.org/ebooks/1656"
    kind: "primary"
---
```

Available MDX components:

- `<ThoughtExperiment title="...">...</ThoughtExperiment>`
- `<PullQuote attribution="...">...</PullQuote>`
- `<Caveat title="...">...</Caveat>`
- `<Argument conclusion="...">...</Argument>`

Run `npm run validate:content` after editing content. It checks unique slugs, minimum lesson length, comprehension checks, valid cross-references, path prerequisites, and resolvable connection links.

## Content structure

- `content/lessons/`: 20 MDX lessons
- `content/philosophers.ts`: 25 thinker entries
- `content/concepts.ts`: 31 concept entries
- `content/traditions.ts`: 16 traditions
- `content/branches.ts`: 10 branches
- `content/learning-paths.ts`: 10 sequenced paths
- `content/practices.ts`: 12 practical exercises
- `content/practical-topics.ts`: 12 applied topics
- `content/connections.ts`: 6 comparative entries
- `content/primary-texts.ts`: 18 reading-list entries

## Routes

Public content:

- `/` and `/discover`
- `/learn`, `/learn/paths`, `/learn/paths/[slug]`
- `/learn/lessons/[slug]`
- `/learn/branches/[slug]`, `/learn/traditions/[slug]`
- `/thinkers`, `/thinkers/philosophers/[slug]`, `/thinkers/concepts/[slug]`
- `/apply`, `/apply/topics/[slug]`, `/apply/practices/[slug]`
- `/search`, `/about`, `/methodology`

Account and notebook:

- `/sign-in`, `/sign-up`
- `/notebook`, `/notebook/notes`, `/notebook/bookmarks`, `/notebook/history`, `/notebook/practices`

API:

- `GET /api/notebook`
- `POST /api/notebook/bookmarks`
- `POST|PATCH|DELETE /api/notebook/notes`
- `POST /api/notebook/progress`
- `POST /api/notebook/history`
- `POST /api/notebook/practices`
- `GET /api/search`
- `POST /api/auth/signup`, `/api/auth/signin`, `/api/auth/signout`

## Authentication and notebook

Passwords are hashed with scrypt. Sessions are stored in the database and referenced by an httpOnly, SameSite=Lax cookie named `pa_session`. The session lifetime is 30 days.

The notebook supports:

- Bookmarks for lessons, thinkers, concepts, paths, practices, topics, traditions, and branches
- Free-form notes, optionally attached to a content entry
- Lesson progress (`started` / `completed`)
- Reading history
- Saved practices and dated practice completions with reflections

Anonymous users get a localStorage-backed notebook. Signed-in users sync through the API. Local data is not automatically merged into an account.

## Database

Local development uses PGlite, which is embedded PostgreSQL compiled to WebAssembly. Data is stored on disk under `.data/pglite`.

PGlite requires a persistent filesystem and a single application process. It is suitable for local development and a persistent Node server, but not for ephemeral serverless functions or multi-instance deployments.

For production on Vercel, create a hosted PostgreSQL database (for example, Neon,
Vercel Postgres, or Supabase), then add its connection string as the `DATABASE_URL`
environment variable in the Vercel project settings. The application initializes
the existing schema on the first serverless connection. PGlite remains available
when `DATABASE_URL` is unset during local development; production fails clearly
instead of attempting to write to Vercel's ephemeral filesystem.

Deploy with:

```bash
vercel
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL as well, so metadata and the
sitemap use the canonical host.

## Editorial standards

- Do not invent quotations or attribute positions without textual support.
- Keep quotations short and attributed.
- State the limits of comparisons rather than presenting resemblance as identity.
- Label practical exercises as experiments, not treatments.
- Prefer primary texts where a suitable open edition exists.

## Verification

Before shipping:

```bash
npm run validate:content
npm run typecheck
npm run lint
npm test
npm run build
```

## Known limitations

- Some external reading links may change or disappear; citations remain the authoritative reference.
- Local PGlite data is not shared with the hosted production database.
- The notebook does not merge anonymous local data into an account after sign-in.
- Content is educational and does not replace sustained reading of primary texts or professional care.
