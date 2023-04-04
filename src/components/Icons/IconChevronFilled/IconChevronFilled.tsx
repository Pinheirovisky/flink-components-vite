import React, { useMemo } from "react";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconPlusRounded: React.FC<Props> = ({
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
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      <path
        d="M5.61732 9.92385C5.24364 9.76907 5 9.40443 5 8.99997L5 4.99997C5 4.59551 5.24364 4.23087 5.61732 4.07609C5.99099 3.92131 6.42111 4.00687 6.70711 4.29286L8.70711 6.29286C9.09763 6.68339 9.09763 7.31655 8.70711 7.70708L6.70711 9.70708C6.42111 9.99308 5.99099 10.0786 5.61732 9.92385Z"
        fill={getColor}
      />
    </svg>
  );
};

IconPlusRounded.displayName = "IconPlusRounded";

export default React.memo(IconPlusRounded);
