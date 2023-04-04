import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconInfo from "./IconInfo";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconInfo title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconInfo test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconInfo: ", () => {
    const title = "Informação";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Informação");
    expect(icon);
  });
});
