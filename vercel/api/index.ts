import serverless from "serverless-http";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createServer } from "../../server";

const handler = serverless(createServer());

export default async function vercelHandler(req: VercelRequest, res: VercelResponse) {
  return handler(req as any, res as any);
}
