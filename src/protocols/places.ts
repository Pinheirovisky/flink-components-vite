import { GetListResponse } from "./sharedProtocols";

export interface PlacesByUF {
  [uf: string]: GetListResponse<Places> | [];
}

export interface Places {
  id: number;
  nome: string;
  unidadeFederacao: {
    id: string;
    sigla: string;
  };
  ativo: "S" | "N";
  microrregioes: {
    id: number;
    descricao: string;
    tipoMicrorregiao: {
      codigo: string;
      descricao: string;
    };
  }[];
}

export interface CitiesProps {
  id: string;
  nome: string;
}
