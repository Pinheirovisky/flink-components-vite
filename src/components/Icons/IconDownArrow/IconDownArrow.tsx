import React from "react";

import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconDownArrow: React.FC<Props> = ({
  title = "",
  className = "",
}: Props) => {
  return (
    <IconWrapper
      className={className}
      size="great"
      type="small"
      width="26"
      height="14"
      viewBox="0 0 26 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      <path d="M1 1L13 12.5L25 1" stroke="#676767" />
    </IconWrapper>
  );
};

IconDownArrow.displayName = "IconDownArrow";

export default React.memo(IconDownArrow);
