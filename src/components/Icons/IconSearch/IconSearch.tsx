import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconSearch: React.FC<Props> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C11.8411 18 13.537 17.3781 14.889 16.3328L20.2631 21.7069C20.6536 22.0974 21.2868 22.0974 21.6773 21.7069L21.7069 21.6773C22.0974 21.2868 22.0974 20.6536 21.7069 20.2631L16.3328 14.889C17.3781 13.537 18 11.8411 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM16.7995 9.99947C16.7995 13.755 13.755 16.7995 9.99947 16.7995C6.24393 16.7995 3.19947 13.755 3.19947 9.99947C3.19947 6.24393 6.24393 3.19947 9.99947 3.19947C13.755 3.19947 16.7995 6.24393 16.7995 9.99947Z"
        fill={getColor}
      />
    </IconWrapper>
  );
};

IconSearch.displayName = "IconSearch";

export default React.memo(IconSearch);
