import { Heading } from "@chakra-ui/react";
import { useContentStore } from "../stores/content";

export const Title = () => {
  const { title } = useContentStore();

  return <Heading as="h1">{title}</Heading>;
};
