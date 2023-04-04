import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";

import { ComplementFieldType } from "protocols/table";

import { AddToList } from "./index";

const createSUT = (mockFunction: () => void) => {
  const testData = [
    { value: "1", label: "tipo 1" },
    { value: "2", label: "tipo 2" },
    { value: "3", label: "tipo 3" },
  ];

  const testUserData = [{ value: "4", label: "tipo A" }];

  const testValidationMsg = "This is a test.";

  const renderComp = () =>
    render(
      <AddToList
        theme="light"
        data={testData}
        userData={testUserData}
        setUserData={mockFunction}
        validationMsg={testValidationMsg}
      />,
    );

  return { renderComp };
};

describe("AddToList test", () => {
  afterEach(() => jest.clearAllMocks());

  it("sould render the userData list", () => {
    const consoleSpy = jest.fn();

    const { renderComp } = createSUT(consoleSpy);
    renderComp();

    const listItem = screen.getByTestId("list-item-0");
    expect(listItem).toBeInTheDocument();
  });

  it("should open the options menu when clicked", () => {
    const consoleSpy = jest.fn();

    const { renderComp } = createSUT(consoleSpy);
    renderComp();

    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);

    const optionsMenu = screen.getByTestId("options-menu");
    expect(optionsMenu).toBeInTheDocument();
  });

  it("should add an item to userData list", () => {
    const consoleSpy = jest.fn();

    const { renderComp } = createSUT(consoleSpy);
    renderComp();

    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);

    const optionButton = screen.getByTestId("option-button-0");
    fireEvent.click(optionButton);

    expect(consoleSpy).toHaveBeenCalled();
  });

  it("should remove an item from userData list", () => {
    const consoleSpy = jest.fn();

    const { renderComp } = createSUT(consoleSpy);
    renderComp();

    const removeButton = screen.getByTestId("remove-button-0");
    fireEvent.click(removeButton);

    expect(consoleSpy).toHaveBeenCalled();
  });

  it("sould render an error message", () => {
    const consoleSpy = jest.fn();

    const { renderComp } = createSUT(consoleSpy);
    renderComp();

    const errorMessage = screen.getByText("This is a test.");
    expect(errorMessage).toBeInTheDocument();
  });
});
