import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconEllipsis: React.FC<Props> = ({
  className = "",
  color = "#A8AFC1",
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 12.0014C8 13.1068 7.10467 14.0028 6 14.0028C4.89533 14.0028 4 13.1068 4 12.0014C4 10.896 4.89533 10 6 10C7.10467 10 8 10.896 8 12.0014ZM14 12.0014C14 13.1068 13.1047 14.0028 12 14.0028C10.8953 14.0028 10 13.1068 10 12.0014C10 10.896 10.8953 10 12 10C13.1047 10 14 10.896 14 12.0014ZM20 12.0014C20 13.1068 19.1047 14.0028 18 14.0028C16.8953 14.0028 16 13.1068 16 12.0014C16 10.896 16.8953 10 18 10C19.1047 10 20 10.896 20 12.0014Z"
      fill={color}
    />
  </IconWrapper>
);

IconEllipsis.displayName = "IconEllipsis";

export default React.memo(IconEllipsis);
