import { Flex, Tag } from "@chakra-ui/react";
import { FC } from "react";

interface TagListProps {
  tagList: string[];
}

export const TagList: FC<TagListProps> = ({ tagList }) => {
  return (
    <Flex gap="2">
      {tagList.map((tag) => (
        <Tag.Root
          colorPalette="cyan"
          cursor="pointer"
          _hover={{ colorPalette: "pink" }}
        >
          <Tag.Label>{tag}</Tag.Label>
        </Tag.Root>
      ))}
    </Flex>
  );
};
