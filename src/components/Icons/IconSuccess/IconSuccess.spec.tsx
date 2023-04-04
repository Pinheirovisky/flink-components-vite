import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconSuccess from "./IconSuccess";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconSuccess title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconSuccess test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconSuccess: ", () => {
    const title = "Fechar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Fechar");
    expect(icon);
  });
});
