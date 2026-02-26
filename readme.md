# Cross Graph

A web application that allows pastors and users to visually map and explore connections between Bible verses. Pastors can create structured “sermon graphs” showing the flow of ideas and related scriptures, which their congregation can access in read-only mode. Users can add personal notes, explore connections interactively, and fork existing graphs to create their own study versions. The app combines collaborative Bible study, interactive visualizations, and a social layer for sharing insights, making sermon content and Bible study more engaging and easier to follow.

## Tech Stack

- **Monorepo Management:** [Turborepo](https://turbo.build/) + [pnpm](https://pnpm.io/)
- **Frontend:** [Next.js 15/16](https://nextjs.org/) (App Router + Turbopack)
- **Backend:** [NestJS](https://nestjs.com/) (TypeScript)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) (Frontend state & React Flow store)
- **Validation:** [Zod](https://zod.dev/) (Schema validation for API & Shared types)
- **Database & ORM:** [PostgreSQL](https://www.postgresql.org/) + [Prisma](https://www.prisma.io/)
- **Visualization:** [React Flow](https://reactflow.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Auth:** [Supabase Auth](https://supabase.com/auth) (planned for future integration)

## Project Structure

```text
cross-graph/
├── apps/
│   ├── api/          # NestJS backend
│   └── web/          # Next.js frontend
├── packages/
│   ├── db/           # Database schema and Prisma setup
│   └── types/        # Shared TypeScript types & Zod schemas (Single source of truth)
├── .prettierrc       # Prettier configuration
├── .prettierignore   # Prettier ignore file
├── package.json      # Root package.json with scripts and dependencies
├── turbo.json        # Turborepo configuration
└── README.md         # Project documentation
```

## Getting Started

If this is your first time setting up the project, install dependencies:

```bash
// Install all dependencies for the monorepo
pnpm install
```

This project uses **pnpm** workspaces and **Turborepo** for efficient monorepo management. To get started, follow these steps:

1. Infrastructure & DB: Follow the Local [Infrastructure section](#local-infrastructure-supabase--docker) to start Supabase and sync your database.

2. Environment Variables: Set up your .env files as described in the [Environment Variables section](#environment-variables).

3. Running the project
   - To run both the backend and frontend concurrently:
     ```bash
     pnpm dev
     ```
   - To run only the backend:
     ```bash
     pnpm dev --filter api
     ```
   - To run only the frontend:
     ```bash
     pnpm dev --filter web
     ```

4. Verification and Building (Build)
   It is highly recommended to run the build command periodically to ensure there are no TypeScript errors or dependency mismatches before major commits.

Build Entire Project:

```Bash
pnpm build
```

Test Next.js Build (Frontend):
Crucial for detecting hydration errors, static routing issues, or UI type mismatches.

```Bash
pnpm build --filter web
```

Test NestJS Build (Backend):
Essential to verify dependency injection, module consistency, and @repo/db integration.

```Bash
pnpm build --filter api
```

## Local Infrastructure (Supabase & Docker)

We use **Supabase CLI** to manage our local development environment. This provides a local PostgreSQL instance, Auth, and Storage services running on Docker.

### 1. Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) must be running.
- [Supabase CLI](https://supabase.com/docs/guides/cli) installed (`pnpm add -g supabase`).

### 2. Service Initialization

To start the local backend, run:

```bash
npx supabase start
```

This command will output your local API URL, anon key, and DB URL. Keep these handy for the .env setup.

3. Database Sync (Prisma 7)
   Once Supabase is running, sync your Prisma schema with the local Postgres instance:

```bash
pnpm --filter @repo/db db:push
```

This will apply your Prisma schema to the local database without generating a migration, which is ideal for rapid development.

## Environment Variables

Each application requires specific environment variables. Do not share your keys. Each collaborator generates their own by running `supabase start`.

To set up your local environment for the first time, copy the templates and fill in the values:

1. Frontend (.env.local):

```bash
cp apps/web/.env.example apps/web/.env.local
```

2. Backend (.env):

```bash
cp apps/api/.env.example apps/api/.env
```

3. Database (Prisma)

```bash
cp packages/db/.env.example packages/db/.env
```

> If you modify the project and a new environment variable is required, you must update the corresponding .env.example template to keep the repository's configuration up to date for all collaborators.

---

## Adding Dependencies

To add a new dependency to a specific package or app, use the following command:

```bash
// Add to the root
pnpm add -D <package-name> -w
// Add to a backend package
pnpm add -D <package-name> --filter api
// Add to a frontend package
pnpm add -D <package-name> --filter web
```

## Contributing & Workflow

This project follows a simplified GitFlow:

- **`main`**: Production-ready code only.
- **`develop`**: Integration branch for new features.

**Branching Rules:**

1. All changes must be made via **Pull Requests** targeting `develop`.
2. PRs require a mandatory review and approval from the **Code Owner** (@hectorslqm) before merging.
3. Direct pushes to `main` or `develop` are restricted.
