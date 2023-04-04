import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  smallSize?: boolean;
  theme: "light" | "dark";
}

const IconWarning: React.FC<Props> = ({
  className = "",
  color,
  title = "",
  smallSize = false,
  theme,
}: Props) => {
  const getColor = useMemo(() => {
    if (color) {
      return color;
    }

    return theme === "light" ? "#0074C0" : "#F37A19";
  }, [color, theme]);

  return (
    <IconWrapper
      className={className}
      fill="none"
      height={smallSize ? "40" : "75"}
      size="great"
      type="small"
      viewBox="0 0 76 75"
      width={smallSize ? "40" : "76"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      <path
        d="M38 12.5L13 62.5H63L38 12.5Z"
        stroke={getColor}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 32.5V45"
        stroke={getColor}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 55C38.6903 55 39.25 54.4403 39.25 53.75C39.25 53.0597 38.6903 52.5 38 52.5C37.3097 52.5 36.75 53.0597 36.75 53.75C36.75 54.4403 37.3097 55 38 55Z"
        stroke={getColor}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrapper>
  );
};

IconWarning.displayName = "IconWarning";

export default React.memo(IconWarning);
