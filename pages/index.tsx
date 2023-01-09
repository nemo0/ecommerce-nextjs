import React from "react";
import { Container } from "@chakra-ui/react";

import ItemCard from "../components/ItemCard";
import { Item } from "../interfaces";

import { PrismaClient } from "@prisma/client";

interface IProps {
  items: Item[];
}

const Home = (props: IProps) => {
  const items = props.items;

  return (
    <Container maxW={"7xl"} paddingY={"4"}>
      {items.map((item) => (
        <ItemCard Item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Home;

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const data = await prisma.item.findMany();

  return {
    props: {
      items: data,
    },
  };
}
