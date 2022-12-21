import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { Item } from "../interfaces";
import Link from "next/link";

function ItemCard({ Item }: { Item: Item }) {
  return (
    <Link href={`/${Item.id}`}>
      <Flex width={"83%"} justifyContent={"space-between"} marginY={"4"}>
        <Flex gap={"6"}>
          <Image src={Item.imageLink} alt={Item.name} height={"48"} />
          <Box>
            <Text fontSize={"xl"}>{Item.name}</Text>
            <Text fontSize={"sm"}>{Item.description}</Text>
          </Box>
        </Flex>
        <Box>
          <Text fontSize={"2xl"}>${Item.price}</Text>
        </Box>
      </Flex>
    </Link>
  );
}

export default ItemCard;
