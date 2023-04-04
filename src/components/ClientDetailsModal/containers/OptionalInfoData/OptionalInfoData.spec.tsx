import "@testing-library/jest-dom";

import { mockCustomer } from "@mocks";
import { Customers } from "@protocols/customers";
import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
import { ThemeProvider } from "styled-components";

import OptionalInfoData from "./OptionalInfoData";

const createSut = (customerData: Customers) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <OptionalInfoData customerData={customerData} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("OptionalInfoData test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render some optional info data from Customer: ", () => {
    const { renderComp } = createSut(mockCustomer);

    renderComp();

    const faturaIDI = screen.getByText("EDI de Fatura*");
    const impressaoDact = screen.getByText("Impressão de Dact-e*");
    const contribuinte = screen.getByText("Contribuinte*");

    expect(faturaIDI).toBeInTheDocument();
    expect(impressaoDact).toBeInTheDocument();
    expect(contribuinte).toBeInTheDocument();
  });
});
