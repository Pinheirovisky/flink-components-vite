import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconList: React.FC<Props> = ({
  className = "",
  color,
  title = "",
  theme,
}: Props) => {
  const getColor = useMemo(() => {
    if (color) {
      return color;
    }

    return theme === "light" ? "#596073" : "#FFF";
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
      <line
        x1="8"
        y1="6.25"
        x2="20"
        y2="6.25"
        stroke={getColor}
        strokeWidth="1.5"
      />
      <line
        x1="4"
        y1="6.25"
        x2="5.5"
        y2="6.25"
        stroke={getColor}
        strokeWidth="1.5"
      />
      <line
        x1="8"
        y1="12.25"
        x2="20"
        y2="12.25"
        stroke={getColor}
        strokeWidth="1.5"
      />
      <line
        x1="4"
        y1="12.25"
        x2="5.5"
        y2="12.25"
        stroke={getColor}
        strokeWidth="1.5"
      />
      <line
        x1="8"
        y1="18.25"
        x2="20"
        y2="18.25"
        stroke={getColor}
        strokeWidth="1.5"
      />
      <line
        x1="4"
        y1="18.25"
        x2="5.5"
        y2="18.25"
        stroke={getColor}
        strokeWidth="1.5"
      />
    </IconWrapper>
  );
};

IconList.displayName = "IconList";

export default React.memo(IconList);
