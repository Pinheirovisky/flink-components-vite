import React from "react";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

// styles:
import { IconWrapper } from "../container";

const IconChevron: React.FC<Props> = ({
  className = "",
  color = "#A8AFC1",
  title = "",
}: Props) => (
  <IconWrapper
    className={className}
    fill="none"
    height="16"
    size="medium"
    type="small"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== "" && <title>{title}</title>}
    <path d="M12 6L8 10L4 6" stroke={color} strokeLinejoin="round" />
  </IconWrapper>
);

IconChevron.displayName = "IconChevron";

export default React.memo(IconChevron);
