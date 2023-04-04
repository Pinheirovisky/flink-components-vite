import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { darkMain } from "themes/main";

import IconFilter from "./IconFilter";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={darkMain}>
        <IconFilter title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconFilter test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconFilter: ", () => {
    const title = "Filtro";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Filtro");
    expect(icon);
  });
});
