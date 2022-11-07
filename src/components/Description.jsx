import {
    useMediaQuery,
    Image,
    Box,
    Button,
    Text,
    Heading,
    Flex,
    Badge,
    Spacer,
    Container,
    Stack,
    VStack,
    HStack,
} from "@chakra-ui/react";

import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";

const Description = () => {
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
                mb={6}
            >
                Fall Limited Edition Sneakers
            </Heading>
            <Text
                as="p"
                color="primary.customGray"
                mb={6}
                fontSize={{ base: "16px", lg: "14px" }}
            >
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </Text>
            <Stack
                direction={{ base: "row", lg: "column" }}
                align={{ base: "center", lg: "baseline" }}
                justify="space-between"
            >
                <Heading size="lg">
                    {/* <Flex direction={{ base: "row", lg: "column" }}>
                <Heading size="lg"> */}
                    $125.00{" "}
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
                        50%
                    </Badge>
                </Heading>
                <Text
                    as="p"
                    fontSize="14px"
                    color="primary.customLightGray"
                    textDecoration="line-through"
                    fontWeight={700}
                >
                    $250.00
                </Text>
            </Stack>
            <Flex
                direction={{ base: "column", lg: "row" }}
                justify="space-between"
            >
                <HStack
                    bgColor="neutral.lightGrayishBlue"
                    p={2}
                    spacing="40px"
                    borderRadius={"8px"}
                    justify="center"
                >
                    <Minus />
                    <Text fontWeight={700}>0</Text>
                    <Plus />
                </HStack>
                <Button
                    bgColor="primary.orange"
                    color="neutral.white"
                    transition="opacity .2s ease-in"
                    _hover={{ opacity: ".7" }}
                    w="100%"
                >
                    <Cart style={{ fill: "white", marginRight: "1rem" }} />
                    Add to cart
                </Button>
            </Flex>
        </Box>
    );
};

export default Description;
