import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";

import { ErrorMessage } from "./index";

const createSut = (children: string) => {
  const renderComp = () =>
    render(<ErrorMessage theme="light">{children}</ErrorMessage>);

  return { renderComp };
};

describe("ErrorMessage test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the error-message when pass the text: ", () => {
    const children = "Erro ao validar!";
    const { renderComp } = createSut(children);

    renderComp();

    const errorMessage = screen.getByText("Erro ao validar!");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle({ color: lightMain.colors.danger });
  });
});
