import { Places } from "./places";

export interface Customers {
  id: number;
  cliente: number;
  origemCliente: number;
  cpfCnpj: string;
  tipoCliente: {
    nome: string;
    descricao: string;
  };
  tipoClienteValue: string;
  numeroUnidadeCNPJ: string;
  digitoVerificador: string;
  inscricaoMunicipal: string | null;
  inscricaoEstadual: string;
  razaoSocial: string;
  relatorioDacte: string;
  impressaoRelatorioDacte: string;
  contribuinte: string;
  operadorTransporteMultimodal: string;
  faturaEdi: string;
  relatorioFaturaVagao: string;
  relatorioCancelamentoFaturas: string;
  relatorioXml: string;
  relatorioDemonstrativoFaturaCliente: string;
  clientePrincipal: string;
  telefones: CustomerPhone[];
  emails: CustomerEmail[];
  endereco: CustomerAddress | CustomerAddress[];
}

export type CustomerEmail = {
  id: number;
  endereco: string;
  tipoEmail: {
    codigo: string;
    nome: string;
    descricao: string;
  };
  enviarEmail: "S" | "N";
  ativo: "S" | "N";
};

export type CustomerPhone = {
  id: number;
  numero: string;
  nomeContato: string;
  ativo: "S" | "N";
};

export type CustomerPlace = Omit<Places, "unidadeFederacao"> & {
  unidadeFederacao: {
    id: string;
    sigla: string;
  };
};

export type CustomerAddress = {
  id: number;
  tipoEndereco: {
    codigo: string;
    nome: string;
    descricao: string;
  };
  municipio: CustomerPlace;
  cep: string;
  bairro: string;
  endereco: string;
  ativo: "S" | "N";
};

export interface ModalCustomers {
  id: string;
  razaoSocial: string;
  cpfCnpj: string;
  endereco?: {
    municipio?: {
      nome: string;
      unidadeFederacao?: {
        sigla: string;
      };
    };
  };
}
