import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";

export const Home = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
    </Box>
  );
};
