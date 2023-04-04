import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconCheckFilled from "./IconCheckFilled";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconCheckFilled title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconCheckFilled test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconCheckFilled: ", () => {
    const title = "Confirmar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Confirmar");
    expect(icon);
  });
});
