import React from "react";
import { Container } from "@chakra-ui/react";

import Details from "../../components/Details";

import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { PrismaClient } from "@prisma/client";
import { Item } from "../../interfaces";

interface IProps {
  item: Item;
}

function ProductDetails(props: IProps) {
  return (
    <Container maxW={"7xl"} marginY={"12"}>
      <Details Item={props.item} />
    </Container>
  );
}

export default ProductDetails;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;
  const prisma = new PrismaClient();

  const item = await prisma.item.findUnique({
    where: {
      id: Number(id),
    },
  });

  return {
    props: {
      item,
    },
  };
};
