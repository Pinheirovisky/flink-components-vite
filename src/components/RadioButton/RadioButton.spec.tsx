import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Router } from "react-router";

import { createMemoryHistory } from "history";

import { RadioButton } from "./index";

const createSut = () => {
  const history = createMemoryHistory();

  const renderComp = () =>
    render(
      <Router history={history}>
        <RadioButton
          id="railway-code"
          name="teste-selector"
          value="railway-code"
          checked={true}
          onChange={jest.fn()}
          theme="dark"
        >
          Teste
        </RadioButton>
      </Router>,
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
