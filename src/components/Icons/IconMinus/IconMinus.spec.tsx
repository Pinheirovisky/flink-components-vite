import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconMinus from "./IconMinus";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconMinus theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconMinus test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconMinus: ", () => {
    const title = "Retirar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Retirar");
    expect(icon);
  });
});
