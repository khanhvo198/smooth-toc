import { Box, Flex, Text } from "@chakra-ui/react";
import { useTocStore } from "../stores/toc";
import { OutlineHightlight } from "./outline-hightlight";
import { OutlineItem } from "./outline-item";

export const TableOfContent = () => {
  const sections = useTocStore((toc) => toc.sections);
  return (
    <Box>
      <Text fontWeight="semibold">On this page</Text>
      <Flex position="relative">
        <Box
          backgroundColor="gray.700"
          width="1px"
          marginLeft="0.75rem"
          marginTop="0.25rem"
          flexGrow={1}
          flexShrink={0}
        />
        <OutlineHightlight sections={sections} />
        <Box>
          {sections.map((section) => (
            <OutlineItem key={section.id} section={section} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};
