import {
  Fieldname,
  Fieldvalue,
  Item,
} from "@components/ClientDetailsModal/ClientDetailsModal.styles";
import { Customers } from "@protocols/customers";
// Utils:
import { getReadableItem } from "@utils";
import React from "react";
interface OptionalReportsDataProps {
  customerData: Customers;
}

const OptionalReportsData: React.FC<OptionalReportsDataProps> = ({
  customerData,
}: OptionalReportsDataProps) => {
  return (
    <>
      <Item>
        <Fieldname>Fatura Vagão*</Fieldname>
        <Fieldvalue>
          {getReadableItem(customerData.relatorioFaturaVagao) || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Cancelamento</Fieldname>
        <Fieldvalue>
          {getReadableItem(customerData.relatorioCancelamentoFaturas) || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>XML*</Fieldname>
        <Fieldvalue>
          {getReadableItem(customerData.relatorioXml) || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Dact-e*</Fieldname>
        <Fieldvalue>
          {getReadableItem(customerData.relatorioDacte) || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Demonstrativo de Fatura Cliente</Fieldname>
        <Fieldvalue>
          {getReadableItem(customerData.relatorioDemonstrativoFaturaCliente) ||
            "-"}
        </Fieldvalue>
      </Item>
    </>
  );
};

export default OptionalReportsData;
