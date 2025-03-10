import { useCallback, useEffect, useLayoutEffect } from "react";
import { useTocStore } from "../stores/toc";

export const useVisibleSections = () => {
  const { sections, setVisibleHeadings } = useTocStore();

  const checkVisibleSections = useCallback(() => {
    const newVisibleSections: string[] = [];

    const { innerHeight } = window;

    for (const section of sections) {
      if (!section.headingRef) {
        continue;
      }
      const bottom =
        section?.headingRef?.current?.getBoundingClientRect().bottom;
      if (!bottom) {
        continue;
      }
      if (bottom > 0 && bottom < innerHeight) {
        newVisibleSections.push(section.id);
      }
    }

    const oldVisibleSections = sections
      .filter((s) => s.isVisible)
      .map((s) => s.id);
    if (oldVisibleSections.join() !== newVisibleSections.join()) {
      setVisibleHeadings(newVisibleSections);
    }
  }, [sections, setVisibleHeadings]);

  useEffect(() => {
    window.addEventListener("scroll", checkVisibleSections, { passive: true });
    window.addEventListener("resize", checkVisibleSections);

    return () => {
      window.removeEventListener("scroll", checkVisibleSections);
      window.removeEventListener("resize", checkVisibleSections);
    };
  }, [sections, checkVisibleSections]);

  useLayoutEffect(() => checkVisibleSections());
};
