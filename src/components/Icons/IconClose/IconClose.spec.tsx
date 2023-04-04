import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconClose from "./IconClose";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconClose theme="light" title={title} />
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
