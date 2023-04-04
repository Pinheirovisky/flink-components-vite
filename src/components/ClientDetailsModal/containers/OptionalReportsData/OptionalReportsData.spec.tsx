import "@testing-library/jest-dom";

import { mockCustomer } from "@mocks";
import { Customers } from "@protocols/customers";
import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
import { ThemeProvider } from "styled-components";

import OptionalReportsData from "./OptionalReportsData";

const createSut = (customerData: Customers) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <OptionalReportsData customerData={customerData} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("OptionalReportsData test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render some optional reports data from Customer: ", () => {
    const { renderComp } = createSut(mockCustomer);

    renderComp();

    const faturaVagao = screen.getByText("Fatura Vagão*");
    const cancelamento = screen.getByText("Cancelamento");

    expect(faturaVagao).toBeInTheDocument();
    expect(cancelamento).toBeInTheDocument();
  });
});
