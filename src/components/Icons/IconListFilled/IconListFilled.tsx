import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconListFilled: React.FC<Props> = ({
  className = "",
  color = "#0074C0",
  title = "",
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
      d="M19 7.5C19 6.11929 17.8807 5 16.5 5H7.5C6.11929 5 5 6.11929 5 7.5V16.5C5 17.8807 6.11929 19 7.5 19H16.5C17.8807 19 19 17.8807 19 16.5V7.5ZM8 8.75C8 8.33579 8.31603 8 8.70588 8H15.2941C15.684 8 16 8.33579 16 8.75C16 9.16421 15.684 9.5 15.2941 9.5H8.70588C8.31603 9.5 8 9.16421 8 8.75ZM8 11.75C8 11.3358 8.31603 11 8.70588 11H12.2941C12.684 11 13 11.3358 13 11.75C13 12.1642 12.684 12.5 12.2941 12.5H8.70588C8.31603 12.5 8 12.1642 8 11.75ZM8.70588 14H15.2941C15.684 14 16 14.3358 16 14.75C16 15.1642 15.684 15.5 15.2941 15.5H8.70588C8.31603 15.5 8 15.1642 8 14.75C8 14.3358 8.31603 14 8.70588 14Z"
      fill={color}
    />
  </IconWrapper>
);

IconListFilled.displayName = "IconListFilled";

export default React.memo(IconListFilled);
