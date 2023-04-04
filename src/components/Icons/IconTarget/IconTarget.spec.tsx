import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconTarget from "./IconTarget";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconTarget title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconTarget test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconTarget: ", () => {
    const title = "Selecione";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Selecione");
    expect(icon);
  });
});
