import React from "react";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import cartAtom from "../atoms/cart";

import { Item } from "../interfaces";

function Details({ Item }: { Item: Item }) {
  const [cart, setCart] = useRecoilState(cartAtom);

  return (
    <Flex gap={"8"}>
      <Image src={Item.imageLink} alt={Item.name} height={"48"} />
      <Box>
        <Text fontSize={"xl"}>{Item.name}</Text>
        <Text fontSize={"sm"}>{Item.description}</Text>

        <Text fontSize={"2xl"}>${Item.price}</Text>

        <Box marginY={"12"}>
          <Button
            variant={"solid"}
            bg={"#F6BC00"}
            onClick={() => {
              setCart({ ...cart, [Item.id]: (cart[Item.id] || 0) + 1 });
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default Details;
