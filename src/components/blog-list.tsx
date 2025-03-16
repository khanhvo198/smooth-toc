import { Container } from "@chakra-ui/react";
import { BlogListItem } from "./blog-list-item";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export interface BlogItem {
  slug: string;
  title: string;
  date: Date;
  description: string;
  tags?: string[];
}

export const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BLOG_OBSIDIAN_ENDPOINT}/posts`,
    ).then((res) => res.json());

    console.log(response.posts);
    setBlogs(response.posts);
  };

  return (
    <Container maxW="6xl" marginTop="2rem">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {blogs &&
          blogs.map((blog, index) => <BlogListItem key={index} item={blog} />)}
      </motion.div>
    </Container>
  );
};
