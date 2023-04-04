import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconMinus: React.FC<Props> = ({
  className = "",
  color,
  title = "",
  theme,
}: Props) => {
  const getColor = useMemo(() => {
    if (color) {
      return color;
    }

    return theme === "light" ? "#F37A19" : "#E0245E";
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
      <circle opacity="0.75" cx="12" cy="12" r="12" fill={getColor} />
      <path
        d="M16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11L16 11Z"
        fill="white"
      />
    </IconWrapper>
  );
};

IconMinus.displayName = "IconMinus";

export default React.memo(IconMinus);
