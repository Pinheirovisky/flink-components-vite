import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconConfig from "./IconConfig";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconConfig title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconConfig test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconConfig: ", () => {
    const title = "Configuração";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Configuração");
    expect(icon);
  });
});
