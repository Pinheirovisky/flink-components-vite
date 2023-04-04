import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconClose from "./IconClose";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconClose title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconClose test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconClose: ", () => {
    const title = "Fechar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Fechar");
    expect(icon);
  });
});
