import { buildValidQueryParam, getReadableItem } from ".";

describe("strings test: ", () => {
  it("should return a readble value: ", () => {
    const value = "fatorConversao";

    const newValue = getReadableItem(value);

    expect(newValue).toBe("Fator de Conversão");
  });

  it("should build a valid query parameter", () => {
    const query = "%27ATIVO%27&tipoMicrorregiao.codigo==%27FATURAMENTO%27";
    const validQuery = "%27S%27;tipoMicrorregiao.codigo====%27F%27";

    expect(buildValidQueryParam(query)).toBe(validQuery);
  });
});
