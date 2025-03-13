import { Box, Container, Link, Text } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box
      backgroundColor="#20202380"
      padding="0.5rem"
      position="sticky"
      top="0"
      zIndex="9999"
      backdropFilter="saturate(180%) blur(8px)"
    >
      <Container maxW="5xl">
        <Link
          href="/"
          textDecoration="none"
          color="white"
          _hover={{ color: "white" }}
          cursor="pointer"
        >
          <Text fontWeight="bold">What Are We Gonna Do Today?</Text>
        </Link>
      </Container>
    </Box>
  );
};
