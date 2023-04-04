import { ThemeMiddleware } from "@middlewares";
import React from "react";

import { Button, MainBar } from "./ActionsBar.styles";

export interface Props {
  actions: any[];
  uiClasses?: string;
  theme: "light" | "dark";
}

const ActionsBar: React.FC<Props> = ({
  actions,
  theme,
  uiClasses = "",
}: Props) => {
  const cssClassList = `actions-bar ${uiClasses}`;
  return (
    <ThemeMiddleware theme={theme}>
      <MainBar className={cssClassList} data-testid="actions-bar">
        {actions.map((item: any) => {
          return (
            <Button
              onClick={item.action}
              disabled={item.disabled}
              key={item.label}
            >
              {item.label}
            </Button>
          );
        })}
      </MainBar>
    </ThemeMiddleware>
  );
};

export default ActionsBar;
