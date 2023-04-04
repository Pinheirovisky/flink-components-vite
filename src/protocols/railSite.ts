import { DefaultTableData } from "./sharedProtocols";

export interface RailSite {
  id: number;
  codigo: string;
  descricao: string;
  ferroviaoperadora: string;
  ferroviaconcessionaria: string;
  uf: string;
  municipionome: string;
  ibge: string;
}

export type RailSiteTable = DefaultTableData &
  Omit<RailSite, "descricao" | "codigo"> & {
    codLocal: string;
    descricao_medium_size: string;
  };
