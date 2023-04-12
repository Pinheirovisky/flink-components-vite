import { render, screen } from "@testing-library/react";
import React from "react";

import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconTrashNotification from "./IconTrashNotification";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconTrashNotification theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconTrashNotification test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconTrashNotification: ", () => {
    const title = "Remover";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Remover");
    expect(icon);
  });
});
