import { ThemeMiddleware } from "@middlewares";
import React from "react";

import Wrapper from "./ErrorMessage.styles";

export interface Props {
  children: string;
  id?: string;
  uiClasses?: string;
  theme: "light" | "dark";
}

const ErrorMessage: React.FC<Props> = ({
  children,
  id,
  uiClasses = "",
  theme,
}: Props) => {
  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper id={id} className={uiClasses}>
        {children}
      </Wrapper>
    </ThemeMiddleware>
  );
};

export default ErrorMessage;
