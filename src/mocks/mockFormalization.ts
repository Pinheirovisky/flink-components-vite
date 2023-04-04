// Interface:
import { FormalizationModal } from "store/ducks/formalization/types";
import { GetListResponse } from "store/ducks/sharedProtocols";

const mockFormalization: GetListResponse<FormalizationModal> = {
  content: [
    {
      cliente: "CLIENTE 01",
      nomeFormalizacao: "CONTRATO 01",
      numeroFormalizacao: "4109",
      statusContrato: "PRE-CADASTRO",
    },
  ],
  empty: false,
  first: false,
  last: false,
  number: 1,
  numberOfElements: 1,
  pageable: {
    offset: 0,
    paged: false,
    pageNumber: 1,
    pageSize: 1,
    sort: {
      empty: false,
      sorted: false,
      unsorted: false,
    },
    unpaged: false,
  },
  size: 1,
  sort: {
    empty: false,
    sorted: false,
    unsorted: false,
  },
  totalElements: 1,
  totalPages: 1,
};

export { mockFormalization };
