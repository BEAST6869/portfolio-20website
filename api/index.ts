import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createServer } from "../server";

const app = createServer();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  return new Promise<void>((resolve, reject) => {
    // Set up the request for Express
    req.url = req.url || "/";

    app(req as any, res as any, (err?: any) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
