# Database Package (@repo/db)

This package contains the **Prisma** schema, migrations, and the shared Prisma Client used by the API.

## Features

- **Prisma ORM**: Single source of truth for the database schema.
- **Shared Client**: Exported for use in the NestJS `PrismaService`.

## Key Commands

Run these from the root using filters:

- **Generate Client:** Update the Prisma Client after schema changes.

```bash
pnpm db:generate
```

- Studio: Visual GUI to explore your local data.

```bash
pnpm --filter @repo/db exec prisma studio
```

- **Migration:** Push schema changes to the database.

```bash
pnpm --filter @repo/db exec prisma migrate dev
```

## Structure

- `schema.prisma`: Defines the database schema and models.
- `seed.ts`: Script to populate the DB with initial Bible verses.

## Seeding the Database

To populate your local database with initial Bible verses, sample nodes, and study graphs for development, we use a **seed script**.

### How to Seed

1. Ensure your database is running and migrations are applied.
2. Run the following command from the root:

```bash
pnpm --filter @repo/db db:seed
```

### Seed Configuration

The seeding logic is located in `prisma/seed.ts`. It uses Prisma Client to perform upsert operations, ensuring that running the script multiple times won't create duplicate entries.

This is essential for:

- Testing React Flow with real biblical data.
- Initializing default user roles or categories.
- Having a "ready-to-go" environment after a database reset.

> **Note:** No seed data has been added yet, but the structure is in place for easy expansion as we develop the API and frontend features.
