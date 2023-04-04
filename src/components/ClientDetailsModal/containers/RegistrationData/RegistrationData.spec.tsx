import "@testing-library/jest-dom";

import { mockCustomer } from "@mocks";
import { Customers } from "@protocols/customers";
import { render, screen } from "@testing-library/react";
import { lightMain } from "@themes/main";
import React from "react";
import { ThemeProvider } from "styled-components";

import RegistrationData from "./RegistrationData";

const createSut = (customerData: Customers) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={lightMain}>
        <RegistrationData customerData={customerData} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe("RegistrationData test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render some datas from Customer: ", () => {
    const { renderComp } = createSut(mockCustomer);

    renderComp();

    const razaoSocialValue = screen.getByTestId("razaoSocial");
    const cpfCnpjValue = screen.getByText(mockCustomer.cpfCnpj);
    const bairroValue = screen.getByText(
      !Array.isArray(mockCustomer.endereco)
        ? mockCustomer.endereco?.bairro
        : mockCustomer.endereco[0]?.bairro || "-",
    );

    expect(razaoSocialValue).toBeInTheDocument();
    expect(cpfCnpjValue).toBeInTheDocument();
    expect(bairroValue).toBeInTheDocument();
  });
});
