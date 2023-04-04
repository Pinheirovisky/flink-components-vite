import React from "react";

import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconUpArrow: React.FC<Props> = ({
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

      <path
        d="M25.0028 12.9941L12.9972 1.49999L1.00281 13.0058"
        stroke="#676767"
      />
    </IconWrapper>
  );
};

IconUpArrow.displayName = "IconUpArrow";

export default React.memo(IconUpArrow);
