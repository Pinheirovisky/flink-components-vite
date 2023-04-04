import { CommercialPortfolioTable } from "store/ducks/commercialPortfolio/types";
import { CommodityTable } from "store/ducks/commodity/types";
import { MaintainServicesTable } from "store/ducks/maintainServices/types";
import { MicroregionTable } from "store/ducks/microregion/types";
import { NatureOfOperation } from "store/ducks/natureOfOperation/types";
import { PaymentConditions } from "store/ducks/paymentConditions/types";
import { Places } from "store/ducks/places/types";
import { ProductsTable } from "store/ducks/products/types";
import { RailSiteTable } from "store/ducks/railSite/types";
import { RailwayComplementTable } from "store/ducks/railwayComplement/types";
import {
  GetListResponse,
  GetListResponseConditionPayments,
  GetListResponseNatureOfOperation,
} from "store/ducks/sharedProtocols";

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
  | GetListResponse<Places>
  | GetListResponse<ProductsTable>
  | GetListResponse<RailSiteTable>
  | GetListResponse<RailwayComplementTable>
  | GetListResponse<MaintainServicesTable>
  | GetListResponse<CommodityTable>
  | null;

export type DataNoPaginationProps =
  | GetListResponseConditionPayments<PaymentConditions>
  | GetListResponseNatureOfOperation<NatureOfOperation>
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
