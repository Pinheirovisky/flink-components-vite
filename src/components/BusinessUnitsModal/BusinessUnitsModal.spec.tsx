import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";

import { Router } from "react-router";

import { createMemoryHistory } from "history";
import { mockCommercialPortfolio } from "mocks";

import { BusinessUnitsModal } from "./index";

const createSut = (onClose: () => void) => {
  const history = createMemoryHistory();
  const renderComp = () =>
    render(
      <Router history={history}>
        <BusinessUnitsModal
          theme="light"
          getItemCommercialPortfolioRequest={jest.fn}
          modalLoading={false}
          searchedItem={mockCommercialPortfolio}
          onClose={onClose}
          id="0"
        />
      </Router>,
    );

  return { renderComp };
};

describe("BusinessUnitsModal test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the correct title: ", () => {
    const mockCloseFunction = jest.fn();
    const { renderComp } = createSut(mockCloseFunction);

    renderComp();

    const title = screen.getByText("Unidades de Negócio");
    expect(title).toBeInTheDocument();
  });

  it("should exec close function when press on button: ", () => {
    const mockCloseFunction = jest.fn();

    const { renderComp } = createSut(mockCloseFunction);

    renderComp();

    const button = screen.getByRole("button", { name: "fechar" });
    fireEvent.click(button);
    expect(mockCloseFunction).toBeCalled();
  });
});
