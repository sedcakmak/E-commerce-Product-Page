import React, { Fragment, useState, useContext } from "react";
import {
  Box,
  Image,
  Badge,
  Center,
  Link,
  Flex,
  Button,
  Divider,
  Spacer,
  Stack,
  Grid,
  GridItem,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  // useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

<Grid
  h="100%"
  templateRows="repeat(3, 30px)"
  templateColumns="repeat(10, 1fr)"
  gap={1}
>
  <GridItem
    rowSpan={2}
    colSpan={2}
    bgImage={ProductDetails[0].src}
    bgSize="contain"
    bgRepeat={"no-repeat"}
    // border="1px solid red"
  />
  <GridItem
    colSpan={6}
    whiteSpace="nowrap"
    rowSpan={1}
    textOverflow={{ base: "ellipsis" }}
    overflow={{ base: "hidden", lg: "visible" }}
    //  border="1px solid yellow"
  >
    {ProductDetails[0].title}
  </GridItem>

  <GridItem
    colSpan={6}
    //    border="1px solid green"
  >
    {"$" + ProductDetails[0].discountedPrice.toFixed(2) + " x "}
    {quantity} {"$" + (ProductDetails[0].discountedPrice * quantity).toFixed(2)}
  </GridItem>
  <GridItem
    rowSpan={1}
    colStart={10}
    //colEnd={10}
    mb={8}
    //  ms={8}
  >
    <Trash />
  </GridItem>

  <GridItem
    colSpan={10}
    rowSpan={2}
    bg="primary.orange"
    color="white"
    rounded="lg"
    as="button"
    my={4}
  >
    Checkout
  </GridItem>
</Grid>;
