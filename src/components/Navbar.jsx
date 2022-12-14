import React, { Fragment, useContext } from "react";
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
  Grid,
  Text,
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
  useMediaQuery,
} from "@chakra-ui/react";

import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Trash } from "../images/icon-delete.svg";
import { ReactComponent as Hamburger } from "../images/icon-menu.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import Avatar from "../images/image-avatar.png";
import { CartContext } from "../App";

const Navbar = ({ ProductDetails, emptyCart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { quantity, cartItems } = useContext(CartContext);
  const btnRef = React.useRef();
  const initialRef = React.useRef();
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  return (
    <>
      <Flex
        h="10vh"
        alignItems="center"
        px={isLargerThanMD ? "40" : "5"}
        position="sticky"
        top="0"
        zIndex="sticky"
        w="full"
        mt="16px"
        pt={{ lg: "35px" }}
      >
        <Flex
          direction={{ base: "row-reverse", lg: "row" }}
          alignItems={{ base: "flex-end", lg: "start" }}
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
                    bgGradient={"linear(primary.orange, primary.orange)"}
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
          // closeOnBlur={false}
          // placement="auto"
        >
          <PopoverTrigger>
            <Box
              pos="relative"
              p="2"
              pb={{ lg: "10" }}
              me={{ base: "1", lg: "6" }}
              _hover={{ cursor: "pointer" }}
            >
              <Cart
                style={{ fill: "#69707D", width: "22px", height: "20px" }}
              />
              <Badge
                pos="absolute"
                top="0"
                right="0"
                bg="primary.orange"
                color="neutral.white"
                rounded="xl"
                fontSize="0.6em"
                px={2}
                py={0}
              >
                {cartItems > 0 ? cartItems : null}
              </Badge>
            </Box>
          </PopoverTrigger>

          <PopoverContent
            bg="white"
            color="black"
            h={{ base: "225px", lg: "200px" }}
            mt={{ base: "9", lg: "1" }}
            boxShadow="2xl"
            borderTop="none"
            minW={{ base: "90vw", lg: "fit-content" }}
            mr={{ base: "20px" }}
          >
            <PopoverHeader
              fontWeight="semibold"
              px={{ base: 8, lg: 4 }}
              mt={{ base: 4, lg: 0 }}
            >
              Cart
            </PopoverHeader>
            <PopoverBody
              h="100%"
              px={{ base: 8, lg: 4 }}
            >
              {cartItems ? (
                <Fragment>
                  <Flex
                    direction={"row"}
                    justify="space-between"
                    mt={4}
                    _hover={{
                      cursor: "pointer",
                    }}
                  >
                    <Link
                      //  ref={initialRef}
                      href={"/"}
                      _hover={{
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      <Flex>
                        <Image
                          boxSize="50px"
                          objectFit="cover"
                          src={ProductDetails[0].src}
                          alt="sneakers product image"
                          me="15px"
                          borderRadius={"8px"}
                        />
                        <Flex
                          direction={"column"}
                          fontSize="15px"
                        >
                          <Text
                            color="primary.customGray"
                            textOverflow="ellipsis"
                            whiteSpace="nowrap"
                            overflow="hidden"
                            width={{ base: "155px", lg: "100%" }}
                          >
                            {ProductDetails[0].title}
                          </Text>
                          <Text color="primary.customGray">
                            {"$" +
                              ProductDetails[0].discountedPrice.toFixed(2) +
                              " x "}
                            {cartItems}

                            <Text
                              as="span"
                              fontWeight={700}
                              color="black"
                            >
                              {" $" +
                                (
                                  ProductDetails[0].discountedPrice * quantity
                                ).toFixed(2)}
                            </Text>
                          </Text>
                        </Flex>
                      </Flex>
                    </Link>
                    <Box alignSelf="center">
                      <Trash onClick={emptyCart} />
                    </Box>
                  </Flex>
                  <Button
                    bg="primary.orange"
                    color="white"
                    rounded="lg"
                    w="full"
                    mt={8}
                    _hover={{ opacity: "0.7" }}
                  >
                    Checkout
                  </Button>
                </Fragment>
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
            border="2px"
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
