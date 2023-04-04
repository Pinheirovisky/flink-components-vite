import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconFont: React.FC<Props> = ({
  className = "",
  color = "#0074C0",
  title = "",
}: Props) => (
  <IconWrapper
    className={className}
    size="great"
    type="small"
    width="26"
    height="25"
    viewBox="0 0 26 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== "" && <title>{title}</title>}
    <path
      d="M26 12.5C26 19.4036 20.1797 25 13 25C5.8203 25 0 19.4036 0 12.5C0 5.59644 5.8203 0 13 0C20.1797 0 26 5.59644 26 12.5Z"
      fill={color}
    />
    <path
      d="M7.78338 17H6.49077L10.2294 6.81818H11.5021L15.2408 17H13.9482L10.9055 8.42898H10.826L7.78338 17ZM8.26065 13.0227H13.4709V14.1165H8.26065V13.0227ZM17.9119 16.6023V12.8523H18.5483V16.6023H17.9119ZM16.3551 15.0455V14.4091H20.1051V15.0455H16.3551Z"
      fill="white"
    />
  </IconWrapper>
);

IconFont.displayName = "IconFont";

export default React.memo(IconFont);
