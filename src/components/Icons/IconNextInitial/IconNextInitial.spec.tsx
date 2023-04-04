import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconNextInitial from "./IconNextInitial";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconNextInitial theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconNextInitial test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconNextInitial: ", () => {
    const title = "Pular para o início";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Pular para o início");
    expect(icon);
  });
});
