# Cross Graph API (Backend)

The core engine of **cross-graph**, built with **NestJS**. It handles graph logic, user data, and biblical cross-references.

## Features

- **Prisma ORM**: Type-safe database access.
- **Zod Validation**: Strict schema validation for all incoming requests.
- **REST API**: Structured endpoints for graph management.

## Environment Variables

Create a `.env` file in this folder:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/crossgraph"
PORT=3001
```

## Tech Stack

- **Framework:** NestJS (TypeScript)
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Validation:** Zod
- **Auth:** Planned for future integration with Supabase Auth

## Running locally

1. Install dependencies:

```bash
// From the root of the monorepo
pnpm install
```

2. Run the backend:

```bash
pnpm dev --filter api
```

3. The API will be available at `http://localhost:3001`.

## Shared Packages

This app relies on the following local workspace packages:

`@repo/types`: Used for validating Graph and Verse data structures.
