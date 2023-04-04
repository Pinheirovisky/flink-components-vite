import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconPlusRounded from "./IconPlusRounded";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconPlusRounded theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconPlusRounded test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconPlusRounded: ", () => {
    const title = "Adicionar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Adicionar");
    expect(icon);
  });
});
