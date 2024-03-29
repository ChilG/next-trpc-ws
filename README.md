# Prisma + tRPC + WebSockets + Expressjs

## Features

- ⚡ E2E type safety with [tRPC](https://trpc.io)
- ⚡ Full-stack React with Next.js
- ⚡ WebSockets / Subscription support
- ⚡ Database with Prisma
- 🎨 ESLint + Prettier

## Commands

```bash
npm run dev                 # runs dev with nodemon
npm run build               # build nextjs and custom server
npm run start               # starts next.js + WebSocket server
npm run lint                # start linting
npm run prisma:format       # format schema.prisma file
npm run prisma:generate     # generate schema.prisma
npm run prisma:migrate      # migrate prisma database
npm run prisma:deploy       # deploy database
npm run prisma:pull         # pull database to schema.prisma
```

---

## Docker 

### Prerequisites

- Docker
- Docker Compose

### Deployment

1. Clone this repository:

   ```bash
   git clone https://github.com/ChilG/next-trpc-ws

2. Navigate to the project directory:

   ```bash
   cd next-trpc-ws

3. Build and run the containers using Docker Compose:

   ```bash
   docker-compose up -d

4. Once the containers are up and running, you can access the web application at
   ```bash
   http://localhost:3000 # app-router
   http://localhost:3001 # page-router
