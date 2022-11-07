import React, { Fragment, useState } from "react";
import {
    Box,
    Image,
    Text,
    Badge,
    Center,
    Link,
    Flex,
    Button,
    Divider,
    Spacer,
    Stack,
    Grid,
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
    DrawerHeader,
} from "@chakra-ui/react";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Hamburger } from "../images/icon-menu.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import Avatar from "../images/image-avatar.png";
//import { motion } from "framer-motion";

const Navbar = ({ ref }) => {
    const [scroll, setScroll] = useState(false);
    const [cartIsFull, setCartIsFull] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const initialRef = React.useRef();

    //const navBg = useColorModeValue("white", "blackAlpha.200");
    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    return (
        <>
            <Flex
                h="10vh"
                alignItems="center"
                px={isLargerThanMD ? "40" : "5"}
                boxShadow={scroll ? "base" : "none"}
                position="sticky"
                top="0"
                zIndex="sticky"
                w="full"
                // bg={navBg}
                pt={{ lg: "70px" }}
                pb="20px"
            >
                <Flex
                    direction={{ base: "row-reverse", lg: "row" }}
                    alignItems={{ base: "end", lg: "start" }}
                    gap={{ base: 4, lg: 7 }}
                    role="group"
                >
                    <Logo />
                    {isLargerThanMD ? (
                        <Fragment>
                            {NAV_ITEMS.map((navItem) => (
                                <Link
                                    key={navItem.label}
                                    href={navItem.href ?? "#"}
                                    fontSize={"md"}
                                    color="primary.customGray"
                                    display="inline-block"
                                    pos="relative"
                                >
                                    <Box
                                        pb="40px"
                                        display="inline-block"
                                        bgGradient={
                                            "linear(primary.orange, primary.orange)"
                                        }
                                        bgSize="0% 5px"
                                        bgRepeat={"no-repeat"}
                                        transition="background .3s"
                                        bgPosition={"50% 100%"}
                                        _hover={{
                                            bgSize: "100% 5px",
                                        }}
                                    >
                                        {navItem.label}
                                    </Box>
                                </Link>
                            ))}
                        </Fragment>
                    ) : (
                        <>
                            <Hamburger
                                ref={btnRef}
                                onClick={onOpen}
                            />
                            <Drawer
                                isOpen={isOpen}
                                placement="left"
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent maxW="65%">
                                    <DrawerBody>
                                        <Grid
                                            templateRows="(1fr)"
                                            gap={5}
                                            py={2}
                                        >
                                            <CloseIcon onClick={onClose} />
                                            <Spacer />
                                            {NAV_ITEMS.map((navItem) => (
                                                <Link
                                                    key={navItem.label}
                                                    href={navItem.href ?? "#"}
                                                    fontWeight="700"
                                                    _active={{
                                                        bgColor: "transparent",
                                                    }}
                                                    _hover={{
                                                        color: "primary.orange",
                                                    }}
                                                >
                                                    {navItem.label}
                                                </Link>
                                            ))}
                                        </Grid>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </>
                    )}
                </Flex>
                <Spacer />

                <Popover
                    trigger="click"
                    initialFocusRef={initialRef}
                    // placement="auto"
                >
                    <PopoverTrigger>
                        <Box
                            pos="relative"
                            p="2"
                            pb={{ lg: "10" }}
                            me={{ base: "1", lg: "10" }}
                            _hover={{ cursor: "pointer" }}
                        >
                            <Cart style={{ fill: "#69707D" }} />
                            <Badge
                                pos="absolute"
                                top="0"
                                right="0"
                                bg="primary.orange"
                                color="neutral.white"
                                rounded="xl" //borderRadius={10}
                                fontSize="0.6em"
                                px={2}
                                py={0}
                            >
                                3
                            </Badge>
                        </Box>
                    </PopoverTrigger>

                    <PopoverContent
                        bg="white"
                        color="black"
                        h={{ base: "300px", lg: "200px" }}
                        mt={{ base: "9", lg: "1" }}
                        boxShadow="2xl"
                        borderTop="none"
                        // w={{ base: "90vw" }}
                        minW={{ base: "90vw", lg: "fit-content" }}
                        mr={{ base: "20px" }}
                    >
                        <PopoverHeader fontWeight="semibold">
                            Cart
                        </PopoverHeader>
                        <PopoverBody h="100%">
                            {cartIsFull ? (
                                <Stack>
                                    <Link ref={initialRef}>
                                        Autumn Limited Edition
                                    </Link>
                                    <Spacer />
                                    <Button
                                        bg="orange"
                                        color="white"
                                        rounded="lg"
                                    >
                                        Checkout
                                    </Button>
                                </Stack>
                            ) : (
                                <Center
                                    ref={initialRef}
                                    h="100%"
                                    color="neutral.darkGrayishBlue"
                                    fontWeight={700}
                                >
                                    Your cart is empty.
                                </Center>
                            )}
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

                <Box pb={{ lg: "10" }}>
                    <Image
                        h={isLargerThanMD ? "50px" : "32px"}
                        src={Avatar}
                        alt="avatar"
                        border="4px"
                        borderRadius={50}
                        scale={2.1}
                        borderColor={"transparent"}
                        _hover={{
                            borderColor: "primary.orange",
                            cursor: "pointer",
                        }}
                        transition="all .1s ease-out"
                    />
                </Box>
            </Flex>

            {isLargerThanMD && (
                <Divider
                    h="3"
                    w="calc(100% - 320px)"
                    m="auto"
                    borderColor="neutral.grayishBlue"
                />
            )}
        </>
    );
};

const NAV_ITEMS = [
    {
        label: "Collections",
        href: "#",
    },
    {
        label: "Men",
        href: "#",
    },
    {
        label: "Women",
        href: "#",
    },
    {
        label: "About",
        href: "#",
    },
    {
        label: "Contact",
        href: "#",
    },
];

export default Navbar;
