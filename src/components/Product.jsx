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
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";

import { useState } from "react";
import { motion } from "framer-motion";

const Product = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const [displayPicture, setDisplayPicture] = useState(
    "/images/image-product-1.jpg"
  );
  //const [isActive, setIsActive] = useState(null);

  function changeDisplayPicture(e) {
    let displaySource = e.currentTarget.getAttribute("src_display");
    setDisplayPicture(displaySource);
    // setIsActive(true);
  }
  return (
    <>
      <Box ms="30px">
        <Box
          boxSize="xs"
          position={"relative"}
          // width="100%"
          // maxWidth={"375px"}
        >
          {!isLargerThanMD && (
            <IconButton
              variant="ghost"
              colorScheme="orange"
              aria-label="Previous"
              fontSize="20px"
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
              icon={<Previous />}
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
            rounded="xl"
            _hover={{ cursor: "pointer" }}
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
              left="100%"
              transform="translateY(-50%)"
              icon={<Next />}
            />
          )}
        </Box>
        {isLargerThanMD && (
          <Box
            maxW="320px"
            my="30px"
          >
            <Flex justify={"space-between"}>
              {ProductImages.map((image) => (
                <Image
                  key={image.name}
                  src={image.src_thumbnail}
                  src_display={image.src_display}
                  alt={image.name_thumbnail}
                  // className={
                  //   image.src_display === displayPicture ? "active" : ""
                  // }
                  display="block"
                  verticalAlign="bottom"
                  border={
                    image.src_display === displayPicture
                      ? "2px solid orange"
                      : "2px solid transparent"
                  }
                  rounded="xl"
                  w="62px"
                  _hover={{ cursor: "pointer", opacity: "0.5" }}
                  onClick={(e) => changeDisplayPicture(e)}
                />
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
