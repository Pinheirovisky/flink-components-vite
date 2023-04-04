import { mockCities } from "@mocks";
import { CitiesProps } from "@protocols/places";
import { render } from "@testing-library/react";
import React from "react";

import { CheckboxGroup } from "./index";

const mockCallbackFunc = jest.fn();

const createSut = (data: CitiesProps) => {
  const renderComp = () =>
    render(
      <CheckboxGroup
        theme="light"
        data={data}
        callbackFunc={mockCallbackFunc}
      />,
    );

  return { renderComp };
};

describe("CheckboxGroup test", () => {
  afterEach(() => jest.clearAllMocks());

  it("should check the value of the id passed:", () => {
    const { renderComp } = createSut(mockCities);
    renderComp();
    expect(mockCities).toStrictEqual({
      id: "3543402",
      nome: "RIBEIRAO PRETO",
    });
  });
});
