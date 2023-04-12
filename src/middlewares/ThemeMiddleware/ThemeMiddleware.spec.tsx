import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import React from "react";

import { ActionsBar } from "components";

const createSut = (theme: "light" | "dark") => {
  const renderComp = () =>
    render(
      <ActionsBar
        theme={theme}
        actions={[
          {
            label: "Button 1",
            disabled: false,
            action: jest.fn(),
          },
          {
            label: "Button 2",
            disabled: false,
            action: jest.fn(),
          },
        ]}
      />,
    );

  return { renderComp };
};

describe("ThemeMiddleware test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render a component, with dark theme: ", () => {
    const theme = "light";

    const { renderComp } = createSut(theme);

    renderComp();

    const lightButton = screen.getByText("Button 1");
    expect(lightButton).toHaveStyle("background-color: #F37A19");
  });
  it("should render a component, with light theme: ", () => {
    const theme = "dark";

    const { renderComp } = createSut(theme);

    renderComp();

    const darkButton = screen.getByText("Button 1");
    expect(darkButton).toHaveStyle("background-color: #0074C0");
  });
});
