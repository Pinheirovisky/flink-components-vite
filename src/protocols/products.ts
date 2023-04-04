import { Railway } from "./railway";
import { DefaultTableData } from "./sharedProtocols";
import { UnitOfMeasurement } from "./unitOfMeasurement";

interface ReferenceValues {
  id: number;
  descricao: string;
  ferrovia: Railway;
  unidadeMedida: Omit<UnitOfMeasurement, "rowIndex">;
}

export interface Products {
  id: string;
  descricaoResumida: string;
  descricaoDetalhada: string;
  idProdutoAtivo: string;
  ultimaVersaoReferenciaServicoTransportes: ReferenceValues[];
}

export type ProductsTable = DefaultTableData &
  Omit<
    Products,
    "id" | "ultimaVersaoReferenciaServicoTransportes" | "idProdutoAtivo"
  > & {
    id: string;
    ativo: string;
    codigoProduto: string;
  };
