import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Pagination from "./Pagination";

const createSut = (currentPage: number, total: number) => {
  const renderComp = () =>
    render(
      <Pagination
        theme="light"
        currentPage={currentPage}
        total={total}
        clearData={() => ""}
      />,
    );

  return { renderComp };
};

describe("Pagination test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should block values greater than the total and less than the minimum:", () => {
    const currentPage = 1;
    const total = 3;
    const { renderComp } = createSut(currentPage, total);

    renderComp();

    const firstButton = screen.getByTestId("pagination-first-button");
    const backButton = screen.getByTestId("pagination-back-button");
    const fowardButton = screen.getByTestId("pagination-foward-button");
    const lastButton = screen.getByTestId("pagination-last-button");
    const input = screen.getByTestId("pagination-input") as HTMLInputElement;

    fireEvent.click(backButton);

    expect(input.value).toBe(currentPage.toString());

    fireEvent.click(fowardButton);

    expect(input.value).toBe((currentPage + 1).toString());

    fireEvent.click(lastButton);

    expect(input.value).toBe(total.toString());

    fireEvent.click(firstButton);

    expect(input.value).toBe(currentPage.toString());
  });
});
