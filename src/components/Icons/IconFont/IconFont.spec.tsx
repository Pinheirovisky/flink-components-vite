import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconFont from "./IconFont";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconFont title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconFont test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconFont: ", () => {
    const title = "Fontes";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Fontes");
    expect(icon);
  });
});
