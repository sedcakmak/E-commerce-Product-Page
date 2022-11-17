import { Link, Center } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Center
      fontSize={"sm"}
      mt={4}
    >
      Challenge by &nbsp;
      <Link
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        color="blue"
      >
        Frontend Mentor
      </Link>
      . Coded by &nbsp;
      <Link
        href="https://www.frontendmentor.io/profile/sedcakmak"
        color="primary.orange"
      >
        Sedef Cakmak
      </Link>
      .
    </Center>
  );
};
