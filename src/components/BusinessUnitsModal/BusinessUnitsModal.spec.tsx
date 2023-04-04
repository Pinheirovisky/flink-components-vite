import "@testing-library/jest-dom";

import { mockCommercialPortfolio } from "@mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { BusinessUnitsModal } from "./index";

const createSut = (onClose: () => void) => {
  const renderComp = () =>
    render(
      <BusinessUnitsModal
        theme="light"
        getItemCommercialPortfolioRequest={jest.fn}
        modalLoading={false}
        searchedItem={mockCommercialPortfolio}
        onClose={onClose}
        id="0"
      />,
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
