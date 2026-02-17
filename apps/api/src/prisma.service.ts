import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import { PrismaClient } from '@repo/db'; // Uncomment when the DB is ready

@Injectable()
// extends PrismaClient  // Temporarily commented out
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // Simulate a successful connection so Nest can start
    console.log('--- DB Mode: Offline (Prisma connection skipped) ---');
    // await this.$connect();
  }

  async onModuleDestroy() {
    // await this.$disconnect();
  }

  // If another service calls "this.prismaService.user...",
  // this prevents the app from crashing immediately (though it returns undefined)
  get user() {
    return null as any;
  }
  get graph() {
    return null as any;
  }
}
