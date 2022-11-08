import {
  useMediaQuery,
  Image,
  Box,
  Flex,
  IconButton,
  calc,
} from "@chakra-ui/react";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";

import { useEffect, useState, useRef } from "react";
//import { motion } from "framer-motion";

const Product = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const [displayImage, setDisplayImage] = useState(
    "/images/image-product-1.jpg"
  );
  const [slide, setSlide] = useState(0);
  const imageRef = useRef();

  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  useEffect(() => {
    setDisplayImage(ProductImages[slide].src_display);
  }, [slide]);

  useEffect(() => {
    imageRef.current.animate(
      {
        opacity: [0, 1],
        // transform: ["scale(0,0)", "scale(1,1)"],
        //  transform: ["translateX(300px)", "translateX(0px)"],
      },
      700
    );
  }, [displayImage]);

  function changeDisplayImage(e) {
    let displaySource = e.currentTarget.getAttribute("src_display");
    setDisplayImage(displaySource);
  }
  function displayNextImage() {
    slide < ProductImages.length - 1
      ? setSlide((prev) => prev + 1)
      : setSlide(0);
  }
  function displayPrevImage() {
    slide > 0
      ? setSlide((prev) => prev - 1)
      : setSlide(ProductImages.length - 1);
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      displayNextImage();
    }

    if (diff < -5) {
      displayPrevImage();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <Box
        w="100%"
        maxW={{ lg: "375px" }}
        position="relative"
      >
        <Box
          w={{ base: "100%" }}
          h={{ base: "37vh", lg: "375px" }}
          position={"relative"}
          overflow="hidden"
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
              onClick={() => displayPrevImage()}
            />
          )}
          <Image
            src={displayImage}
            alt="Product image"
            ref={imageRef}
            rounded={{ base: "none", lg: "xl" }}
            _hover={{
              cursor: "pointer",
              w: { base: null, md: "calc(100% + 20px)" },
              h: { base: null, md: "calc(100% + 20px)" },
            }}
            objectFit={{ base: "fill", lg: "cover" }}
            h="100%"
            w="100%"
            transition=".2s ease-out"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          />

          {!isLargerThanMD && (
            <IconButton
              variant="ghost"
              colorScheme="orange"
              aria-label="Next"
              fontSize="20px"
              position="absolute"
              top="50%"
              right="0"
              icon={<Next />}
              bgColor={"white"}
              borderRadius="3xl"
              me="5"
              onClick={() => displayNextImage()}
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
                    image.src_display === displayImage
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
                    opacity={image.src_display === displayImage ? "0.5" : "1"}
                    _hover={{
                      cursor: "pointer",
                      opacity: "0.6",
                    }}
                    onClick={(e) => changeDisplayImage(e)}
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
