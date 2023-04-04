import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconChevronFilled from "./IconChevronFilled";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconChevronFilled theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconChevronFilled test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconChevronFilled: ", () => {
    const title = "Ler";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Ler");
    expect(icon);
  });
});
