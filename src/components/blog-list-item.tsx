import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { BlogItem } from "./blog-list";
import { TagList } from "./tag-list";

interface BlogListItemProps {
  item: BlogItem;
}

export const BlogListItem: FC<BlogListItemProps> = ({ item }) => {
  return (
    <Box marginTop="1rem">
      <Box height="1px" background="white" marginBottom="1rem" />

      <Flex justifyContent="space-between">
        <Text>{item.createdAt.toLocaleDateString()}</Text>
        {item.tags && <TagList tagList={item.tags} />}
      </Flex>
      <Link
        fontSize="1.5rem"
        fontWeight="bold"
        cursor="pointer"
        _hover={{ color: "whiteAlpha.700" }}
        textDecoration="none"
        color="white"
        href={item.slug}
      >
        {item.title}
      </Link>
      <Text>{item.description}</Text>
    </Box>
  );
};
