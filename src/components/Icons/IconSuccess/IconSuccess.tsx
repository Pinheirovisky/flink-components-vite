import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconSuccess: React.FC<Props> = ({
  className = "",
  title = "",
}: Props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3119 24.9222C11.3302 24.9438 11.3495 24.9648 11.3699 24.9852L11.9002 25.5155C12.2907 25.906 12.9239 25.906 13.3144 25.5155L29.4011 9.42884C29.7916 9.03832 29.7916 8.40515 29.4011 8.01463L28.8707 7.4843C28.4802 7.09378 27.8471 7.09377 27.4565 7.4843L12.6098 22.331L5.53337 15.2545C5.14284 14.864 4.50968 14.864 4.11915 15.2545L3.58882 15.7848C3.1983 16.1754 3.1983 16.8085 3.58882 17.1991L11.3119 24.9222Z"
        fill="#38A73F"
      />
    </IconWrapper>
  );
};

IconSuccess.displayName = "IconSuccess";

export default React.memo(IconSuccess);
