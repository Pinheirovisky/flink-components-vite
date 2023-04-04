import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconFilter: React.FC<Props> = ({
  className = "",
  color = "#666666",
  title = "",
}: Props) => (
  <IconWrapper
    className={className}
    size="great"
    type="small"
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== "" && <title>{title}</title>}
    <path
      d="M26.5118 6H5.5088C5.30119 6 5.18404 6.23842 5.3109 6.40276L14.1145 17.8075C14.1483 17.8513 14.1666 17.905 14.1666 17.9603V25.6175C14.1666 25.7978 14.3518 25.9188 14.517 25.8464L18.2948 24.1906C18.3857 24.1507 18.4444 24.0609 18.4444 23.9616V17.9557C18.4444 17.9032 18.4609 17.8521 18.4916 17.8095L26.7146 6.39614C26.8337 6.23078 26.7156 6 26.5118 6Z"
      stroke={color}
      strokeWidth="1.85"
      color={color}
    />
  </IconWrapper>
);

IconFilter.displayName = "IconFilter";

export default React.memo(IconFilter);
