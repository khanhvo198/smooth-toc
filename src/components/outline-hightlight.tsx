import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Section } from "../stores/toc";

interface OutlineHightlightProps {
  sections: Section[];
}

export const OutlineHightlight: FC<OutlineHightlightProps> = ({ sections }) => {
  const sectionsVisible = sections.filter((s) => s.isVisible);

  const firstSectionVisibleIndex = Math.max(
    0,
    sections.findIndex((s) => s.id === sectionsVisible[0]?.id),
  );

  const height = sectionsVisible.reduce(
    (sum, ele) => sum + (ele?.outlineRef?.current?.offsetHeight || 0),
    0,
  );

  const top = sections
    .slice(0, firstSectionVisibleIndex)
    .reduce(
      (sum, ele) => sum + (ele?.outlineRef?.current?.offsetHeight || 0),
      0,
    );

  return (
    <Box
      width="1px"
      backgroundColor="pink.400"
      marginTop="0.25rem"
      position="absolute"
      left="0.75rem"
      transition="color 0.2s ease-in-out"
      top={top}
      height={height - 8}
    />
  );
};
