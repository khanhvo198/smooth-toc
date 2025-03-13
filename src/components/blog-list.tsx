import { Container } from "@chakra-ui/react";
import { BlogListItem } from "./blog-list-item";
import * as motion from "motion/react-client";

export interface BlogItem {
  slug: string;
  title: string;
  createdAt: Date;
  description: string;
  tags?: string[];
}

const blogs: BlogItem[] = [
  {
    slug: "this-is-title",
    title: "This is title",
    createdAt: new Date("2024-01-01"),
    description: "This is the description",
    tags: ["Web", "Optimize"],
  },
  {
    slug: "this-is-title",

    title: "This is title",
    createdAt: new Date("2024-01-01"),
    description: "This is the description",
    tags: ["Web", "Optimize"],
  },
  {
    slug: "this-is-title",

    title: "This is title",
    createdAt: new Date("2024-01-01"),
    description: "This is the description",
    tags: ["Web", "Optimize"],
  },
  {
    slug: "this-is-title",

    title: "This is title",
    createdAt: new Date("2024-01-01"),
    description: "This is the description",
  },
  {
    slug: "this-is-title",

    title: "This is title",
    createdAt: new Date("2024-01-01"),
    description: "This is the description",
  },
  {
    slug: "this-is-title",

    title: "This is title",
    createdAt: new Date("2024-01-01"),
    description: "This is the description",
  },
  {
    slug: "this-is-title",

    title: "This is title",
    createdAt: new Date("2024-01-01"),
    description: "This is the description",
  },
  {
    slug: "this-is-title",

    title: "This is title",
    createdAt: new Date("2024-01-01"),
    description: "This is the description",
  },
];

export const BlogList = () => {
  return (
    <Container maxW="6xl" marginTop="2rem">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {blogs.map((blog, index) => (
          <BlogListItem key={index} item={blog} />
        ))}
      </motion.div>
    </Container>
  );
};
