import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DATA = [
  {
    name: "Harry Potter and the Philosopher's Stone Kindle Edition",
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    price: 100,
    imageLink:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/5165He67NEL.jpg",
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    description:
      "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
    price: 120,
    imageLink:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/510CXXt9CqL.jpg",
  },
  {
    name: "Harry Potter and the Prisoner of Azkaban",
    description:
      "'Welcome to the Knight Bus, emergency transport for the stranded witch or wizard. Just stick out your wand hand, step on board and we can take you anywhere you want to go.'  When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...   Having become classics of our time, the Harry Potter eBooks never fail to bring comfort and escapism. With their message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
    price: 110,
    imageLink:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51n7uF9FfxL.jpg",
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
