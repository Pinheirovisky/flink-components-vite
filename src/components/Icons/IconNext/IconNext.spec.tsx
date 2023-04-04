import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconNext from "./IconNext";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconNext theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconNext test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconNext: ", () => {
    const title = "Avançar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Avançar");
    expect(icon);
  });
});
