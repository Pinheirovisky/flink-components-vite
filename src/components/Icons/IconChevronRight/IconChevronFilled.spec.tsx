import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { darkMain } from "themes/main";

import IconChevronRight from "./IconChevronRight";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={darkMain}>
        <IconChevronRight title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconChevronRight test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconChevronRight: ", () => {
    const title = "chevron";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("chevron");
    expect(icon);
  });
});
