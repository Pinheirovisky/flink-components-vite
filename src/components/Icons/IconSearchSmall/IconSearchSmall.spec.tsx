import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconSearchSmall from "./IconSearchSmall";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconSearchSmall theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconSearchSmall test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconSearchSmall: ", () => {
    const title = "Pesquisar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Pesquisar");
    expect(icon);
  });
});
