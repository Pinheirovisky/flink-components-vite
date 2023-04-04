import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconTrash from "./IconTrash";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconTrash theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconTrash test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconTrash: ", () => {
    const title = "Apagar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Apagar");
    expect(icon);
  });
});
