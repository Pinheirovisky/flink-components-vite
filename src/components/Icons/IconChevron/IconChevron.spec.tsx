import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconChevron from "./IconChevron";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconChevron title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconChevron test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconChevron: ", () => {
    const title = "Abrir";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Abrir");
    expect(icon);
  });
});
