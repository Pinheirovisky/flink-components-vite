import { render, screen } from "@testing-library/react";
import React from "react";

import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconWarning from "./IconWarning";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconWarning theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconWarning test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconWarning: ", () => {
    const title = "Atencao";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Atencao");
    expect(icon);
  });
});
