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

import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";

const Description = () => {
  return (
    <Box>
      <Heading
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
      </Button>
    </Box>
  );
};

export default Description;
