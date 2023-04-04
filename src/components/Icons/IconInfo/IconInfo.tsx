import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconInfo: React.FC<Props> = ({ className = "", title = "" }: Props) => {
  return (
    <IconWrapper
      className={className}
      size="great"
      type="small"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}

      <circle cx="16.5" cy="16.5" r="16" stroke="#0074C0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.25 7.5H18.75V12H14.25V7.5ZM18.75 14.25H14.25V25.5H18.75V14.25ZM17.4 15.6H15.6V24.15H17.4V15.6ZM17.4 8.85H15.6V10.65H17.4V8.85Z"
        fill="#0074C0"
      />
    </IconWrapper>
  );
};

IconInfo.displayName = "IconInfo";

export default React.memo(IconInfo);
