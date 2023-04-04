import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconNext: React.FC<Props> = ({
  className = "",
  color,
  title = "",
  theme,
}: Props) => {
  const getColor = useMemo(() => {
    if (color) {
      return color;
    }

    return theme === "light" ? "#0074C0" : "#FFF";
  }, [color, theme]);

  return (
    <IconWrapper
      className={className}
      fill="none"
      height="24"
      size="great"
      type="small"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      <path
        d="M7 7.00175C7 6.19093 8.00106 5.7172 8.72636 6.18478L16.5365 11.2198C17.1545 11.6182 17.1545 12.4553 16.5365 12.8538L8.72636 17.8888C8.00106 18.3564 7 17.8826 7 17.0718V7.00175Z"
        fill={getColor}
      />
    </IconWrapper>
  );
};

IconNext.displayName = "IconNext";

export default React.memo(IconNext);
