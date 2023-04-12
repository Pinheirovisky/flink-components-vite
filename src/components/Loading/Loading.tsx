import React from "react";

import { ThemeMiddleware } from "middlewares";

// styles
import Wrapper, { Content } from "./Loading.styles";

export interface LoadingProps {
  noMargin?: boolean;
  theme: "light" | "dark";
}

const Loading: React.FC<LoadingProps> = ({
  noMargin = false,
  theme,
}: LoadingProps) => {
  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper noMargin={noMargin} data-testid="loading-component">
        <Content className="loading-content">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </Content>
      </Wrapper>
    </ThemeMiddleware>
  );
};

export default Loading;
