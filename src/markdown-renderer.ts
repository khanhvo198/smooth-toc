import * as jsxRuntime from "react/jsx-runtime";
import rehypePrism from "rehype-prism-plus";
import rehypeReact, { Components as JSXComponents } from "rehype-react";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { createRehypeHeading } from "./components/heading";

const rehypeHeadingComponents: Partial<JSXComponents> = {
  h1: createRehypeHeading(1),
  h2: createRehypeHeading(2),
  h3: createRehypeHeading(3),
  h4: createRehypeHeading(4),
  h5: createRehypeHeading(5),
  h6: createRehypeHeading(6),
};

export class MarkdownRenderer {
  private processor: Awaited<ReturnType<typeof this.createProcessor>> | null =
    null;

  createProcessor() {
    const remarkParser = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkFrontmatter);
    const rehypedRemark = remarkParser()
      .use(remarkRehype, {
        allowDangerousHtml: true,
      })
      .use(rehypeSlug)
      .use(rehypePrism);
    const renderer = rehypedRemark.use(rehypeReact, {
      Fragment: jsxRuntime.Fragment,
      jsx: jsxRuntime.jsx,
      jsxs: jsxRuntime.jsxs,
      components: rehypeHeadingComponents,
    });

    this.processor = renderer;
    return renderer;
  }

  async getProcesser() {
    if (this.processor) {
      return this.processor;
    }
    return this.createProcessor();
  }

  async render(markdown: string) {
    const processer = await this.getProcesser();
    const mdast = processer.parse(markdown);
    const hast = await processer.run(mdast);
    const result = processer.stringify(hast);

    return {
      mdast,
      hast,
      result,
    };
  }
}
