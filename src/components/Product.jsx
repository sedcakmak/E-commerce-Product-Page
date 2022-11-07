import { useMediaQuery, Image, Box, Flex, IconButton } from "@chakra-ui/react";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";

import { useState } from "react";
//import { motion } from "framer-motion";

const Product = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const [displayPicture, setDisplayPicture] = useState(
    "/images/image-product-1.jpg"
  );

  function changeDisplayPicture(e) {
    let displaySource = e.currentTarget.getAttribute("src_display");
    setDisplayPicture(displaySource);
  }
  return (
    <>
      <Box
        w="100%"
        maxW={{ lg: "375px" }}
        position="relative"
        //   mt={{ base: "0", lg: "16" }}
        // ms={{ base: "0", lg: "52" }}
      >
        <Box
          // boxSize="xs"
          w={{ base: "100%" }}
          h={{ base: "37vh", lg: "375px" }}
          position={"relative"}
          // width="100%"
        >
          {!isLargerThanMD && (
            <IconButton
              variant="ghost"
              colorScheme="orange"
              aria-label="Previous"
              fontSize="20px"
              position="absolute"
              top="50%"
              left="0"
              icon={<Previous />}
              bgColor={"white"}
              borderRadius="3xl"
              ms="5"
            />
          )}
          {/* <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 5,
              ease: "easeOut",
            }}
          > */}
          <Image
            src={displayPicture}
            alt="Product first image"
            rounded={{ base: "none", lg: "xl" }}
            _hover={{ cursor: "pointer" }}
            objectFit="cover"
            h="100%"
            w="100%"
          />
          {/* </motion.div> */}

          {!isLargerThanMD && (
            <IconButton
              variant="ghost"
              colorScheme="teal"
              aria-label="Next"
              fontSize="20px"
              position="absolute"
              top="50%"
              right="0"
              icon={<Next />}
              bgColor={"white"}
              borderRadius="3xl"
              me="5"
            />
          )}
        </Box>
        {isLargerThanMD && (
          <Box
            maxW="375px"
            my="30px"
          >
            <Flex justify={"space-between"}>
              {ProductImages.map((image) => (
                <Box
                  border={
                    image.src_display === displayPicture
                      ? "3px solid #F9812A"
                      : "3px solid transparent"
                  }
                  borderRadius="8px"
                  key={image.name}
                >
                  <Image
                    src={image.src_thumbnail}
                    src_display={image.src_display}
                    alt={image.name_thumbnail}
                    boxSize="80px"
                    userSelect="none"
                    borderRadius="8px"
                    opacity={image.src_display === displayPicture ? "0.5" : "1"}
                    _hover={{
                      cursor: "pointer",
                      opacity: "0.6",
                    }}
                    onClick={(e) => changeDisplayPicture(e)}
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        )}
      </Box>
    </>
  );
};

const ProductImages = [
  {
    name: "Product image 1",
    src_display: "/images/image-product-1.jpg",
    name_thumbnail: "Product Thumbnail image 1",
    src_thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    name: "Product image 2",
    src_display: "/images/image-product-2.jpg",
    name_thumbnail: "Product Thumbnail image 2",
    src_thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    name: "Product image 3",
    src_display: "/images/image-product-3.jpg",
    name_thumbnail: "Product Thumbnail image 3",
    src_thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    name: "Product image 4",
    src_display: "/images/image-product-4.jpg",
    name_thumbnail: "Product Thumbnail image 4",
    src_thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
];

export default Product;
