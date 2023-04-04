import { render } from "@testing-library/react";
import React from "react";

import AutoCompleteInput from "./AutoCompleteInput";

const createSut = () => {
  const renderComp = () =>
    render(
      <AutoCompleteInput
        theme="light"
        citiesData={[{ PR: [] }]}
        getFilterPlacesRequest={jest.fn()}
        secondary
        uf="uf"
        defaultValue="municipioCTE"
        label="Cidade"
        onChangeValue={jest.fn()}
      />,
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
