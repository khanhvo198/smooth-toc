import { useEffect, useRef } from "react";
import { useTocStore } from "../stores/toc";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const createRehypeHeading = (level: number) => {
  const RyhpeHeading = ({ id, children }: Props) => {
    const registHeadingRef = useTocStore((state) => state.registHeadingRef);

    const headingRef = useRef<HTMLHeadingElement>(null);

    const HeadingTag = `h${level || 1}` as HeadingType;

    useEffect(() => {
      if (id) {
        registHeadingRef(id, headingRef);
      }
    }, [id, registHeadingRef]);
    return (
      <HeadingTag ref={headingRef} id={id}>
        {children}
      </HeadingTag>
    );
  };

  return (props: Props) => <RyhpeHeading {...props} />;
};
