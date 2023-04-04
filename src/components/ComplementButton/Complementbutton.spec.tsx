import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import ComplementButton from "./ComplementButton";

const createSut = () => {
  const renderComp = () =>
    render(<ComplementButton theme="light">Teste</ComplementButton>);

  return { renderComp };
};

describe("ComplementButton test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the component: ", () => {
    const { renderComp } = createSut();

    renderComp();

    const component = screen.getByText("Teste");
    expect(component).toBeInTheDocument();
  });
});
