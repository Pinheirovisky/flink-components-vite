export interface CommercialPortfolio {
  id: number;
  descricao: string;
  responsavel: {
    ativo: "S" | "N";
    id: string;
    codigo: string;
    email: string;
    nome: string;
  };
  ativo: string;
}

export type CommercialPortfolioTable = Omit<
  CommercialPortfolio,
  "responsavel" | "ativo"
> & {
  ativo: string;
  responsavel: string;
  responsavelId: string;
};

export interface CommercialPortfolioSearchedItem extends CommercialPortfolio {
  unidadesNegocio: {
    id: number;
    codigo: string;
    descricao: string;
    descricaoResumida: string;
  }[];
}
