import { Cart } from "../interfaces";
import { Flex, Image, Box, Text, Button } from "@chakra-ui/react";

const CartItem = ({ Item, setCart }: Cart) => {
  return (
    <Flex gap={12} marginY={4}>
      <Image
        src={Item.imageLink}
        alt={Item.name}
        height={"48"}
        rounded={"md"}
      />
      <Flex flexDirection={"column"} justifyContent={"space-between"}>
        <Box>
          <Text fontSize={"xl"}>{Item.name}</Text>
          <Text fontSize={"sm"}>{Item.description}</Text>

          <Text fontSize={"2xl"}>
            ${Item.price} <span className="text-xs"> x {Item.quantity}</span>
          </Text>
        </Box>
        <Box>
          <Flex justifyContent={"space-between"} marginY={"4"} columnGap={2}>
            <Button
              variant={"solid"}
              bg={"red.500"}
              marginTop={4}
              onClick={() => {
                setCart((prev: any) => {
                  const newCart = { ...prev };
                  delete newCart[Item.id];
                  return newCart;
                });
              }}
            >
              Remove from Cart
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartItem;
