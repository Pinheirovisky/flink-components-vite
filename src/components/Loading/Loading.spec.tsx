import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Loading from "./Loading";

const createSut = () => {
  const renderComp = () => render(<Loading theme="light" />);

  return { renderComp };
};

describe("Loading test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the loading: ", () => {
    const { renderComp } = createSut();

    renderComp();

    const loadingComponent = screen.getByTestId("loading-component");
    expect(loadingComponent).toBeInTheDocument();
    expect(loadingComponent).toHaveStyle({ background: "transparent" });
  });
});
