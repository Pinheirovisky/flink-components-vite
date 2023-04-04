import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconNextInitial: React.FC<Props> = ({
  className = "",
  color,
  title = "",
  theme,
}: Props) => {
  const getColor = useMemo(() => {
    if (color) {
      return color;
    }

    return theme === "light" ? "#0074C0" : "#FFF";
  }, [color, theme]);

  return (
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
        d="M18 16.9981C18 17.8089 17.0857 18.2827 16.4233 17.8151L9.29034 12.7801C8.72592 12.3816 8.72592 11.5445 9.29034 11.1461L16.4233 6.11108C17.0857 5.64349 18 6.11723 18 6.92805V16.9981ZM6 17.2131C6 17.6273 6.33579 17.9631 6.75 17.9631C7.16421 17.9631 7.5 17.6273 7.5 17.2131L7.5 6.71307C7.5 6.29886 7.16421 5.96307 6.75 5.96307C6.33579 5.96307 6 6.29886 6 6.71307L6 17.2131Z"
        fill={getColor}
      />
    </IconWrapper>
  );
};

IconNextInitial.displayName = "IconNextInitial";

export default React.memo(IconNextInitial);
