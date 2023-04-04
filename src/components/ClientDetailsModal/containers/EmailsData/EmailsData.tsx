import {
  Fieldname,
  Fieldvalue,
  Item,
  ItemGroup,
} from "@components/ClientDetailsModal/ClientDetailsModal.styles";
import { Customers } from "@protocols/customers";
import { getReadableItem } from "@utils";
import React from "react";

interface EmailsDataProps {
  customerData: Customers;
}

const EmailsData: React.FC<EmailsDataProps> = ({
  customerData,
}: EmailsDataProps) => {
  return (
    <>
      {customerData.emails && customerData.emails.length > 0
        ? customerData.emails.map((item, key) => (
            <ItemGroup key={`phone-${key}`}>
              <Item>
                <Fieldname>Endereço</Fieldname>
                <Fieldvalue>
                  {item.endereco
                    .split(";")
                    .map((email, idx) => (
                      <li key={`email-${idx}`}>{email}</li>
                    )) || "-"}
                </Fieldvalue>
              </Item>
              <Item>
                <Fieldname>Descrição</Fieldname>
                <Fieldvalue>{item.tipoEmail?.descricao || "-"}</Fieldvalue>
              </Item>
              <Item>
                <Fieldname>Enviar E-mail?</Fieldname>
                <Fieldvalue>{getReadableItem(item.enviarEmail)}</Fieldvalue>
              </Item>
              <Item>
                <Fieldname>Ativo</Fieldname>
                <Fieldvalue>{getReadableItem(item.ativo)}</Fieldvalue>
              </Item>
            </ItemGroup>
          ))
        : "Nenhum e-mail registrado"}
    </>
  );
};

export default EmailsData;
