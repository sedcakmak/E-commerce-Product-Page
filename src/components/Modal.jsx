import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Image,
  Flex,
  Box,
  IconButton,
  Icon,
} from "@chakra-ui/react";

import { useState, useRef, useEffect } from "react";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";
import { ProductImages } from "./data/ProductImages";

const ProductModal = () => {
  const [displayImage, setDisplayImage] = useState(
    "/images/image-product-1.jpg"
  );

  const imageRef = useRef();
  const [slide, setSlide] = useState(0);

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

  useEffect(() => {
    setDisplayImage(ProductImages[slide].src_display);
  }, [slide]);

  return (
    <>
      <ModalOverlay bg="neutral.black" />
      <ModalContent
        bg="transparent"
        border="none"
        boxShadow={"none"}
      >
        <ModalHeader></ModalHeader>
        <ModalCloseButton
          color="neutral.white"
          _hover={{ color: "primary.orange" }}
        />
        <ModalBody>
          <IconButton
            variant="ghost"
            colorScheme="orange"
            aria-label="Previous"
            fontSize="20px"
            position="absolute"
            top="40%"
            left="-16px"
            icon={<Previous />}
            bgColor={"white"}
            borderRadius="3xl"
            ms="5"
            _hover={{ color: "orange" }}
            onClick={() => displayPrevImage()}
          />
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
          />
          <IconButton
            variant="ghost"
            //   colorScheme="orange"
            aria-label="Next"
            fontSize="20px"
            position="absolute"
            top="40%"
            right="-16px"
            icon={<Next style={{ path: "orange" }} />}
            bgColor={"white"}
            borderRadius="3xl"
            me="5"
            //   _hover={{ fill: "orange" }}
            onClick={() => displayNextImage()}
          />
          <Box
            maxW="375px"
            my="30px"
          >
            <Flex
              justify={"space-between"}
              ms={5}
            >
              {ProductImages.map((image) => (
                <Box
                  bgColor="white"
                  border={
                    image.src_display === displayImage
                      ? "2px solid #F9812A"
                      : "none"
                  }
                  w="80px"
                  h="80px"
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
                    opacity={image.src_display === displayImage ? "0.3" : "1"}
                    _hover={{
                      cursor: "pointer",
                      opacity: "0.5",
                    }}
                    onClick={(e) => changeDisplayImage(e)}
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default ProductModal;
