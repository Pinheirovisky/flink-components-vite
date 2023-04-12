import { render, screen } from "@testing-library/react";
import React from "react";

import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconCheck from "./IconCheck";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconCheck theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconCheck test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconCheck: ", () => {
    const title = "Confirmado!";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Confirmado!");
    expect(icon);
  });
});
