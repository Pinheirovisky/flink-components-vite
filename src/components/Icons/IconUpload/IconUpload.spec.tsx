import { render, screen } from "@testing-library/react";
import React from "react";

import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconUpload from "./IconUpload";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconUpload title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconUpload test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconUpload: ", () => {
    const title = "Baixar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Baixar");
    expect(icon);
  });
});
