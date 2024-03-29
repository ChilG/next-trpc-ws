import {PrismaClient} from '@prisma/client';

const dev = process.env.NODE_ENV !== 'production';

export const prisma = new PrismaClient({
  log: dev ? ['query', 'error', 'warn'] : ['error'],
});
