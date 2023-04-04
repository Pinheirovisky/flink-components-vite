import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

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
      action: jest.fn(),
    },
    {
      label: "Button 2",
      disabled: false,
      action: jest.fn(),
    },
  ];

  const uiClasses = "teste";

  it("should render the actions bar with two buttons: ", () => {
    const { renderComp } = createSut(actions, uiClasses);
    renderComp();

    const firstButtonLabel = screen.getByText("Button 1");
    expect(firstButtonLabel).toBeInTheDocument();

    const secondButtonLabel = screen.getByText("Button 2");
    expect(secondButtonLabel).toBeInTheDocument();
  });

  it('actions bar should have a className equals to "test": ', () => {
    const { renderComp } = createSut(actions, uiClasses);
    renderComp();

    const actionsBar = screen.getByTestId("actions-bar");
    expect(actionsBar).toHaveClass("teste");
  });

  it("buttons should execute a function when clicked: ", () => {
    const mockAction = jest.fn();

    const ownActions = [
      {
        ...actions[0],
        action: mockAction(),
      },
      {
        ...actions[1],
        action: mockAction(),
      },
    ];

    const { renderComp } = createSut(ownActions, uiClasses);
    renderComp();

    const firstButton = screen.getByText("Button 1");
    fireEvent.click(firstButton);

    const secondButton = screen.getByText("Button 1");
    fireEvent.click(secondButton);

    expect(mockAction).toHaveBeenCalledTimes(2);
  });
});
