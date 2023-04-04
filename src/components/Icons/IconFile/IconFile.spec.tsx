import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconFile from "./IconFile";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconFile theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconFile test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconFile: ", () => {
    const title = "Arquivo";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Arquivo");
    expect(icon);
  });
});
