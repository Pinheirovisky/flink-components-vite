import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconStar from "./IconStar";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconStar theme="light" title={title} active />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconStar test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconStar: ", () => {
    const title = "Preferencial";

    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Preferencial");
    expect(icon);
  });
});
