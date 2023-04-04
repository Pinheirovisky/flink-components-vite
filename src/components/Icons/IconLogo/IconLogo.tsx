import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  variant?: "default" | "smaller";
  theme: string;
}

const IconLogo: React.FC<Props> = ({
  className = "",
  variant = "default",
  theme,
}: Props) => {
  return (
    <>
      {variant === "smaller" && (
        <IconWrapper
          className={className}
          fill="none"
          height="40"
          size="great"
          type="mid"
          viewBox="0 0 64 40"
          width="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>VLI</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52.9979 32C51.3416 32 50 30.6577 50 29.001C50 27.3425 51.3416 26.002 52.9979 26.002C54.6566 26.002 56 27.3425 56 29.001C56 30.6577 54.6566 32 52.9979 32Z"
            fill="#F37A19"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.508 8V24.2586H55.6509V8H50.508Z"
            fill={theme === "dark" ? "#FFF" : "#0074C0"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.9408 29.3192C22.362 30.8571 20.8738 31.96 19.1297 31.96C17.3307 31.96 15.7859 30.7667 15.3001 29.1575L7.99983 8H14.0864C15.0059 10.9465 18.7993 23.1353 19.0171 24.2935H19.2665C19.4656 23.1094 23.273 10.9419 24.1972 8H30.2856"
            fill={theme === "dark" ? "#FFF" : "#0074C0"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.486 8V26.4766H47.6421V31.9521H35.982C34.4078 31.9521 33.1276 30.7167 33.1276 29.1968V8"
            fill={theme === "dark" ? "#FFF" : "#0074C0"}
          />
        </IconWrapper>
      )}

      {variant === "default" && (
        <IconWrapper
          className={className}
          fill="none"
          height="48"
          size="great"
          type="mid"
          viewBox="0 0 99 48"
          width="99"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>VLI</title>
          <path
            d="M97.3926 41.4302C97.3926 44.9536 94.4688 47.8091 90.8563 47.8091C87.2528 47.8091 84.3339 44.9536 84.3339 41.4302C84.3339 37.9028 87.2528 35.0512 90.8563 35.0512C94.4688 35.0512 97.3926 37.9028 97.3926 41.4302Z"
            fill="#F37A19"
          />
          <path
            d="M85.0141 32.1843H96.7103V-0.000164032H85.0141V32.1843Z"
            fill="#0074C0"
          />
          <path
            d="M30.361 42.7204C29.1845 45.7955 26.1598 48 22.6156 48C18.9606 48 15.8211 45.6135 14.8337 42.3978L0 0.096283H12.368C14.2361 5.98642 21.9448 30.3563 22.3871 32.6726H22.8937C23.2993 30.3049 31.0348 5.97652 32.9137 0.096283H45.2857"
            fill="#0074C0"
          />
          <path
            d="M63.8326 7.62939e-05V36.9537H79.9793V47.9048H56.8966C53.7799 47.9048 51.2469 45.4332 51.2469 42.3946V7.62939e-05"
            fill="#0074C0"
          />
        </IconWrapper>
      )}
    </>
  );
};

IconLogo.displayName = "IconLogo";

export default React.memo(IconLogo);
