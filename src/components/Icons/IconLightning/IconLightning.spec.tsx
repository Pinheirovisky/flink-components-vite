import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconLightning from "./IconLightning";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconLightning title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconLightning test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconLightning: ", () => {
    const title = "Selecione";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Selecione");
    expect(icon);
  });
});
