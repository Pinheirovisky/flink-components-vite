import React from "react";

import { Customers } from "store/ducks/customers/types";

import {
  Fieldname,
  Fieldvalue,
  Item,
} from "components/ClientDetailsModal/ClientDetailsModal.styles";

interface RegistrationDataProps {
  customerData: Customers;
}

const RegistrationData: React.FC<RegistrationDataProps> = ({
  customerData,
}: RegistrationDataProps) => {
  return (
    <>
      <Item>
        <Fieldname>Razão Social</Fieldname>
        <Fieldvalue data-testid="razaoSocial">
          {customerData.razaoSocial || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Nome Fantasia</Fieldname>
        <Fieldvalue>{customerData.razaoSocial || "-"}</Fieldvalue>
      </Item>
      <Item>
        <Fieldname>CNPJ/CPF</Fieldname>
        <Fieldvalue>{customerData.cpfCnpj || "-"}</Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Endereco</Fieldname>
        <Fieldvalue>
          {!Array.isArray(customerData.endereco)
            ? customerData?.endereco?.endereco
            : customerData?.endereco[0]?.endereco || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Bairro</Fieldname>
        <Fieldvalue>
          {!Array.isArray(customerData.endereco)
            ? customerData?.endereco?.bairro
            : customerData?.endereco[0]?.bairro || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Cidade</Fieldname>
        <Fieldvalue>
          {!Array.isArray(customerData.endereco)
            ? customerData?.endereco?.municipio?.nome
            : customerData?.endereco[0]?.municipio?.nome || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>Tipo</Fieldname>
        <Fieldvalue>{customerData?.tipoCliente?.descricao || "-"}</Fieldvalue>
      </Item>
      <Item>
        <Fieldname>CEP</Fieldname>
        <Fieldvalue>
          {!Array.isArray(customerData.endereco)
            ? customerData?.endereco?.cep
            : customerData?.endereco[0]?.cep || "-"}
        </Fieldvalue>
      </Item>
      <Item>
        <Fieldname>I.E.</Fieldname>
        <Fieldvalue>{customerData.inscricaoEstadual || "-"}</Fieldvalue>
      </Item>
      <Item>
        <Fieldname>I.M.</Fieldname>
        <Fieldvalue>{customerData.inscricaoMunicipal || "-"}</Fieldvalue>
      </Item>
    </>
  );
};

export default RegistrationData;
