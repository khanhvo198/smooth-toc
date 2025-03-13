import { Box } from "@chakra-ui/react";
import { BlogList } from "../components/blog-list";
import { Hero } from "../components/hero";

export const Home = () => {
  return (
    <Box>
      <Hero />
      <BlogList />
    </Box>
  );
};
