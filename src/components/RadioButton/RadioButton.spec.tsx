import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { RadioButton } from "./index";

const createSut = () => {
  const renderComp = () =>
    render(
      <RadioButton
        id="railway-code"
        name="teste-selector"
        value="railway-code"
        checked={true}
        onChange={jest.fn()}
        theme="dark"
      >
        Teste
      </RadioButton>,
    );

  return { renderComp };
};

describe("RadioButton test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the component: ", () => {
    const { renderComp } = createSut();

    renderComp();

    fireEvent.click(screen.getByText("Teste"));
  });
});
