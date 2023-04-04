import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconHome from "./IconHome";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconHome title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconHome test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconHome: ", () => {
    const title = "Página Inicial";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Página Inicial");
    expect(icon);
  });
});
