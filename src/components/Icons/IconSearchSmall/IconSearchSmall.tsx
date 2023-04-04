import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconSearchSmall: React.FC<Props> = ({
  className = "",
  title = "",
}: Props) => {
  return (
    <IconWrapper
      className={className}
      size="great"
      type="small"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.83335 10.4998C6.90735 10.4998 7.8966 10.137 8.68525 9.5273L11.8115 12.6536C12.0441 12.8861 12.4212 12.8861 12.6538 12.6536C12.8863 12.421 12.8863 12.0439 12.6538 11.8113L9.52748 8.68506C10.1372 7.89642 10.5 6.90716 10.5 5.83317C10.5 3.25584 8.41068 1.1665 5.83335 1.1665C3.25602 1.1665 1.16669 3.25584 1.16669 5.83317C1.16669 8.4105 3.25602 10.4998 5.83335 10.4998ZM9.79971 5.83286C9.79971 8.02359 8.02377 9.79953 5.83304 9.79953C3.64231 9.79953 1.86638 8.02359 1.86638 5.83286C1.86638 3.64213 3.64231 1.86619 5.83304 1.86619C8.02377 1.86619 9.79971 3.64213 9.79971 5.83286Z"
        fill="#6E7484"
      />
    </IconWrapper>
  );
};

IconSearchSmall.displayName = "IconSearchSmall";

export default React.memo(IconSearchSmall);
