import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconLogo from "./IconLogo";

const createSut = () => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconLogo theme="light" />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconLogo test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconLogo: ", () => {
    const { renderComp } = createSut();

    renderComp();

    const icon = screen.getByTitle("VLI");
    expect(icon);
  });
});
