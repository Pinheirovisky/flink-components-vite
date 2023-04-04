import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconDoor from "./IconDoor";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconDoor title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconDoor test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconDoor: ", () => {
    const title = "Sair";

    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Sair");
    expect(icon);
  });
});
