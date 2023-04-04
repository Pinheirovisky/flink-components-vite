import { readbleArray } from "@utils/arrays";

// ? Get key and return a readable item:
const getReadableItem = (value: string): string => {
  const newValue = readbleArray.filter((item) => item.label === value);

  return newValue[0]?.readable || value;
};

// ? Build the valid endpoint to query param:
const buildValidQueryParam = (query: URLSearchParams | string): string => {
  return query
    .toString()
    .replace(/&/g, ";")
    .replace("%27ATIVO%27", "%27S%27")
    .replace("%27INATIVO%27", "%27N%27")
    .replace("%27N%C3%83O%27", "%27N%27")
    .replace("%27SIM%27", "%27S%27")
    .replace("%27NAO%27", "%27N%27")
    .replace("%27INTELIGENCIA+DE+MERCADO%27", "%27I%27")
    .replace("%27FATURAMENTO%27", "%27F%27")
    .replace("%27I%C3%83O%27", "%27I%27")
    .replace("%27F%27", "%27F%27")
    .replace(
      "tipoMicrorregiao.codigo==%27FATURAMENTO%27",
      "tipoMicrorregiao.codigo=='F'",
    )
    .replace(
      "tipoMicrorregiao.codigo==%27INTELIGENCIA+DE+MERCADO%27",
      "tipoMicrorregiao.codigo=='I'",
    )
    .replace(/=/g, "==")
    .replace(/==in/g, "=in")
    .replace("ativo==%27ATIVO%27", "ativo=='S'")
    .replace("ativo==%27INATIVO%27", "ativo=='N'")
    .replace("JOIN_SEARCH==", "")
    .replace("==rg", "=rg")
    .replace("data==all", "");
};

export { buildValidQueryParam, getReadableItem };
