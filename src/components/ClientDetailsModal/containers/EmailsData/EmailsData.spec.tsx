import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import { mockCustomer } from "mocks";
import { ThemeProvider } from "styled-components";
import { lightMain } from "themes/main";

import { Customers } from "protocols/customers";

import EmailsData from "./EmailsData";

const createSut = (customerData: Customers) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <EmailsData customerData={customerData} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("EmailsData test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render some emails data from Customer: ", () => {
    const { renderComp } = createSut(mockCustomer);

    renderComp();

    const emailOne = screen.getByText(
      mockCustomer.emails[1].endereco.split(";")[0],
    );
    const emailOneType = screen.getByText(
      mockCustomer.emails[1].tipoEmail.descricao,
    );

    expect(emailOne).toBeInTheDocument();
    expect(emailOneType).toBeInTheDocument();
  });
});
