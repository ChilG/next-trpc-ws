import {createClient} from 'redis';

const url = process.env.REDIS_URL;

export const redisConnection = createClient({url});

export const redisChannels = (id: string) => {
  return {};
};
