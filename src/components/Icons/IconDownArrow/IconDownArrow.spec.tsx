import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
import { ThemeProvider } from "styled-components";

import IconDownArrow from "./IconDownArrow";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconDownArrow theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconDownArrow test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconDownArrow: ", () => {
    const title = "Seta para baixo";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Seta para baixo");
    expect(icon);
  });
});
