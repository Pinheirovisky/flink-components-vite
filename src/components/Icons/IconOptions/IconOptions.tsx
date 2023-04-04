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
  title = "",
  color = "#596073",
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
    <circle cx="16" cy="16" r="3" transform="rotate(-90 16 16)" fill={color} />
    <circle cx="16" cy="25" r="3" transform="rotate(-90 16 25)" fill={color} />
    <circle cx="16" cy="7" r="3" transform="rotate(-90 16 7)" fill={color} />
  </IconWrapper>
);

IconFilter.displayName = "IconFilter";

export default React.memo(IconFilter);
