import { DefaultTableData } from "./sharedProtocols";

export interface RailwayComplement {
  id: string;
  nome: string;
  sigla: string;
  codFerroviaPartilha: string;
}

export type RailwayComplementTable = RailwayComplement & DefaultTableData;
