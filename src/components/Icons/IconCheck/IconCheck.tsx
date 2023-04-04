import React, { useMemo } from "react";

import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconCheck: React.FC<Props> = ({
  className = "",
  color,
  title = "",
  theme,
}: Props) => {
  const getColor = useMemo(() => {
    if (color) {
      return color;
    }

    return theme === "light" ? "#0074C0" : "#54EA5D";
  }, [color, theme]);

  return (
    <IconWrapper
      className={className}
      fill="none"
      height="49"
      size="little"
      type="mid"
      viewBox="0 0 48 49"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.6232 12.5L20.3684 27.1109L13.6914 20.7813L9 25.4752L20.3684 36.5L39.3158 17.1926L34.6232 12.5Z"
        fill={getColor}
      />
    </IconWrapper>
  );
};

IconCheck.displayName = "IconCheck";

export default React.memo(IconCheck);
