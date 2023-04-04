import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconDownload from "./IconDownload";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconDownload title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconDownload test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconDownload: ", () => {
    const title = "Baixar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Baixar");
    expect(icon);
  });
});
