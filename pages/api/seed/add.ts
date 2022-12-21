import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DATA = [
  {
    name: "Item 1",
    description: "This is item 1",
    price: 100,
    imageLink:
      "https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Item 2",
    description: "This is item 2",
    price: 200,
    imageLink:
      "https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Item 3",
    description: "This is item 3",
    price: 300,
    imageLink:
      "https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.item.createMany({
    data: DATA,
    skipDuplicates: true,
  });
  res.status(200).json(data);
}
