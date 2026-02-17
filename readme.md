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

1. Set up the environment variables for both the `api` and `web` apps.
2. Running the project
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

3. Verification and Building (Build)
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

4. Database (Prisma)
   Note: Connection code in PrismaService is currently commented out until Docker setup is complete.
   To generate the Prisma client once the database is live:

```Bash
pnpm db:generate
```

## Roadmap: Docker Integration

We are planning to integrate Docker Compose to streamline the local environment:

- Local **PostgreSQL** instance.
- **PgAdmin** for visual data management.
- Containerized development environment.

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
