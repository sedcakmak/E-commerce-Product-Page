import React, { Fragment, useState } from "react";
import {
  Box,
  Image,
  Badge,
  Link,
  Flex,
  Divider,
  Spacer,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Hamburger } from "../images/icon-menu.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import Avatar from "../images/image-avatar.png";
//import { motion } from "framer-motion";

const Navbar = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const navBg = useColorModeValue("white", "blackAlpha.200");
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
        bg={navBg}
        pt="70px"
        pb="20px"
      >
        <Flex
          direction={{ base: "row-reverse", md: "row" }}
          alignItems={{ base: "end", md: "start" }}
          gap={{ base: 4, md: 7 }}
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
                  display="inline-block"
                  pos="relative"
                >
                  <Box
                    pb="40px"
                    display="inline-block"
                    bgGradient={"linear(orange, orange)"}
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
            <Hamburger />
          )}
        </Flex>
        <Spacer />

        <Box
          pos="relative"
          p="2"
          pb={{ md: "7" }}
          me={{ base: "1", md: "10" }}
          _hover={{ cursor: "pointer" }}
        >
          <Cart />
          <Badge
            pos="absolute"
            top="0"
            right="0"
            colorScheme="orange"
            rounded="xl" //borderRadius={10}
            fontSize="0.5em"
            px={2}
            py={0}
          >
            3
          </Badge>
        </Box>
        <Box pb={{ md: "7" }}>
          <Image
            h={isLargerThanMD ? "50px" : "30px"}
            src={Avatar}
            alt="avatar"
            border="4px"
            borderRadius={50}
            scale={2.1}
            borderColor={"transparent"}
            _hover={{ borderColor: "orange", cursor: "pointer" }}
            transition="all .1s ease-out"
          />
        </Box>
      </Flex>

      {isLargerThanMD && (
        <Divider
          h="3"
          w="calc(100% - 320px)"
          m="auto"
          borderBottom="1px solid lightgray"
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
