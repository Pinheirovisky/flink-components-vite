import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconTriangle from "./IconTriangle";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconTriangle theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconTriangle test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconTriangle: ", () => {
    const title = "Selecione";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Selecione");
    expect(icon);
  });
});
