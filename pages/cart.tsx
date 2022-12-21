import React from "react";

import {
  Box,
  Button,
  Container,
  Text,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

import { useRecoilState } from "recoil";

import cartAtom from "../atoms/cart";

import { Item } from "../interfaces";

import CartItem from "../components/CartItem";

const CartDetails = () => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [cartItems, setCartItems] = React.useState<Item[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [totalCartItems, setTotalCartItems] = React.useState<number>(0);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const [orderPlaced, setOrderPlaced] = React.useState<boolean>(false);

  const allItemsInCart = Object.keys(cart).map((key) => Number(key));

  const getItems = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post<Item[]>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/find`,
        {
          ids: allItemsInCart,
        }
      );
      setCartItems(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  cartItems.length > 0 &&
    cartItems.forEach((item) => {
      item.quantity = cart[item.id];
    });

  React.useEffect(() => {
    getItems();
    setTotalCartItems(
      Object.keys(cart).reduce((acc, key) => acc + cart[key], 0)
    );
  }, [cart]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
      )
    );
  }, [cartItems]);

  return (
    <Container maxW={"7xl"} marginY={"12"}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem Item={item} key={item.id} setCart={setCart} />
        ))
      ) : isLoading ? (
        <Spinner size={"xl"} />
      ) : (
        <Text fontSize={"2xl"}>No items in cart</Text>
      )}
      <Box>
        <Box>
          <Text fontSize={"md"}>Total Items: {totalCartItems}</Text>
          <Text fontSize={"md"}>Total Price: ${totalPrice}</Text>
        </Box>
        <Box>
          <Textarea
            placeholder={"Enter your address"}
            marginY={4}
            disabled={cartItems.length === 0}
          />
          <Button
            variant={"solid"}
            bg={"#F6BC00"}
            disabled={cartItems.length === 0}
            onClick={() => {
              setIsLoading(true);
              setCart({});
              setIsLoading(false);
              setOrderPlaced(true);
            }}
          >
            Place Order
          </Button>
          {orderPlaced && (
            <Text
              fontSize={"lg"}
              padding={"6"}
              bgColor={"green.500"}
              marginY={4}
              textColor={"white"}
            >
              Order Placed Successfully 🎉
            </Text>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default CartDetails;
