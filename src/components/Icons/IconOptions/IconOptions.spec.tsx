import { render, screen } from "@testing-library/react";
import { darkMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconOptions from "./IconOptions";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={darkMain}>
        <IconOptions title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconOptions test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconOptions: ", () => {
    const title = "Opções";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Opções");
    expect(icon);
  });
});
