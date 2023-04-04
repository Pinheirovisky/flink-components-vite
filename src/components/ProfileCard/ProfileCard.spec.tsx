import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { ProfileCard } from "./index";

const createSut = (isOpen: boolean) => {
  const renderComp = () =>
    render(
      <ProfileCard
        name="Dev front-end"
        isOpen={isOpen}
        theme="light"
        logoutUrl=""
      />,
    );

  return { renderComp };
};

describe("ProfileCard test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the component: ", () => {
    const { renderComp } = createSut(true);

    renderComp();

    fireEvent.click(screen.getByText("Sair"));
  });
});
