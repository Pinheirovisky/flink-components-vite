/* eslint-disable @typescript-eslint/no-unused-vars */
import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { mockCustomer } from "mocks";

import { ClientDetailsModal } from "./index";

const createSut = (onClose: () => void, id: string) => {
  const renderComp = () =>
    render(
      <ClientDetailsModal
        getCustomersItemRequest={jest.fn}
        modalLoading={false}
        searchedItem={mockCustomer}
        theme="light"
        id={id}
        onClose={onClose}
      />,
    );

  return { renderComp };
};

describe("ClientDetailsModal test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the correct title: ", () => {
    const mockCloseFunction = jest.fn();
    const id = "MIL";
    const { renderComp } = createSut(mockCloseFunction, id);

    renderComp();

    const title = screen.getByText("Detalhes do cliente");
    expect(title).toBeInTheDocument();
  });

  it("should exec close function when press on button: ", () => {
    const mockCloseFunction = jest.fn();
    const id = "MIL";

    const { renderComp } = createSut(mockCloseFunction, id);

    renderComp();

    const button = screen.getByRole("button", { name: "fechar" });
    fireEvent.click(button);
    expect(mockCloseFunction).toBeCalled();
  });
});
