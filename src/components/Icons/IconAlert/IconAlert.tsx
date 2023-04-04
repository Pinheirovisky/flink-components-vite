import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconAlert: React.FC<Props> = ({ className = "", title = "" }: Props) => {
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

      <path
        d="M16.5 5.5L5.5 27.5H27.5L16.5 5.5Z"
        stroke="#F37A19"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 14.2998V19.7998"
        stroke="#F37A19"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 24.2001C16.8037 24.2001 17.05 23.9538 17.05 23.6501C17.05 23.3464 16.8037 23.1001 16.5 23.1001C16.1963 23.1001 15.95 23.3464 15.95 23.6501C15.95 23.9538 16.1963 24.2001 16.5 24.2001Z"
        stroke="#F37A19"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrapper>
  );
};

IconAlert.displayName = "IconAlert";

export default React.memo(IconAlert);
