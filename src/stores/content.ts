import type { Root as HastRoot } from "hast";
import type { Root as MdastRoot } from "mdast";
import { create } from "zustand";
import { MarkdownRenderer } from "../markdown-renderer";
import { EXIT, visit } from "unist-util-visit";
import * as YAML from "yaml";
import { useTocStore } from "./toc";

type ContentType = React.ReactElement<
  unknown,
  string | React.JSXElementConstructor<any>
>;

interface ContentState {
  title: string;
  dom: ContentType | null;
  mdast: MdastRoot | null;
  hast: HastRoot | null;
  render: (markdown: string) => Promise<void>;
}

export const useContentStore = create<ContentState>((set) => ({
  title: "",
  mdast: null,
  hast: null,
  dom: null,
  render: async (markdown: string) => {
    try {
      const renderer = new MarkdownRenderer();
      const { result: dom, mdast, hast } = await renderer.render(markdown);

      visit(mdast, "yaml", (node) => {
        const { title } = YAML.parse(node.value);
        if (title) {
          set({ title });
        }
        return EXIT;
      });

      set({ mdast, hast, dom });
      useTocStore.getState().update(mdast);
    } catch (error: any) {
      console.log(error.stack);
    }
  },
}));
