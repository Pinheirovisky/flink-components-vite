import { Loading, Modal, Pagination } from "@components";
import { ThemeMiddleware } from "@middlewares";
import { CommercialPortfolioSearchedItem } from "@protocols/commercialPortfolio";
import React, { useEffect, useState } from "react";

import Wrapper, { Content, TableWrapper } from "./BusinessUnitsModal.styles";
import { Tbody } from "./containers";

export interface BusinessUnitsModalProps {
  id: string;
  onClose: () => void;
  uiClasses?: string;
  getItemCommercialPortfolioRequest: (id: string) => void;
  modalLoading: boolean;
  searchedItem: CommercialPortfolioSearchedItem;
  theme: "light" | "dark";
}

const BusinessUnitsModal: React.FC<BusinessUnitsModalProps> = ({
  onClose,
  id,
  uiClasses = "",
  getItemCommercialPortfolioRequest,
  modalLoading,
  searchedItem,
  theme,
}: BusinessUnitsModalProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getItemCommercialPortfolioRequest(id);
  }, []);

  return (
    <ThemeMiddleware theme={theme}>
      <Modal
        theme={theme}
        onClose={onClose}
        uiClasses={uiClasses}
        uiContentClasses="min-modal"
      >
        <Wrapper>
          <h3>Unidades de Negócio</h3>

          {modalLoading && <Loading theme="light" />}

          {searchedItem &&
            !modalLoading &&
            (searchedItem?.unidadesNegocio?.length !== 0 ? (
              <Content>
                <TableWrapper>
                  <Tbody
                    data={searchedItem.unidadesNegocio}
                    currentPage={currentPage}
                  />
                </TableWrapper>

                <Pagination
                  currentPage={currentPage}
                  changePage={setCurrentPage}
                  total={Math.ceil(searchedItem.unidadesNegocio.length / 5)}
                  clearData={() => ""}
                  theme="light"
                />
              </Content>
            ) : (
              <p>
                Carteira comercial não possui Unidades de Negócio adicionados
              </p>
            ))}
        </Wrapper>
      </Modal>
    </ThemeMiddleware>
  );
};

export default BusinessUnitsModal;
