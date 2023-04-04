import { IconChevronFilled, IconMinus } from "@components/Icons";
import { ThemeMiddleware } from "@middlewares";
import { decideToIncludeOrDelete } from "@utils";
import React, { useCallback, useEffect, useState } from "react";

import Wrapper, {
  ColumnMap,
  Header,
  Item,
  Main,
  Row,
} from "./CheckboxGroupTable.styles";

interface ReferenceValueProps {
  ferrovia: string;
  vlReferencia: {
    id: string;
    valor: string;
  };
}

export interface Props {
  callbackFunc?: (value: string[]) => void;
  data: ReferenceValueProps;
  referenceValueData?: ReferenceValueProps[];
  uiClasses?: string;
  theme: "light" | "dark";
}

const CheckboxGroupTable: React.FC<Props> = ({
  callbackFunc,
  data,
  referenceValueData,
  uiClasses = "",
  theme,
}: Props) => {
  const [selectValues, setSelectValues] = useState<string[]>([]);

  const [arrayMap, setArrayMap] = useState<ReferenceValueProps[]>(
    referenceValueData || [],
  );

  const [arrayString, setArrayString] = useState(
    referenceValueData?.map((value) => {
      return value.vlReferencia.id;
    }) || [],
  );

  let newSelectValues: string[];

  useEffect(() => {
    if (referenceValueData) {
      if (data.vlReferencia.id !== "") {
        setArrayString([...arrayString, data.vlReferencia.id]);

        newSelectValues = [...arrayString, data.vlReferencia.id];
      } else {
        newSelectValues = arrayString;
      }
    } else {
      newSelectValues = decideToIncludeOrDelete(
        selectValues,
        data.vlReferencia.id,
      );
    }

    setSelectValues(newSelectValues);

    setArrayMap([...arrayMap, data]);

    if (callbackFunc) {
      callbackFunc(newSelectValues);
    }
  }, [data.vlReferencia.id]);

  const handleRemoveItem = useCallback(
    (id: string) => {
      const newItems = selectValues.filter((item) => item !== id);
      const newItemsMaps = arrayMap.filter(
        (item) => item.vlReferencia.id !== id,
      );
      const newItemsString = arrayString.filter((item) => item != id);

      setSelectValues(newItems);
      setArrayMap(newItemsMaps);
      setArrayString(newItemsString);

      if (callbackFunc && referenceValueData) {
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
            Ferrovia
            <IconChevronFilled theme={theme} />
          </ColumnMap>
          <ColumnMap>
            Valor de Referência
            <IconChevronFilled theme={theme} />
          </ColumnMap>
          <ColumnMap></ColumnMap>
        </Header>

        {/* //? Rows list: */}
        <Main>
          {arrayMap
            .filter((row) => row.vlReferencia.id !== "")
            .map((row, key) => {
              return (
                <Row key={`row-${key}`} htmlFor={key.toString()}>
                  <Item>{row.ferrovia}</Item>
                  <Item>{row.vlReferencia.valor}</Item>
                  <Item>
                    <button
                      onClick={() => handleRemoveItem(row.vlReferencia.id)}
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

export default CheckboxGroupTable;
