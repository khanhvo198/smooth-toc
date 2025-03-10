import { Link } from "@chakra-ui/react";
import { FC, useEffect, useRef } from "react";
import { Section, useTocStore } from "../stores/toc";

interface OutlineItemProps {
  section: Section;
}

export const OutlineItem: FC<OutlineItemProps> = ({ section }) => {
  const registOutlineItemRef = useTocStore(
    (state) => state.registOutlineItemRef,
  );

  const outlineRef = useRef<HTMLAnchorElement>(null);

  const { id } = section;

  useEffect(() => {
    if (id) {
      registOutlineItemRef(id, outlineRef);
    }
  }, [id, registOutlineItemRef]);

  return (
    <Link
      key={section.id}
      paddingTop="0.25rem"
      paddingBottom="0.25rem"
      marginLeft={`${Math.pow(section.level - 1, 1.5) * 16}px`}
      fontSize="0.85rem"
      padding="0.25rem"
      color={section.isVisible ? "white" : "gray.700"}
      transition="color 0.2s ease-in-out"
      textDecoration="none"
      ref={outlineRef}
      display="block"
      href={`#${section.id}`}
      outline="none"
    >
      {section.title}
    </Link>
  );
};
