import { render, screen } from "@testing-library/react";
import React from "react";

// Theme:
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import IconDownloadNotification from "./IconDownloadNotification";

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <IconDownloadNotification title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("IconDownloadNotification test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the IconDownloadNotification: ", () => {
    const title = "Baixar";
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle("Baixar");
    expect(icon);
  });
});
