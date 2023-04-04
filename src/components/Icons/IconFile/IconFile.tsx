import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconFile: React.FC<Props> = ({
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
      <path
        d="M9.17 6L11.17 8H20V18H4V6H9.17ZM10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
        fill={getColor}
      />
    </IconWrapper>
  );
};

IconFile.displayName = "IconFile";

export default React.memo(IconFile);
