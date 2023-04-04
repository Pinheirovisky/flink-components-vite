import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import { ActionsBar } from "./index";

const createSut = (actions: any[], uiClasses?: string) => {
  const renderComp = () =>
    render(
      <ActionsBar theme="light" actions={actions} uiClasses={uiClasses} />,
    );

  return { renderComp };
};

describe("Actions Bar test", () => {
  afterEach(() => jest.clearAllMocks());

  const actions = [
    {
      label: "Button 1",
      disabled: false,
      action: (): void => {
        console.log("first");
      },
    },
    {
      label: "Button 2",
      disabled: false,
      action: (): void => {
        console.log("second");
      },
    },
  ];

  const uiClasses = "teste";

  const { renderComp } = createSut(actions, uiClasses);

  it("should render the actions bar with two buttons: ", () => {
    renderComp();

    const firstButtonLabel = screen.getByText("Button 1");
    expect(firstButtonLabel).toBeInTheDocument();

    const secondButtonLabel = screen.getByText("Button 2");
    expect(secondButtonLabel).toBeInTheDocument();
  });

  it('actions bar should have a className equals to "test": ', () => {
    renderComp();

    const actionsBar = screen.getByTestId("actions-bar");
    expect(actionsBar).toHaveClass("teste");
  });

  it("buttons should execute a function when clicked: ", () => {
    renderComp();

    const consoleSpy = jest.spyOn(console, "log");

    const firstButton = screen.getByText("Button 1");
    fireEvent.click(firstButton);

    const secondButton = screen.getByText("Button 1");
    fireEvent.click(secondButton);

    expect(consoleSpy).toHaveBeenCalledTimes(2);
  });
});
