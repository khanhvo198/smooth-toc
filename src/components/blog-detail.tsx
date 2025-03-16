import { Box, Container, Flex } from "@chakra-ui/react";
import * as motion from "motion/react-client";
import { MainContent } from "./main-content";
import { TableOfContent } from "./table-content";
import { Title } from "./title";
import { useParams } from "react-router";

export const BlogDetail = () => {
  const { slug } = useParams();
  return (
    <Container
      border="1px solid teal"
      marginTop="3em"
      marginBottom="3em"
      width={["100%", "100%", "90%"]}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Title />
        <Flex gap={["0", "0", "1rem", "2rem"]} marginTop="2rem">
          <MainContent slug={slug!} />
          <Box display={["none", "none", "block", "block"]}>
            <Box pos="sticky" top="3rem">
              <TableOfContent />
            </Box>
          </Box>
        </Flex>
      </motion.div>
    </Container>
  );
};
