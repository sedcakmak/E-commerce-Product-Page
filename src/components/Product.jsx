import { useEffect, useState, useRef } from "react";
import {
  useMediaQuery,
  Image,
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Modal,
} from "@chakra-ui/react";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";
import { ProductImages } from "./data/ProductImages";
import ProductModal from "./Modal";

const Product = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const [displayImage, setDisplayImage] = useState(
    "/images/image-product-1.jpg"
  );
  const [slide, setSlide] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            onClick={onOpen}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          />

          {isLargerThanMD && isOpen && (
            <Modal
              isOpen={isOpen}
              onClose={onClose}
            >
              <ProductModal />
            </Modal>
          )}

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

export default Product;
