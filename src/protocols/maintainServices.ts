import { DefaultTableData } from "./sharedProtocols";

export interface MaintainServices {
  id: string;
  descricao: string;
  categoriaServico: {
    id: number;
    descricao: string;
  };
  categoriaServicoAntt: {
    id: number;
    descricao: string;
  };
  tipoModal: {
    id: string;
    descricao: string;
  };
  ativo: string;
}

export type MaintainServicesTable = DefaultTableData &
  Omit<
    MaintainServices,
    "categoriaServico" | "categoriaServicoAntt" | "tipoModal"
  > & {
    codigo: string;
    categoriaServico: string;
    categoriaServicoAntt: string;
    tipoModal: string;
  };
