import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconRounded: React.FC<Props> = ({
  className = "",
  color = "#EFF3F8",
  title = "",
}: Props) => (
  <IconWrapper
    className={className}
    fill="none"
    height="12"
    size="regular"
    type="small"
    viewBox="0 0 12 12"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== "" && <title>{title}</title>}
    <circle cx="6" cy="6" r="5" fill={color} stroke="#0074C0" strokeWidth="2" />
  </IconWrapper>
);

IconRounded.displayName = "IconRounded";

export default React.memo(IconRounded);
