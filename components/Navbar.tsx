import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
} from "@chakra-ui/react";

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

import { FiShoppingCart } from "react-icons/fi";

import cartAtom from "../atoms/cart";
import { useRecoilValue } from "recoil";
import Link from "next/link";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const cart = useRecoilValue(cartAtom);

  const totalCartItems = Object.keys(cart).reduce(
    (acc, key) => acc + cart[key],
    0
  );

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href={"/"}>
            <Box>Shopppee</Box>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Link href={"/cart"}>
                <Button rightIcon={<Icon as={FiShoppingCart} />}>
                  {totalCartItems}
                </Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? (
                  <Icon as={BsMoonStarsFill} />
                ) : (
                  <Icon as={BsSunFill} />
                )}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
