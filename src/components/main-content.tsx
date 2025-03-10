import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import markdownContent from "../example.md?raw";
import { useVisibleSections } from "../hooks/use-visible-outline";
import { useContentStore } from "../stores/content";
import "./main-content.css";

export const MainContent = () => {
  const { dom, render } = useContentStore();

  useEffect(() => {
    render(markdownContent);
  }, [render]);

  useVisibleSections();

  return (
    <Box w={["100%", "100%", "70%", "70%"]}>
      <Box marginTop="1.5rem" marginBottom="1.5rem" textAlign="justify">
        {dom ? dom : "rendering..."}
      </Box>
    </Box>
  );
};
