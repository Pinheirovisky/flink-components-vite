import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";

import { createMemoryHistory } from "history";

import { ProfileCard } from "./index";

const createSut = (isOpen: boolean) => {
  const history = createMemoryHistory();

  const renderComp = () =>
    render(
      <Router history={history}>
        <ProfileCard
          name="Dev front-end"
          isOpen={isOpen}
          theme="light"
          logoutUrl=""
        />
      </Router>,
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
