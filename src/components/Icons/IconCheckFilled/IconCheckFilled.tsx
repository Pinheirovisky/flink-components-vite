import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconCheckFilled: React.FC<Props> = ({
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
      d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM15.8636 8.3636L10.5 13.7272L8.1364 11.3636C7.78492 11.0121 7.21508 11.0121 6.8636 11.3636C6.51213 11.7151 6.51213 12.2849 6.8636 12.6364L9.8636 15.6364C10.2151 15.9879 10.7849 15.9879 11.1364 15.6364L17.1364 9.6364C17.4879 9.28492 17.4879 8.71508 17.1364 8.3636C16.7849 8.01213 16.2151 8.01213 15.8636 8.3636Z"
      fill={color}
    />
  </IconWrapper>
);

IconCheckFilled.displayName = "IconCheckFilled";

export default React.memo(IconCheckFilled);
