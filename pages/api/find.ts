import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { ids } = req.body;

  if (!ids) return res.status(400).json({ error: "No ids provided" });
  const items = await prisma.item.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  res.json(items);
}
