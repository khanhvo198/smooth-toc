import Slugger from "github-slugger";
import type { Root as MdastRoot } from "mdast";
import { toString } from "mdast-util-to-string";
import { RefObject } from "react";
import { visit } from "unist-util-visit";
import { create } from "zustand";

interface TocState {
  sections: Section[];
  update: (mdast: MdastRoot) => void;
  registHeadingRef: (
    id: string,
    ref: RefObject<HTMLHeadingElement | null>,
  ) => void;
  registOutlineItemRef: (
    id: string,
    ref: RefObject<HTMLAnchorElement | null>,
  ) => void;
  setVisibleHeadings: (ids: string[]) => void;
}

type TocHeading = {
  id: string;
  title: string;
  level: number;
};

export type Section = TocHeading & {
  outlineRef: RefObject<HTMLAnchorElement | null> | null;
  headingRef: RefObject<HTMLHeadingElement | null> | null;
  isVisible: boolean;
};

const extractHeadings = (mdast: MdastRoot, maxDepth = 3) => {
  const headings: TocHeading[] = [];
  visit(mdast, "heading", (node) => {
    const title = toString(node, { includeImageAlt: false });
    const slugger = new Slugger();
    const id = slugger.slug(title);

    if (node.depth <= maxDepth) {
      headings.push({
        title,
        level: node.depth,
        id,
      });
    }
  });

  return headings;
};

export const useTocStore = create<TocState>((set) => ({
  sections: [],
  update: (mdast: MdastRoot) => {
    const headings = extractHeadings(mdast);
    const sections = headings.map((h) => ({
      ...h,
      outlineRef: null,
      headingRef: null,
      isVisible: false,
    }));
    set({ sections });
  },
  registHeadingRef: (id: string, ref: RefObject<HTMLHeadingElement | null>) =>
    set((state) => {
      const section = state.sections.find((s) => s.id === id);
      if (section) {
        section.headingRef = ref;
      }
      return { sections: state.sections };
    }),
  registOutlineItemRef: (
    id: string,
    ref: RefObject<HTMLAnchorElement | null>,
  ) =>
    set((state) => {
      const section = state.sections.find((s) => s.id === id);
      if (section) {
        section.outlineRef = ref;
      }
      return { sections: state.sections };
    }),

  setVisibleHeadings: (ids: string[]) =>
    set((state) => ({
      sections: state.sections.map((s) => ({
        ...s,
        isVisible: ids.includes(s.id),
      })),
    })),
}));
