import React from "react";

import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconTrashNotification: React.FC<Props> = ({
  title = "",
  className = "",
}: Props) => {
  return (
    <IconWrapper
      className={className}
      size="great"
      type="small"
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 1.25C3.75 0.973858 3.97386 0.75 4.25 0.75H7.75C8.02614 0.75 8.25 0.973858 8.25 1.25V1.5H11C11.5523 1.5 12 1.94772 12 2.5V2.75C12 3.22965 11.6623 3.63042 11.2117 3.72755L10.5499 16.3026C10.5219 16.8337 10.0831 17.25 9.55125 17.25H2.44875C1.91689 17.25 1.47809 16.8337 1.45013 16.3026L0.788292 3.72755C0.33769 3.63042 0 3.22965 0 2.75V2.5C0 1.94772 0.447715 1.5 1 1.5H3.75V1.25ZM11.25 2.625C11.25 2.83211 11.0821 3 10.875 3H1.125C0.917893 3 0.75 2.83211 0.75 2.625C0.75 2.41789 0.917893 2.25 1.125 2.25H10.875C11.0821 2.25 11.25 2.41789 11.25 2.625ZM10.35 4.5H1.65L2.22596 15.8753C2.23943 16.1413 2.45901 16.35 2.72532 16.35H9.27468C9.54099 16.35 9.76057 16.1413 9.77404 15.8753L10.35 4.5Z"
        fill="#666666"
      />
    </IconWrapper>
  );
};

IconTrashNotification.displayName = "IconTrashNotification";

export default React.memo(IconTrashNotification);
