import React, { useMemo } from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconTrash: React.FC<Props> = ({
  className = "",
  color,
  title = "",
  theme,
}: Props) => {
  const getColor = useMemo(() => {
    if (color) {
      return color;
    }

    return theme === "light" ? "#0074C0" : "#E24444";
  }, [color, theme]);

  return (
    <IconWrapper
      className={className}
      fill="none"
      height="41"
      size="little"
      type="mid"
      viewBox="0 0 40 41"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.25 7.25C16.25 6.97386 16.4739 6.75 16.75 6.75H23.25C23.5261 6.75 23.75 6.97386 23.75 7.25V8H29C29.5523 8 30 8.44772 30 9V10.75C30 11.3023 29.5523 11.75 29 11.75H28.6842L27.5499 33.3026C27.5219 33.8337 27.0831 34.25 26.5512 34.25H13.4488C12.9169 34.25 12.4781 33.8337 12.4501 33.3026L11.3158 11.75H11C10.4477 11.75 10 11.3023 10 10.75V9C10 8.44772 10.4477 8 11 8H16.25V7.25ZM28.75 10.1C28.75 10.3209 28.5709 10.5 28.35 10.5H11.65C11.4291 10.5 11.25 10.3209 11.25 10.1V9.65C11.25 9.42909 11.4291 9.25 11.65 9.25H28.35C28.5709 9.25 28.75 9.42909 28.75 9.65V10.1ZM27.2499 13H12.7499L13.7259 32.2753C13.7394 32.5413 13.9589 32.75 14.2253 32.75H25.7746C26.0409 32.75 26.2605 32.5413 26.274 32.2753L27.2499 13Z"
        fill={getColor}
      />
    </IconWrapper>
  );
};

IconTrash.displayName = "IconTrash";

export default React.memo(IconTrash);
