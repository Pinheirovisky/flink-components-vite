import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import { Button } from "./index";

const createSut = (
  type: "button" | "submit",
  children: string | React.ReactNode,
  size: "small" | "medium" | "big" | "full",
  callbackFunc: () => void,
) => {
  const renderComp = () =>
    render(
      <Button theme="light" type={type} size={size} callbackFunc={callbackFunc}>
        {children}
      </Button>,
    );

  return { renderComp };
};

describe("Button test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render a button, and exec a function when clicks: ", () => {
    const type = "button";
    const children = "Enviar";
    const size = "small";
    const consoleSpy = jest.fn();
    const { renderComp } = createSut(type, children, size, consoleSpy);

    renderComp();

    fireEvent.click(screen.getByRole("button", { name: children }));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
