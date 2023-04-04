import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconEllipsis from "./IconEllipsis";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconEllipsis title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconEllipsis test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconEllipsis: ", () => {
    const title = "Mais...";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Mais...");
    expect(icon);
  });
});
