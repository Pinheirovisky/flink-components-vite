import { CommercialPortfolioTable } from "./commercialPortfolio";
import { CommodityTable } from "./commodity";
import { MaintainServicesTable } from "./maintainServices";
import { MicroregionTable } from "./microregion";
import { PaymentConditions } from "./paymentConditions";
import { Places } from "./places";
import { ProductsTable } from "./products";
import { RailSiteTable } from "./railSite";
import { RailwayComplementTable } from "./railwayComplement";
import {
  GetListResponse,
  GetListResponseConditionPayments,
  GetListResponseNatureOfOperation,
} from "./sharedProtocols";

export type ColumnOneProps = "Código" | "Cidade" | "Descrição" | "UF";

export type ColumnTwoProps =
  | "Código IBGE"
  | "Microregiões Vinculadas"
  | "Sigla"
  | "Mercadoria"
  | "Descrição"
  | "Mercadoria"
  | "Nome"
  | "Municipio"
  | "Produto"
  | "Serviço"
  | "Nome Local";

export type ColumnThreeProps = "";

export type DataProps =
  | GetListResponse<CommercialPortfolioTable>
  | GetListResponse<MaintainServicesTable>
  | GetListResponse<MicroregionTable>
  | GetListResponse<PaymentConditions>
  | GetListResponse<Places>
  | GetListResponse<ProductsTable>
  | GetListResponse<RailSiteTable>
  | GetListResponse<RailwayComplementTable>
  | GetListResponse<CommodityTable>
  | null;

export type DataNoPaginationProps =
  | GetListResponseConditionPayments
  | GetListResponseNatureOfOperation
  | null;

export type FieldToGetItProps =
  | "codLocal"
  | "descricao_medium_size"
  | "descricao"
  | "descricaoResumida"
  | "descricaoTipoVagao"
  | "mercadoriaAntt"
  | "nome"
  | "razaoSocial"
  | "sigla"
  | "versoes.descricaoResumida"
  | "descricao_medium_size_active"
  | "Descricao"
  | "Titulo";

export type FieldToSearchProps =
  | "codigo"
  | "descricao"
  | "descricaoResumida"
  | "descricaoTipoVagao"
  | "tipoLocalFerrovia.id"
  | "ferrovia"
  | "mercadoriaAntt"
  | "pesquisar"
  | "razaoSocial"
  | "sigla"
  | "tipoLocalFerrovia.descricao"
  | "tipoLocalFerrovia.id"
  | "unidadeFederacao.sigla"
  | "versoes.descricaoResumida"
  | "ativo"
  | "titulo";

export type FieldToSearchTwoProps =
  | "codigo"
  | "descricao"
  | "ferroviaoperadoraid"
  | "nome"
  | "codLocal"
  | "modalId";

export type FieldToSearchThreeProps = "codigo" | "descricao";
