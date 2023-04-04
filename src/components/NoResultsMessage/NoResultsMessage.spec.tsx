import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import { ThemeProvider } from "styled-components";

import { lightMain } from "../../themes/main";
import NoResultsMessage from "./NoResultsMessage";

const createSut = (isComponentSearch: boolean) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <NoResultsMessage isComponentSearch={isComponentSearch} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("should render component successfully", () => {
  afterEach(() => jest.clearAllMocks());

  const isComponentSearch = true;

  const { renderComp } = createSut(isComponentSearch);

  it("should render component successfully: ", () => {
    renderComp();

    const component = screen.getByTestId("no-result-test");
    expect(component).toBeInTheDocument();
  });
});
