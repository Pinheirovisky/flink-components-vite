import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconSearch from "./IconSearch";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconSearch theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconSearch test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconSearch: ", () => {
    const title = "Pesquisar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Pesquisar");
    expect(icon);
  });
});
