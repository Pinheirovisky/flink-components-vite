import {
  Fieldname,
  Fieldvalue,
  Item,
} from "@components/ClientDetailsModal/ClientDetailsModal.styles";
import { Customers } from "@protocols/customers";
import { getReadableItem } from "@utils";
import React from "react";

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
