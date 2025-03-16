import { Box } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useVisibleSections } from "../hooks/use-visible-outline";
import { useContentStore } from "../stores/content";
import "./main-content.css";

interface MainContentProps {
  slug: string;
}

export const MainContent: FC<MainContentProps> = ({ slug }) => {
  const { dom, render } = useContentStore();
  const [post, setPost] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BLOG_OBSIDIAN_ENDPOINT}/posts/${slug}`,
      ).then((res) => res.json());

      setPost(response.content);
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    render(post);
  }, [render, post]);

  useVisibleSections();

  return (
    <Box w={["100%", "100%", "70%", "70%"]}>
      <Box marginTop="1.5rem" marginBottom="1.5rem" textAlign="justify">
        {dom ? dom : "rendering..."}
      </Box>
    </Box>
  );
};
