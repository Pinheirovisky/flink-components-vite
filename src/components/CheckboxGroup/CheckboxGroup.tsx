import React, { useCallback, useEffect, useState } from "react";

import { ThemeMiddleware } from "middlewares";
import { decideToIncludeOrDelete } from "utils";

import { IconChevronFilled, IconMinus } from "components/Icons";

import Wrapper, {
  ColumnMap,
  Header,
  Item,
  Main,
  Row,
} from "./CheckboxGroup.styles";

interface CitiesProps {
  id: string;
  nome: string;
}

export interface Props {
  callbackFunc?: (value: string[]) => void;
  citiesData?: CitiesProps[];
  data: CitiesProps;
  uiClasses?: string;
  theme: "light" | "dark";
}

const CheckboxGroup: React.FC<Props> = ({
  data,
  callbackFunc,
  citiesData,
  uiClasses = "",
  theme,
}: Props) => {
  const [selectValues, setSelectValues] = useState<string[]>([]);

  // ? if there are already registered municipalities, it is saved in the state
  const [arrayMap, setArrayMap] = useState<CitiesProps[]>(citiesData || []);

  // ? if there are already registered municipalities, only the id is saved in the state
  const [arrayString, setArrayString] = useState(
    citiesData?.map((city) => {
      return city.id;
    }) || [],
  );

  let newSelectValues: string[];

  useEffect(() => {
    if (citiesData) {
      if (data.id !== "") {
        setArrayString([...selectValues, data.id]);

        newSelectValues = [...selectValues, data.id];
      } else {
        newSelectValues = arrayString;
      }
    } else {
      newSelectValues = decideToIncludeOrDelete(selectValues, data.id);
    }

    setSelectValues(newSelectValues);

    setArrayMap([...arrayMap, data]);

    if (callbackFunc) {
      callbackFunc(newSelectValues);
    }
  }, [data.id]);

  const handleRemoveItem = useCallback(
    (id: string) => {
      const newItems = selectValues.filter((item) => item !== id);
      const newItemsMaps = arrayMap.filter((item) => item.id !== id);

      setSelectValues(newItems);
      setArrayMap(newItemsMaps);

      if (callbackFunc && citiesData) {
        callbackFunc(newItems);
      }
    },
    [arrayMap],
  );

  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper className={uiClasses}>
        {/* //? Column list: */}
        <Header>
          <ColumnMap>
            Cidade
            <IconChevronFilled theme={theme} />
          </ColumnMap>
        </Header>

        {/* //? Rows list: */}
        <Main>
          {arrayMap
            .filter((row) => row.id !== "")
            .map((row, key) => {
              return (
                <Row key={`row-${key}`} htmlFor={key.toString()}>
                  <Item>{row.nome}</Item>
                  <Item>
                    <button
                      onClick={() => handleRemoveItem(row.id)}
                      type="button"
                      id="button-remove"
                    >
                      <IconMinus theme={theme} />
                    </button>
                  </Item>
                </Row>
              );
            })}
        </Main>
      </Wrapper>
    </ThemeMiddleware>
  );
};

export default CheckboxGroup;
