import express from 'express';
import next from 'next';
import {AppRouter, appRouter} from './src/server/api/root';
import {createTRPCContext} from './src/server/api/trpc';
import {createExpressMiddleware} from '@trpc/server/adapters/express';
import {applyWSSHandler} from '@trpc/server/adapters/ws';
import {WebSocketServer} from 'ws';
import cors from 'cors';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const nextServer = next({dev});
const handle = nextServer.getRequestHandler();

nextServer.prepare().then(() => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const middleware = createExpressMiddleware({
    router: appRouter,
    createContext: createTRPCContext,
  });

  app.use('/api/trpc', middleware);

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  const server = app.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  let wss;

  if (dev) {
    wss = new WebSocketServer({port: 3001, path: '/ws/trpc'});
  } else {
    wss = new WebSocketServer({server, path: '/ws/trpc'});
  }

  const handler = applyWSSHandler<AppRouter>({wss, router: appRouter, createContext: createTRPCContext});

  wss.on('connection', (ws) => {
    console.log(`➕➕ Connection (${wss.clients.size})`);
    ws.once('close', () => {
      console.log(`➖➖ Connection (${wss.clients.size})`);
    });
  });

  console.log('> WebSocket Server listening on ws://localhost:3000');

  process.on('SIGTERM', () => {
    console.log('SIGTERM');
    handler.broadcastReconnectNotification();
    wss.close();
  });
});
