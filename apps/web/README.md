# Cross Graph Web (Frontend)

The interactive visualization platform for **cross-graph**, built with **Next.js 16** and **React Flow**.

## Tech Stack

- **React Flow**: Powering the sermon graph visualizations.
- **Zustand**: Managing global graph state and node positions.
- **Supabase SSR**: Authentication and session management using the latest SSR package.
- **shadcn/ui**: Accessible and consistent UI components.
- **Tailwind CSS**: Utility-first styling.
- **@repo/types**: Shared Zod schemas for data integrity.

## Environment Variables

Create a `.env.local` file in this folder. These are required for both Authentication and API communication:

```env
# API Connection
NEXT_PUBLIC_API_URL="http://localhost:3001"

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

## Authentication Architecture

This project uses Supabase SSR with the following structure:

- `utils/supabase/client.ts`: For Client Components (`use client`).
- `utils/supabase/server.ts`: For Server Components and Server Actions.
- `utils/supabase/middleware.ts`: Handles automatic session refreshing.

## Running locally

1. Install dependencies:

```bash
// From the root of the monorepo
pnpm install
```

2. Run the frontend:

```bash
pnpm dev --filter web
```

## Shared Packages

This app relies on the following local workspace packages:
`@repo/types`: Used for validating Graph and Verse data structures.
