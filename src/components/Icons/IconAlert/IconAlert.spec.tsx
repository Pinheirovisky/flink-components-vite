import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
// Theme:
import { ThemeProvider } from "styled-components";

import IconAlert from "./IconAlert";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconAlert title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconAlert test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconAlert: ", () => {
    const title = "Alerta";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Alerta");
    expect(icon);
  });
});
