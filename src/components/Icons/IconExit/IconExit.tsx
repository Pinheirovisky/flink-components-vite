import React from "react";

import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconExit: React.FC<Props> = ({
  className = "",
  color = "#596073",
  title = "",
}: Props) => (
  <IconWrapper
    className={className}
    fill="none"
    height="240"
    size="great"
    type="small"
    viewBox="0 0 220 240"
    width="220"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== "" && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M200.147 123.122L167.709 155.559C167.054 156.214 166.235 156.542 165.416 156.542C164.598 156.542 163.724 156.214 163.124 155.559C161.869 154.304 161.869 152.23 163.124 150.92L190.251 123.792H110.833C109.032 123.792 107.558 122.319 107.558 120.517C107.558 118.716 109.032 117.242 110.833 117.242H190.252L163.069 90.0595C161.814 88.8041 161.814 86.7299 163.069 85.4199C164.325 84.1099 166.399 84.1645 167.709 85.4199L200.459 118.17C200.612 118.323 200.747 118.489 200.863 118.663C201.228 119.191 201.442 119.831 201.442 120.517C201.442 121.576 200.932 122.522 200.147 123.122Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.3333 50C39.6765 50 38.3333 51.3431 38.3333 53V187C38.3333 188.657 39.6765 190 41.3333 190H142.667C144.324 190 145.667 188.657 145.667 187V53C145.667 51.3431 144.324 50 142.667 50H41.3333ZM49.0333 62C48.2049 62 47.5333 62.6716 47.5333 63.5V176.5C47.5333 177.328 48.2049 178 49.0333 178H134.967C135.795 178 136.467 177.328 136.467 176.5V63.5C136.467 62.6716 135.795 62 134.967 62H49.0333Z"
      fill={color}
    />
  </IconWrapper>
);

IconExit.displayName = "IconExit";

export default React.memo(IconExit);
