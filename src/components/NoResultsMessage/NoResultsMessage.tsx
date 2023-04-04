import { IconNoResults } from "@components/Icons";
import { ThemeMiddleware } from "@middlewares";
import React from "react";

import {
  ImageHolder,
  Subtitle,
  Title,
  Wrapper,
} from "./NoResultsMessage.styles";

export interface Props {
  uiClasses?: string;
  isComponentSearch?: boolean;
  theme: "light" | "dark";
}

const NoResultsMessage: React.FC<Props> = ({
  uiClasses = "",
  isComponentSearch,
  theme,
}: Props) => {
  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper className={uiClasses} data-testid="no-result-test">
        <ImageHolder>
          <IconNoResults />
        </ImageHolder>
        <Title isComponentSearch={isComponentSearch}>
          Nenhum resultado encontrado
        </Title>
        <Subtitle isComponentSearch={isComponentSearch}>
          Não conseguimos encontrar o que foi pedido. Por favor, realize uma
          nova busca
        </Subtitle>
      </Wrapper>
    </ThemeMiddleware>
  );
};

export default NoResultsMessage;
