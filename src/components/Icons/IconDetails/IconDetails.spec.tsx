import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconDetails from "./IconDetails";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconDetails theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconDetails test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconDetails: ", () => {
    const title = "Selecione";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Selecione");
    expect(icon);
  });
});
