import { render, screen } from "@testing-library/react";
import React from "react";
import { Router } from "react-router";

import { createMemoryHistory } from "history";

import { Breadcrumbs } from "./index";

const createSut = (paths: { label: string; url: string }[]) => {
  const history = createMemoryHistory();

  const renderComp = () =>
    render(
      <Router history={history}>
        <Breadcrumbs theme="light" paths={paths} />
      </Router>,
    );

  return { renderComp };
};

describe("Breadcrumbs test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render all Breadcrumbs passed by user: ", () => {
    const paths = [
      { label: "Dashboard", url: "/dashboard" },
      { label: "Cadastro", url: "/dashboard/registrar" },
      { label: "Perfil de Acesso", url: "/dashboard/registrar/perfil" },
    ];
    const { renderComp } = createSut(paths);

    renderComp();

    const component = screen.getByTestId("breadcrumbs-component");
    expect(component.childElementCount).toBe(paths.length + 1);
  });
});
