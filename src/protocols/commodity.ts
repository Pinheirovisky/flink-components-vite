import { PackingGroups } from "./packingGroups";
import { DefaultTableData } from "./sharedProtocols";

export interface Commodity {
  id: string;
  descricaoResumida: string;
  descricaoDetalhada: string;
  produto: {
    id: string;
    descricaoResumida: string;
  };
  unidadeMedida: {
    id: number;
    descricao: string;
    fatorConversao: string;
  };
  fatorConversao: number;
  ativo: string;
  inicioVigencia: string;
  fimVigencia: string | null;
  mercadoriaAntt: {
    id: number;
    mercadoriaAntt: string;
  };
  detalhamentoObrigatorio: "S" | "N";
  tiposVagao: TiposVagao[];
  cargaPerigosa?: CargaPerigosa;
}

interface TiposVagao {
  id: number;
  codigo: number;
  descricao: string;
}

interface CargaPerigosa {
  descricaoPericulosidade: string;
  numeroONU: string;
  nomeEmbarque: string;
  classeSubclasseRisco: ClasseRisco[];
  grupoEmbalagem: PackingGroups;
}

interface ClasseRisco {
  ordem: number;
  codigo: string;
  descricao?: string;
}

export type CommodityTable = DefaultTableData &
  Omit<
    Commodity,
    | "id"
    | "produto"
    | "unidadeMedida"
    | "fatorConversao"
    | "mercadoriaAntt"
    | "detalhamentoObrigatorio"
    | "tiposVagao"
    | "cargaPerigosa"
  > & {
    id: string;
    codigoMercadoria: string;
    produto: string;
    unidadeMedida: string;
    fatorDeConversao: number;
  };
