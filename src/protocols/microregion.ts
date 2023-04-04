import { DefaultTableData } from "./sharedProtocols";
import { ComplementFieldType } from "./table";

export interface MicroregionTable extends DefaultTableData {
  id: string | number;
  codigo: string;
  unidadeFederacao: string;
  unidadeFederacaoId: string;
  descricao_medium_size_active: string;
  ativo: string;
  municipios: ComplementFieldType[];
  tipoMicroregiao: string;
  tipoMicroregiaoId: string;
}
