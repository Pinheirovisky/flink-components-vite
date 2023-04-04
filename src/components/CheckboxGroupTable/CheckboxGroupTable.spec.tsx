import { mockReferenceValue } from "@mocks";
import { ReferenceValueProps } from "@protocols/referenceValue";
import { render } from "@testing-library/react";
import React from "react";

import { CheckboxGroupTable } from "./index";

const mockCallbackFunc = jest.fn();

const createSut = (data: ReferenceValueProps) => {
  const renderComp = () =>
    render(
      <CheckboxGroupTable
        theme="light"
        data={data}
        callbackFunc={mockCallbackFunc}
      />,
    );

  return { renderComp };
};

describe("CheckboxGroupTable test", () => {
  afterEach(() => jest.clearAllMocks());
  it("should check the value of the id passed:", () => {
    const { renderComp } = createSut(mockReferenceValue);
    renderComp();
    expect(mockReferenceValue).toStrictEqual({
      ferrovia: "ALLP",
      vlReferencia: {
        id: "02",
        valor: "",
      },
    });
  });
});
