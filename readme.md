# Cross Graph

A web application that allows pastors and users to visually map and explore connections between Bible verses. Pastors can create structured “sermon graphs” showing the flow of ideas and related scriptures, which their congregation can access in read-only mode. Users can add personal notes, explore connections interactively, and fork existing graphs to create their own study versions. The app combines collaborative Bible study, interactive visualizations, and a social layer for sharing insights, making sermon content and Bible study more engaging and easier to follow.

## Tech Stack

- **Monorepo Management:** [Turborepo](https://turbo.build/) + [pnpm](https://pnpm.io/)
- **Frontend:** [Next.js 14](https://nextjs.org/) (App Router)
- **Backend:** [NestJS](https://nestjs.com/) (TypeScript)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Visualization:** [React Flow](https://reactflow.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Auth:** [Supabase Auth](https://supabase.com/auth)

## Project Structure

```text
cross-graph/
├── apps/
│   ├── api/          # NestJS backend
│   └── web/          # Next.js frontend
├── packages/
│   ├── db/           # Database schema and Prisma setup
│   └── types/        # Shared TypeScript types
├── .prettierrc       # Prettier configuration
├── .prettierignore   # Prettier ignore file
├── package.json      # Root package.json with scripts and dependencies
├── turbo.json        # Turborepo configuration
└── README.md         # Project documentation
```

## Getting Started

This project uses pnpm workspaces and Turborepo for efficient monorepo management. To get started, follow these steps:

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Set up the environment variables for both the `api` and `web` apps.
3. Running the project
   - To run both the backend and frontend concurrently:
     ```bash
     pnpm dev
     ```
   - To run only the backend:
     ```bash
     pnpm --filter api dev
     ```
   - To run only the frontend:
     ```bash
     pnpm --filter web dev
     ```

### Adding Dependencies

To add a new dependency to a specific package or app, use the following command:

```bash
// Add to the root
pnpm add -D <package-name> -w
// Add to a backend package
pnpm add -D <package-name> --filter api
// Add to a frontend package
pnpm add -D <package-name> --filter web
```
