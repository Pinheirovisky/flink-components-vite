import React, { useMemo } from "react";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconTriangle: React.FC<Props> = ({
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
    <svg
      className={className}
      fill="none"
      height="6"
      viewBox="0 0 12 6"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6L0 0L12 0L6 6Z"
        fill={getColor}
      />
    </svg>
  );
};

IconTriangle.displayName = "IconTriangle";

export default React.memo(IconTriangle);
