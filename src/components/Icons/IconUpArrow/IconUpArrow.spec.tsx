import { render, screen } from "@testing-library/react";
import React from "react";

import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconUpArrow from "./IconUpArrow";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconUpArrow theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconUpArrow test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconUpArrow: ", () => {
    const title = "Seta para cima";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Seta para cima");
    expect(icon);
  });
});
