import {
  Box,
  Button,
  Text,
  Heading,
  Flex,
  Badge,
  Stack,
  HStack,
} from "@chakra-ui/react";

import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { useContext } from "react";
import { CartContext } from "../App";

const Description = ({ ProductDetails, addtoCart }) => {
  const { quantity, setQuantity } = useContext(CartContext);

  function decreaseQuantity() {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  }
  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }
  return (
    <Box
      w={{ base: "100%", lg: "25%" }}
      px={{ base: 10, lg: 0 }}
      mt={{ base: 6, lg: 0 }}
    >
      <Heading
        fontSize={"12px"}
        textTransform={"uppercase"}
        letterSpacing=".1rem"
        fontWeight={"700"}
        color="primary.orange"
        mb={4}
      >
        Sneaker Company
      </Heading>
      <Heading
        size="xl"
        mb={{ base: 3, lg: 6 }}
        lineHeight={{ base: 1, lg: 1.33 }}
      >
        {ProductDetails[0].title}
      </Heading>
      <Text
        as="p"
        color="primary.customGray"
        mb={{ base: 4, lg: 6 }}
        fontSize={{ base: "16px", lg: "14px" }}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Text>
      <Stack
        direction={{ base: "row", lg: "column" }}
        align={{ base: "center", lg: "baseline" }}
        justify="space-between"
        mb={6}
      >
        <Heading size="lg">
          {"$" + ProductDetails[0].discountedPrice.toFixed(2)}

          <Badge
            ml="1"
            mb="1"
            colorScheme="orange"
            color="primary.orange"
            p={1}
            rounded={4}
            fontSize="0.5em"
            fontWeight={700}
          >
            {ProductDetails[0].discount + "%"}
          </Badge>
        </Heading>
        <Text
          as="p"
          fontSize="14px"
          color="primary.customLightGray"
          textDecoration="line-through"
          fontWeight={700}
        >
          {"$" + ProductDetails[0].price.toFixed(2)}
        </Text>
      </Stack>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
      >
        <HStack
          bgColor="neutral.lightGrayishBlue"
          py={2}
          spacing="40px"
          borderRadius={"8px"}
          justifyContent={{ base: "space-between", lg: "center" }}
          userSelect={"none"}
          mb={2}
          me={{ lg: 4 }}
          px={{ base: 4, lg: 2 }}
        >
          <Box
            onClick={() => decreaseQuantity()}
            _hover={{ cursor: "pointer", opacity: "0.5" }}
          >
            <Minus />
          </Box>
          <Text
            fontWeight={700}
            w="18px"
          >
            {quantity}
          </Text>
          <Box
            onClick={() => increaseQuantity()}
            _hover={{ cursor: "pointer", opacity: "0.5" }}
          >
            <Plus />
          </Box>
        </HStack>
        <Button
          bgColor="primary.orange"
          color="neutral.white"
          transition="opacity .2s ease-in"
          fontSize="12px"
          _hover={{ opacity: ".7" }}
          w="100%"
          onClick={addtoCart}
        >
          <Cart
            style={{
              fill: "white",
              width: "14px",
              height: "12px",
              marginRight: ".5rem",
            }}
          />
          Add to cart
        </Button>
      </Flex>
    </Box>
  );
};

export default Description;
