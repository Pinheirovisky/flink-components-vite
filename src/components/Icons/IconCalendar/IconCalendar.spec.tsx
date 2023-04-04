import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
import { ThemeProvider } from "styled-components";

import IconCalendar from "./IconCalendar";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconCalendar theme="light" title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconCalendar test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconCalendar: ", () => {
    const title = "Agenda";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Agenda");
    expect(icon);
  });
});
