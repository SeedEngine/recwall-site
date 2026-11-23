import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const count = await redis.incr('recwall:visits');
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ error: 'counter error' });
  }
}
