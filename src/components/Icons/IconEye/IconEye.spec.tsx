import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconEye from "./IconEye";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconEye theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconEye test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconEye: ", () => {
    const title = "Visualizar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Visualizar");
    expect(icon);
  });
});
