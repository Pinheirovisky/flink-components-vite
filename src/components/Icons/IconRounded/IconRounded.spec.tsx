import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconRounded from "./IconRounded";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconRounded title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconRounded test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconRounded: ", () => {
    const title = "Selecionar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Selecionar");
    expect(icon);
  });
});
