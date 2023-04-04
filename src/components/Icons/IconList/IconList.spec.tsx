import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconList from "./IconList";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconList theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconList test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconList: ", () => {
    const title = "Listar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Listar");
    expect(icon);
  });
});
