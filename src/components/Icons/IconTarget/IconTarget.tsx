import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconTarget: React.FC<Props> = ({
  className = "",
  title = "",
  color = "#596073",
}: Props) => (
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
      d="M12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 16.9183 7.58172 20.5 12 20.5Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M12 14.5C13.1046 14.5 14 13.6046 14 12.5C14 11.3954 13.1046 10.5 12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5Z"
      fill={color}
    />
    <rect x="11" y="2.5" width="2" height="4" fill={color} />
    <rect
      width="2"
      height="4"
      transform="matrix(1 0 0 -1 11 22.5)"
      fill={color}
    />
    <rect
      x="22"
      y="11.5"
      width="2"
      height="4"
      transform="rotate(90 22 11.5)"
      fill={color}
    />
    <rect
      width="2"
      height="4"
      transform="matrix(0 1 1 0 2 11.5)"
      fill={color}
    />
  </IconWrapper>
);

IconTarget.displayName = "IconTarget";

export default React.memo(IconTarget);
