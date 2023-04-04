import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconLightning: React.FC<Props> = ({
  className = "",
  color = "#596073",
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
      d="M11.197 19H10.397L11.197 13.5556H8.39697C7.93296 13.5556 7.94096 13.3067 8.09297 13.0422C8.24497 12.7778 8.13297 12.98 8.14897 12.9489C9.18099 11.1756 10.733 8.53111 12.7971 5H13.5971L12.7971 10.4444H15.5971C15.9891 10.4444 16.0451 10.7011 15.9731 10.8411L15.9171 10.9578C12.7651 16.3167 11.197 19 11.197 19Z"
      fill={color}
    />
  </IconWrapper>
);

IconLightning.displayName = "IconLightning";

export default React.memo(IconLightning);
