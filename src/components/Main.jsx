import { Flex, Grid, HStack, Spacer } from "@chakra-ui/react";
import Product from "./Product";
import Description from "./Description";

const Main = () => {
    return (
        <Flex
            flexDirection={{ base: "column", lg: "row" }}
            mt={{ base: 0, lg: 12 }}
            alignItems="center"
            //  justifyContent={"center"}
            justify="space-evenly"
        >
            <Product />
            <Description />
        </Flex>
    );
};

export default Main;
