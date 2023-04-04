import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import Modal from "./Modal";

const createSut = (children: string, onClose: () => void) => {
  const renderComp = () =>
    render(
      <Modal theme="light" onClose={onClose}>
        {children}
      </Modal>,
    );

  return { renderComp };
};

describe("Modal test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should exec close function when press on button: ", () => {
    const mockCloseFunction = jest.fn();
    const title = "Modal Test";
    const { renderComp } = createSut(title, mockCloseFunction);

    renderComp();

    const button = screen.getByRole("button", { name: "fechar" });
    fireEvent.click(button);
    expect(mockCloseFunction).toBeCalled();
  });
});
