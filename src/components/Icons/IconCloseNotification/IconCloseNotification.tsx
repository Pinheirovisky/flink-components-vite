import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconCloseNotification: React.FC<Props> = ({
  className = "",
  title = "",
}: Props) => {
  return (
    <IconWrapper
      className={className}
      size="great"
      type="small"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}

      <g clipPath="url(#clip0_5156_5963)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.7341 4.84414C26.1949 4.30502 25.3209 4.30502 24.7818 4.84414L15.9963 13.6296L7.21094 4.84419C6.67183 4.30507 5.79774 4.30507 5.25863 4.84419C4.71951 5.3833 4.71951 6.25738 5.25863 6.7965L14.044 15.5819L5.2586 24.3673C4.71948 24.9064 4.71948 25.7805 5.2586 26.3196C5.79772 26.8587 6.67179 26.8587 7.21091 26.3196L15.9963 17.5342L24.7818 26.3197C25.3209 26.8588 26.195 26.8588 26.7341 26.3197C27.2732 25.7805 27.2732 24.9065 26.7341 24.3673L17.9486 15.5819L26.7341 6.79646C27.2732 6.25734 27.2732 5.38326 26.7341 4.84414Z"
          fill="#E24444"
        />
      </g>
      <defs>
        <clipPath id="clip0_5156_5963">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </IconWrapper>
  );
};

IconCloseNotification.displayName = "IconCloseNotification";

export default React.memo(IconCloseNotification);
