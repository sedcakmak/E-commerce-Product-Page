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

const Product = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <Box ms="30px">
        <Box
          boxSize="xs"
          position={"relative"}
          border="1px solid red"
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
          <Image
            src={"/images/image-product-1.jpg"}
            alt="Product first image"
            rounded="xl"
            // objectFit="cover"
            // w="100%"
            _hover={{ cursor: "pointer" }}
          />
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
            maxW="384px"
            my="30px"
          >
            <Flex justify={"space-between"}>
              {ProductImages.map((image) => (
                <Image
                  key={image.name}
                  src={image.src_thumbnail}
                  alt={image.name_thumbnail}
                  rounded="xl"
                  w="62px"
                  _hover={{ cursor: "pointer" }}
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
    src: "/images/image-product-1.jpg",
    name_thumbnail: "Product Thumbnail image 1",
    src_thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    name: "Product image 2",
    src: "/images/image-product-2.jpg",
    name_thumbnail: "Product Thumbnail image 2",
    src_thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    name: "Product image 3",
    src: "/images/image-product-3.jpg",
    name_thumbnail: "Product Thumbnail image 3",
    src_thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    name: "Product image 4",
    src: "/images/image-product-4.jpg",
    name_thumbnail: "Product Thumbnail image 4",
    src_thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
];

export default Product;
