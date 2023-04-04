import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconPencil from "./IconPencil";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconPencil title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconPencil test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconPencil: ", () => {
    const title = "Editar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Editar");
    expect(icon);
  });
});
