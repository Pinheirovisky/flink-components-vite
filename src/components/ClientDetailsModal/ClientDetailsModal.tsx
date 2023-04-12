import React, { useEffect, useState } from "react";

import { ThemeMiddleware } from "middlewares";

import { Customers } from "protocols/customers";

import { Loading, Modal } from "components";
import { IconNext } from "components/Icons";

import Wrapper, {
  Content,
  Footer,
  List,
  ListGroups,
} from "./ClientDetailsModal.styles";
import {
  EmailsData,
  OptionalInfoData,
  OptionalReportsData,
  RegistrationData,
} from "./containers";

export interface ClientDetailsModalProps {
  onClose: () => void;
  id: string;
  modalLoading: boolean;
  searchedItem: Customers;
  getCustomersItemRequest: (id: string) => void;
  theme: "light" | "dark";
}

const ClientDetailsModal: React.FC<ClientDetailsModalProps> = ({
  onClose,
  id,
  modalLoading,
  searchedItem,
  getCustomersItemRequest,
  theme,
}: ClientDetailsModalProps) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  useEffect(() => {
    if (!searchedItem || (searchedItem && String(searchedItem.id) !== id)) {
      getCustomersItemRequest(id);
    }
  }, []);

  const handleBackButton = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  const handleNextButton = () => {
    if (currentTab < 3) {
      setCurrentTab(currentTab + 1);
    }
  };

  return (
    <ThemeMiddleware theme={theme}>
      <Modal onClose={onClose} theme="light">
        <Wrapper>
          <h3>Detalhes do cliente</h3>
          <Content>
            {modalLoading && <Loading theme="light" />}
            {currentTab === 0 && searchedItem && !modalLoading && (
              <>
                <h4>Dados Cadastrais</h4>
                <List>
                  <RegistrationData customerData={searchedItem} />
                </List>
              </>
            )}
            {currentTab === 1 && searchedItem && !modalLoading && (
              <>
                <h4>Emails</h4>
                <ListGroups>
                  <EmailsData customerData={searchedItem} />
                </ListGroups>
              </>
            )}
            {currentTab === 2 && searchedItem && !modalLoading && (
              <>
                <h4>Relatórios Opcionais</h4>
                <List>
                  <OptionalReportsData customerData={searchedItem} />
                </List>
              </>
            )}
            {currentTab === 3 && searchedItem && !modalLoading && (
              <>
                <h4>Informações Opcionais</h4>
                <List>
                  <OptionalInfoData customerData={searchedItem} />
                </List>
              </>
            )}
            <Footer>
              <button
                className={currentTab === 0 ? "inactive" : ""}
                type="button"
                onClick={handleBackButton}
              >
                ANTERIOR
                <IconNext theme={theme} title="Anterior" />
              </button>
              <button
                className={currentTab === 3 ? "inactive" : ""}
                onClick={handleNextButton}
                type="button"
              >
                <IconNext theme={theme} title="Próximo" /> PRÓXIMO
              </button>
            </Footer>
          </Content>
        </Wrapper>
      </Modal>
    </ThemeMiddleware>
  );
};

export default ClientDetailsModal;
