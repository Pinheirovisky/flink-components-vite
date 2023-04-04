import React, { useEffect, useRef, useState } from "react";

import { ThemeMiddleware } from "middlewares";

import { ComplementFieldType } from "protocols/table";

import { ErrorMessage } from "../ErrorMessage";
import { IconMinus, IconPlusRounded } from "../Icons";
import {
  AddRemoveButton,
  CurrentList,
  Header,
  ItemName,
  ListContainer,
  ListItem,
  OptionButton,
  OptionsContainer,
  OptionsMenu,
  Title,
  Wrapper,
} from "./AddToList.styles";

export interface Props {
  data: ComplementFieldType[];
  errorId?: string;
  onListChange?: (item: string, label: string) => void;
  setUserData: (value: ComplementFieldType[]) => void;
  userData: ComplementFieldType[];
  validationMsg?: string;
  theme: "light" | "dark";
}

const AddToList: React.FC<Props> = ({
  data,
  errorId,
  onListChange,
  setUserData,
  userData,
  validationMsg,
  theme,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const optionsMenuRef: any = useRef(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (!optionsMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const addToList = (index: any) => {
    const workingData = data.filter((line, key) => {
      if (key === index) {
        return line;
      }
    })[0];

    if (!userData.some((element) => element.value === workingData.value)) {
      setUserData([
        ...userData,
        { label: workingData.label, value: workingData.value },
      ]);
    }

    onListChange && onListChange("tiposVagao", "Added");
  };

  const removeFromList = (index: any) => {
    const customFilter = userData?.filter((item) => {
      return item.value !== index;
    });
    setUserData(customFilter);

    if (onListChange && customFilter.length === 0) {
      onListChange("tiposVagao", "");
    }
  };

  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper>
        <ListContainer ref={optionsMenuRef}>
          <Header>
            <Title>Tipo de vagão</Title>
            <AddRemoveButton
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              id="add-button"
              className="add-button"
              data-testid="add-button"
            >
              <IconPlusRounded
                theme={theme}
                borderColor="#0074C0"
                bgColor="#0074C0"
                title="Adicionar"
              />
            </AddRemoveButton>
          </Header>
          {isOpen && (
            <OptionsMenu className="options-menu" data-testid="options-menu">
              <OptionsContainer>
                {data?.map((item, key) => (
                  <OptionButton
                    type="button"
                    key={key}
                    onClick={() => addToList(key)}
                    className={`option-button-${key}`}
                    data-testid={`option-button-${key}`}
                  >
                    <ItemName>{item.label}</ItemName>
                  </OptionButton>
                ))}
              </OptionsContainer>
            </OptionsMenu>
          )}
          <CurrentList className="current-list" data-testid="current-list">
            {userData?.map((item, key) => (
              <ListItem
                key={key}
                className="list-item"
                data-testid={`list-item-${key}`}
              >
                <ItemName>{item.label}</ItemName>
                <AddRemoveButton
                  type="button"
                  onClick={() => removeFromList(item.value)}
                  className="remove-button"
                  data-testid={`remove-button-${key}`}
                >
                  <IconMinus theme={theme} title="Remover" />
                </AddRemoveButton>
              </ListItem>
            ))}
          </CurrentList>
        </ListContainer>
        {validationMsg && (
          <ErrorMessage uiClasses="error-message" id={errorId}>
            {validationMsg}
          </ErrorMessage>
        )}
      </Wrapper>
    </ThemeMiddleware>
  );
};

export default AddToList;
