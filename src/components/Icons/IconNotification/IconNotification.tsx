import React from "react";

import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
  theme: "light" | "dark";
}

const IconNotification: React.FC<Props> = ({
  color = "#009AFF",
  title = "",
  className = "",
}: Props) => {
  return (
    <IconWrapper
      className={className}
      size="great"
      type="small"
      width="24"
      height="33"
      viewBox="0 0 31 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title !== "" && <title>{title}</title>}

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5188 5.125C11.4655 4.86247 11.4375 4.59075 11.4375 4.3125C11.4375 2.06884 13.2563 0.25 15.5 0.25C17.7437 0.25 19.5625 2.06884 19.5625 4.3125C19.5625 4.59075 19.5345 4.86247 19.4812 5.125H19.875C23.741 5.125 26.875 8.25901 26.875 12.125V21.375L30.125 27.875H26.875H19.4812C19.5345 28.1375 19.5625 28.4092 19.5625 28.6875C19.5625 30.9312 17.7437 32.75 15.5 32.75C13.2563 32.75 11.4375 30.9312 11.4375 28.6875C11.4375 28.4092 11.4655 28.1375 11.5188 27.875H4.125H0.875L4.125 21.375V12.125C4.125 8.25901 7.25901 5.125 11.125 5.125H11.5188ZM13.5494 5.125C13.4451 4.87488 13.3875 4.60042 13.3875 4.3125C13.3875 3.1458 14.3333 2.2 15.5 2.2C16.6667 2.2 17.6125 3.1458 17.6125 4.3125C17.6125 4.60042 17.5549 4.87488 17.4506 5.125H13.5494ZM13.5494 27.875H17.4506C17.5549 28.1251 17.6125 28.3996 17.6125 28.6875C17.6125 29.8542 16.6667 30.8 15.5 30.8C14.3333 30.8 13.3875 29.8542 13.3875 28.6875C13.3875 28.3996 13.4451 28.1251 13.5494 27.875ZM6.075 21.83V14.075C6.075 10.209 9.20901 7.075 13.075 7.075H17.925C21.791 7.075 24.925 10.209 24.925 14.075V21.83L26.9725 25.925L24.925 25.925H6.075L4.0275 25.925L6.075 21.83Z"
        fill={color}
      />
    </IconWrapper>
  );
};

IconNotification.displayName = "IconNotification";

export default React.memo(IconNotification);
