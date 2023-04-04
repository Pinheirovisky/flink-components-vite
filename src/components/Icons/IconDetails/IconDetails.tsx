import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconDetails: React.FC<Props> = ({
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
        d="M7 19C6.44772 19 6 19.4477 6 20C6 20.5523 6.44772 21 7 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H7ZM13 10C13 9.44771 13.4477 9 14 9H21C21.5523 9 22 9.44771 22 10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10ZM6 5C6 4.44772 6.44772 4 7 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H7C6.44772 6 6 5.55228 6 5ZM13 15C13 14.4477 13.4477 14 14 14H21C21.5523 14 22 14.4477 22 15C22 15.5523 21.5523 16 21 16H14C13.4477 16 13 15.5523 13 15ZM11 12.5C11 14.9853 8.98528 17 6.5 17C4.01472 17 2 14.9853 2 12.5C2 10.0147 4.01472 8 6.5 8C8.98528 8 11 10.0147 11 12.5ZM7 10.5C7 10.2239 6.77614 10 6.5 10C6.22386 10 6 10.2239 6 10.5V12H4.5C4.22386 12 4 12.2239 4 12.5C4 12.7761 4.22386 13 4.5 13H6L6 14.5C6 14.7761 6.22386 15 6.5 15C6.77614 15 7 14.7761 7 14.5V13H8.5C8.77614 13 9 12.7761 9 12.5C9 12.2239 8.77614 12 8.5 12H7V10.5Z"
        fill={getColor}
      />
    </IconWrapper>
  );
};

IconDetails.displayName = "IconDetails";

export default React.memo(IconDetails);
