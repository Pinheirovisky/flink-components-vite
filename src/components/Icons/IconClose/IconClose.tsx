import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  variant?: "default" | "higher";
  theme: "light" | "dark";
}

const IconClose: React.FC<Props> = ({
  className = "",
  color,
  title = "",
  variant = "default",
  theme,
}: Props) => {
  const getColor = useMemo(() => {
    if (color) {
      return color;
    }

    return theme === "light" ? "#A8AFC1" : "#FFF";
  }, [color, theme]);

  return variant === "default" ? (
    <IconWrapper
      className={className}
      fill="none"
      height="25"
      size="great"
      type="small"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      <path
        d="M4.2097 4.8871L4.29289 4.79289C4.65338 4.43241 5.22061 4.40468 5.6129 4.7097L5.70711 4.79289L12 11.085L18.2929 4.79289C18.6834 4.40237 19.3166 4.40237 19.7071 4.79289C20.0976 5.18342 20.0976 5.81658 19.7071 6.20711L13.415 12.5L19.7071 18.7929C20.0676 19.1534 20.0953 19.7206 19.7903 20.1129L19.7071 20.2071C19.3466 20.5676 18.7794 20.5953 18.3871 20.2903L18.2929 20.2071L12 13.915L5.70711 20.2071C5.31658 20.5976 4.68342 20.5976 4.29289 20.2071C3.90237 19.8166 3.90237 19.1834 4.29289 18.7929L10.585 12.5L4.29289 6.20711C3.93241 5.84662 3.90468 5.27939 4.2097 4.8871L4.29289 4.79289L4.2097 4.8871Z"
        fill={getColor}
      />
    </IconWrapper>
  ) : (
    <IconWrapper
      type="mid"
      size="little"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.4852 4.92832C40.8994 4.34253 39.9497 4.34254 39.3639 4.92832L23.9963 20.2959L8.62875 4.92836C8.04296 4.34258 7.09321 4.34258 6.50743 4.92837L5.3431 6.09269C4.75731 6.67848 4.75731 7.62823 5.3431 8.21401L20.7106 23.5816L5.34307 38.9491C4.75729 39.5349 4.75729 40.4847 5.34307 41.0705L6.5074 42.2348C7.09319 42.8206 8.04293 42.8206 8.62872 42.2348L23.9963 26.8672L39.3639 42.2348C39.9497 42.8206 40.8994 42.8206 41.4852 42.2348L42.6496 41.0705C43.2353 40.4847 43.2353 39.535 42.6496 38.9492L27.2819 23.5816L42.6495 8.21397C43.2353 7.62818 43.2353 6.67843 42.6495 6.09265L41.4852 4.92832Z"
          fill={getColor}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </IconWrapper>
  );
};

IconClose.displayName = "IconClose";

export default React.memo(IconClose);
