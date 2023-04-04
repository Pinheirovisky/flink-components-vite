import { NatureOfOperation } from "./natureOfOperation";
import { PaymentConditions } from "./paymentConditions";

export interface GetListResponse<T> {
  content: Array<T>;
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface DefaultTableData {
  rowIndex: number;
}

export interface GetListResponseConditionPayments {
  CondicaoPagamento: Array<PaymentConditions>;
}

export interface GetListResponseNatureOfOperation {
  NaturezaOperacao: Array<NatureOfOperation>;
}
