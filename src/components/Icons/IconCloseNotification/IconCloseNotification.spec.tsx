import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconCloseNotification from "./IconCloseNotification";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconCloseNotification title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconCloseNotification test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconCloseNotification: ", () => {
    const title = "Fechar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Fechar");
    expect(icon);
  });
});
