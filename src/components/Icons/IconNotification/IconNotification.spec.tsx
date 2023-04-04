import { render, screen } from "@testing-library/react";
import React from "react";

import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconNotification from "./IconNotification";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconNotification theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconNotification test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconNotification: ", () => {
    const title = "Notificacao";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Notificacao");
    expect(icon);
  });
});
