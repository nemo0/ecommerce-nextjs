import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.item.deleteMany();
  res.status(200).json({
    message: "All items deleted",
    data,
  });
}
