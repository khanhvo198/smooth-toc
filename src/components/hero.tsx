import { Box, Container, Image, Text } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Container maxW="6xl">
      <Box display="flex" justifyContent="center" padding="1rem 0 1rem 0">
        <Image
          src="/avtar.jpeg"
          clipPath="circle()"
          width={["3rem", "5rem", "7rem", "7rem"]}
          height={["3rem", "5rem", "7rem", "7rem"]}
        />
      </Box>
      <Text fontSize="3xl" textAlign="center" marginTop="1rem">
        What are we gonna do today?
      </Text>
      <Text marginTop="1rem">
        Welcome to What Are We Gonna Do Today?, a space where code meets chaos.
        I’m MyStic, a developer who loves building, breaking, and debugging
        ideas into reality. This blog is my personal log—covering everything
        from tech deep dives and coding experiments to the occasional rant about
        software quirks. Whether you're here to learn, debate, or just see what
        I’m up to, you’re in the right place. Expect raw, unfiltered thoughts on
        development, tech trends, and the occasional offbeat insight. Let’s push
        some boundaries—because why not? 🚀
      </Text>
      <Box height="1px" backgroundColor="white" marginTop="0.5rem" />
    </Container>
  );
};
