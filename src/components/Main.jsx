//import React from "react";
import {
  useMediaQuery,
  Image,
  Box,
  Button,
  Text,
  Heading,
  Flex,
  Spacer,
  Container,
  HStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import Product from "./Product";
//import Product1 from "/images/image-product-1.jpg";
const Main = () => {
  console.count();
  // const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  //return isLargerThanMD ? <DesktopMain /> : <MobileMain />;

  // return (
  //   <>
  //     <MobileMain />
  //     {isLargerThanMD && <DesktopMain />}
  //   </>
  // );

  //   if (isLargerThanMD) {
  //     return <DesktopMain />;
  //   } else {
  //     return <MobileMain />;
  //   }

  return (
    <Fragment>
      <Product />

      {/* <Heading
        size="xs"
        textTransform={"uppercase"}
        letterSpacing=".2rem"
        fontWeight={"700"}
        color="primary.orange"
      >
        Sneaker Company
      </Heading>
      <Heading size="xl">Fall Limited Edition Sneakers</Heading>
      <Text
        as="p"
        color="primary.customGray"
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Text>
      <Heading size="md">
        $125.00{" "}
        <Text
          as="span"
          color="primary.orange"
          fontSize="15px"
        >
          50%
        </Text>
      </Heading>
      <Text
        as="p"
        fontSize="14px"
        color="primary.customGray"
      >
        $250.00
      </Text>
      <HStack>
        <Minus />
        <Text>0</Text>
        <Plus />
      </HStack>
      <Button
        bgColor="primary.orange"
        color="neutral.white"
        transition="opacity .2s ease-in"
        _hover={{ opacity: ".7" }}
      >
        <Cart style={{ fill: "white", marginRight: "1rem" }} />
        Add to cart
      </Button> */}
    </Fragment>
  );
};

const MobileMain = () => {
  return <h1>Mobile Test</h1>;
};
const DesktopMain = () => {
  return <h1>Desktop Test</h1>;
};

export default Main;
