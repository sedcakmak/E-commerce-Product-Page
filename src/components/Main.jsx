import { Flex } from "@chakra-ui/react";
import Product from "./Product";
import Description from "./Description";

const Main = () => {
  return (
    <Flex flexDirection={{ base: "column", lg: "row" }}>
      <Product />
      <Description />
    </Flex>
  );
};

export default Main;
