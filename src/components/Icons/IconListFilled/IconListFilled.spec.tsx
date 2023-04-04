import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconListFilled from "./IconListFilled";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconListFilled title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconListFilled test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconListFilled: ", () => {
    const title = "Ver todos";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Ver todos");
    expect(icon);
  });
});
