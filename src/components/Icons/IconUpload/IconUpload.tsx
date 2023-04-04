import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconUpload: React.FC<Props> = ({
  className = "",
  color = "#666666",
  title = "",
}: Props) => (
  <IconWrapper
    className={className}
    fill="none"
    height="20"
    size="great"
    type="small"
    viewBox="0 0 19 20"
    width="19"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== "" && <title>{title}</title>}
    <path
      d="M17.8571 12.8572C17.4626 12.8572 17.1428 13.177 17.1428 13.5715V17.8572C17.1428 18.2517 16.823 18.5715 16.4285 18.5715H2.1429C1.74839 18.5715 1.4286 18.2517 1.4286 17.8572V13.5715C1.4286 13.177 1.1088 12.8572 0.714299 12.8572C0.319796 12.8572 0 13.177 0 13.5715V17.8572C0 19.0407 0.959388 20 2.14285 20H16.4286C17.6121 20 18.5714 19.0407 18.5714 17.8572V13.5715C18.5714 13.177 18.2516 12.8572 17.8571 12.8572Z"
      fill={color}
    />
    <path
      d="M13.346 11.3521C13.0692 11.0848 12.6304 11.0848 12.3536 11.3521L10 13.7043V0.714299C10 0.319796 9.6802 0 9.2857 0C8.89119 0 8.5714 0.319796 8.5714 0.714299V13.7043L6.21923 11.3521C5.93547 11.0781 5.4833 11.086 5.20924 11.3697C4.94189 11.6465 4.94189 12.0853 5.20924 12.3621L8.78066 15.9335C9.05927 16.2128 9.51153 16.2134 9.79082 15.9348L9.79212 15.9335L13.3635 12.3621C13.6376 12.0784 13.6298 11.6262 13.346 11.3521Z"
      fill={color}
    />
  </IconWrapper>
);

IconUpload.displayName = "IconUpload";

export default React.memo(IconUpload);
