import { Box, Container, Flex } from "@chakra-ui/react";
import { MainContent } from "./components/main-content";
import { TableOfContent } from "./components/table-content";
import { Title } from "./components/title";

function App() {
  return (
    <Container
      border="1px solid teal"
      marginTop="3em"
      marginBottom="3em"
      width={["100%", "100%", "90%"]}
    >
      <Title />
      <Flex gap={["0", "0", "1rem", "2rem"]}>
        <MainContent />
        <Box display={["none", "none", "block", "block"]}>
          <Box pos="sticky" top="1.5rem">
            <TableOfContent />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
