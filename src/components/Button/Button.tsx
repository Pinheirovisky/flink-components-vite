import { ThemeMiddleware } from "@middlewares";
import classnames from "classnames";
import React from "react";

import ButtonStyles, { ButtonComponent } from "./Button.styles";
import { ButtonLink } from "./containers/ButtonLink";

export interface Props {
  callbackFunc?: () => void;
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  href?: string;
  icon?: React.ReactNode;
  id?: string;
  size?: "smaller" | "small" | "medium" | "big" | "full";
  type: "button" | "submit";
  variant?: "primary" | "secondary" | "hollow";
  uiClasses?: string;
  theme: "light" | "dark";
}

const Button: React.FC<Props> = ({
  callbackFunc = () => "",
  children,
  className = "",
  disabled = false,
  external = false,
  href,
  icon,
  id,
  size = "small",
  type,
  variant = "primary",
  uiClasses = "",
  theme,
}: Props) => {
  const styles = classnames({
    smaller: size === "smaller",
    small: size === "small",
    medium: size === "medium",
    big: size === "big",
    full: size === "full",
    primary: variant === "primary",
    secondary: variant === "secondary",
    hollow: variant === "hollow",
  });
  const classList = `${styles} ${uiClasses}`;

  const handleOnClick = () => callbackFunc();

  return (
    <ThemeMiddleware theme={theme}>
      <ButtonStyles
        disabled={disabled}
        variant={variant}
        className={classList}
        onClick={handleOnClick}
        id={id}
      >
        {!href ? (
          <ButtonComponent
            disabled={disabled}
            id={id}
            type={type}
            className={classnames({
              "has-icon": icon,
              [className]: className !== "",
            })}
          >
            {icon}
            {children}
          </ButtonComponent>
        ) : (
          <ButtonLink
            id={id}
            disabled={disabled}
            external={external}
            href={href}
          >
            {children}
          </ButtonLink>
        )}
      </ButtonStyles>
    </ThemeMiddleware>
  );
};

export default React.memo(Button);
