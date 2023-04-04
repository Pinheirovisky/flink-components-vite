import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconSearchOff from "./IconSearchOff";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconSearchOff title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconSearchOff test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconSearchOff: ", () => {
    const title = "Não foi encontrado";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Não foi encontrado");
    expect(icon);
  });
});
