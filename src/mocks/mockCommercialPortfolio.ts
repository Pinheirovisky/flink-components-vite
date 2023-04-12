import { CommercialPortfolioSearchedItem } from "protocols/commercialPortfolio";

const mockCommercialPortfolio: CommercialPortfolioSearchedItem = {
  id: 17,
  descricao: "CARTEIRA TESTE 2",
  responsavel: {
    id: "48",
    codigo: "16100770",
    nome: "GABRIEL GUSTAVO DA SILVA SANTOS",
    ativo: "S",
    email: "_OLD",
  },
  ativo: "S",
  unidadesNegocio: [
    {
      id: 123,
      codigo: "unid",
      descricao: "desc",
      descricaoResumida: "desc resumd",
    },
  ],
};

export { mockCommercialPortfolio };
