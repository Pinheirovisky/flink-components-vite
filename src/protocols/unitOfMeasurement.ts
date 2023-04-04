import { DefaultTableData } from "./sharedProtocols";

export interface UnitOfMeasurement extends DefaultTableData {
  ativo: string;
  codigo: string;
  descricao: string;
  fatorConversao: string;
  id: number;
}
