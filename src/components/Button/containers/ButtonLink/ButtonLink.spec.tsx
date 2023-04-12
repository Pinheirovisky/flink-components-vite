import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import ButtonLink from "./ButtonLink";

const createSut = (external: boolean, href: string, children: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <ButtonLink disabled={false} external={external} href={href}>
          {children}
        </ButtonLink>
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("ButtonLink test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render a external button ", () => {
    const external = true;
    const href = "https://github.com/";
    const children = "github";
    const { renderComp } = createSut(external, href, children);

    renderComp();

    const link = screen.getByText(children);

    expect(link).toHaveAttribute("href", href);
  });
});
