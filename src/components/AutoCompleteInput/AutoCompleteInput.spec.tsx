import { render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router";

import { createMemoryHistory } from "history";

import AutoCompleteInput from "./AutoCompleteInput";

const createSut = () => {
  const history = createMemoryHistory();

  const renderComp = () =>
    render(
      <Router history={history}>
        <AutoCompleteInput
          theme="light"
          citiesData={[{ PR: [] }]}
          getFilterPlacesRequest={jest.fn()}
          secondary
          uf="uf"
          defaultValue="municipioCTE"
          label="Cidade"
          onChangeValue={jest.fn()}
        />
      </Router>,
    );

  return { renderComp };
};

describe("AutoCompleteInput test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render the component: ", () => {
    const { renderComp } = createSut();

    renderComp();
  });
});
