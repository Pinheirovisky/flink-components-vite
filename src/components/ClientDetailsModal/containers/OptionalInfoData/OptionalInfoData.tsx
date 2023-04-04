import React from "react";

import { getReadableItem } from "utils";

import { Customers } from "protocols/customers";

import {
  Item,
  Fieldname,
  Fieldvalue,
} from "components/ClientDetailsModal/ClientDetailsModal.styles";

interface OptionalInfoDataProps {
  customerData: Customers;
}

const OptionalInfoData: React.FC<OptionalInfoDataProps> = ({
  customerData,
}: OptionalInfoDataProps) => {
  return (
    <>
      <Item>
        <Fieldname>EDI de Fatura*</Fieldname>
        <Fieldvalue>
          {getReadableItem(customerData.faturaEdi) || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Impressão de Dact-e*</Fieldname>
        <Fieldvalue>
          {getReadableItem(customerData.impressaoRelatorioDacte) || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Contribuinte*</Fieldname>
        <Fieldvalue>
          {getReadableItem(customerData.contribuinte) || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>OTM*</Fieldname>
        <Fieldvalue>
          {getReadableItem(customerData.operadorTransporteMultimodal) || "-"}
        </Fieldvalue>
      </Item>
    </>
  );
};

export default OptionalInfoData;
