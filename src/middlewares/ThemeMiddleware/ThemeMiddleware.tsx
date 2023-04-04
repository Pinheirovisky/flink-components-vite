import { darkMain, lightMain } from "@themes/main";
import React from "react";
import { ThemeProvider } from "styled-components";

export interface ThemeMiddlewareProps {
  theme: "light" | "dark";
  children: React.ReactNode;
}

const ThemeMiddleware: React.FC<ThemeMiddlewareProps> = ({
  children,
  theme,
}) => {
  const defaultTheme = theme === "light" ? lightMain : darkMain;

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default ThemeMiddleware;
