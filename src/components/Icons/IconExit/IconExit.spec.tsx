import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
import { ThemeProvider } from "styled-components";

import IconExit from "./IconExit";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconExit title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconExit test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconExit: ", () => {
    const title = "Sair";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Sair");
    expect(icon);
  });
});
