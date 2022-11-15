import { Flex } from "@chakra-ui/react";
import Product from "./Product";
import Description from "./Description";

const Main = ({ ProductDetails, addtoCart }) => {
  return (
    <Flex
      flexDirection={{ base: "column", lg: "row" }}
      mt={{ base: 0, lg: 12 }}
      alignItems="center"
      justify="space-evenly"
    >
      <Product />
      <Description
        ProductDetails={ProductDetails}
        addtoCart={addtoCart}
      />
    </Flex>
  );
};

export default Main;
