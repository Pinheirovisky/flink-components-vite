import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconDownloadNotification: React.FC<Props> = ({
  className = "",
  title = "",
}: Props) => (
  <IconWrapper
    className={className}
    size="great"
    type="small"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== "" && <title>{title}</title>}

    <path
      d="M20.8571 14.8574C20.4626 14.8574 20.1428 15.1772 20.1428 15.5717V19.8574C20.1428 20.2519 19.823 20.5717 19.4285 20.5717H5.1429C4.74839 20.5717 4.4286 20.2519 4.4286 19.8574V15.5717C4.4286 15.1772 4.1088 14.8574 3.7143 14.8574C3.3198 14.8574 3 15.1772 3 15.5717V19.8574C3 21.0409 3.95939 22.0003 5.14285 22.0003H19.4286C20.6121 22.0003 21.5714 21.0409 21.5714 19.8574V15.5717C21.5714 15.1772 21.2516 14.8574 20.8571 14.8574Z"
      fill="#666666"
    />
    <path
      d="M16.346 13.3521C16.0692 13.0848 15.6304 13.0848 15.3536 13.3521L13 15.7043V2.7143C13 2.3198 12.6802 2 12.2857 2C11.8912 2 11.5714 2.3198 11.5714 2.7143V15.7043L9.21923 13.3521C8.93547 13.0781 8.4833 13.086 8.20924 13.3697C7.94189 13.6465 7.94189 14.0853 8.20924 14.3621L11.7807 17.9335C12.0593 18.2128 12.5115 18.2134 12.7908 17.9348L12.7921 17.9335L16.3635 14.3621C16.6376 14.0784 16.6298 13.6262 16.346 13.3521Z"
      fill="#666666"
    />
  </IconWrapper>
);

IconDownloadNotification.displayName = "IconDownloadNotification";

export default React.memo(IconDownloadNotification);
