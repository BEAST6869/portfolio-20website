import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createServer } from '../server';

const app = createServer();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Remove /api prefix from the path
  req.url = req.url?.replace(/^\/api/, '') || '/';
  
  return new Promise<void>((resolve, reject) => {
    app(req as any, res as any, (err?: any) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
