import React from "react";

import { ThemeMiddleware } from "middlewares";

import Wrapper from "./ComplementButton.styles";

export interface ComplementButtonProps {
  theme: "light" | "dark";
  children: React.ReactNode;
}

const ComplementButton: React.FC<ComplementButtonProps> = ({
  theme,
  children,
}) => {
  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper>{children}</Wrapper>
    </ThemeMiddleware>
  );
};

export default ComplementButton;
