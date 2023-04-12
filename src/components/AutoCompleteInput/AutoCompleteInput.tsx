import React, { useCallback, useEffect, useMemo, useState } from "react";

import { TextField } from "@mui/material";
import _ from "lodash";
import { ThemeMiddleware } from "middlewares";
import { getCookie } from "utils";

import { Places, PlacesByUF } from "protocols/places";

import Wrapper from "./AutoCompleteInput.styles";

export interface AutoCompleteInputProps {
  defaultValue: string;
  label?: string;
  onChangeValue: (value: string | number) => void;
  secondary?: boolean;
  uf: string;
  uiClasses?: string;
  getFilterPlacesRequest: (query: string) => void;
  citiesData: PlacesByUF[];
  theme: "light" | "dark";
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  defaultValue,
  label = "",
  onChangeValue,
  secondary = false,
  uf,
  uiClasses = "",
  getFilterPlacesRequest,
  citiesData,
  theme,
}: AutoCompleteInputProps) => {
  const cookie = useMemo(() => getCookie("vli-compact-table"), []);

  const [searchText, setSearchText] = useState(defaultValue);
  const [, setSearchQuery] = useState<any>({});
  const [options, setOptions] = useState([""]);

  const searchRequest = useCallback(
    (value: string) => {
      getFilterPlacesRequest(
        `unidadeFederacao.sigla=="${uf}";nome=="${value}*"&sort=nome`,
      );
    },
    [uf],
  );

  useEffect(() => {
    if (citiesData) {
      const anyCitiesData: any = citiesData;
      if (anyCitiesData[uf]?.content) {
        setOptions(
          Object.values(anyCitiesData[uf].content).map((item: any) => {
            const cityPlace: Places = item;
            return cityPlace.nome.trim();
          }),
        );
      }
    }
  }, [citiesData]);

  //? Debounce to just send req when user stop typing:
  useEffect(() => {
    const slug = searchText;
    const search = _.debounce(searchRequest, 1500);

    setSearchQuery((prevSearch: any) => {
      if (prevSearch?.cancel) prevSearch.cancel();
      return search;
    });

    if (searchText) search(slug);
  }, [searchText]);

  // ? If it wasnt secondary, need to make a request (it means that the user is in the table page):
  const handleOnClose = () => {
    if (!secondary) {
      getFilterPlacesRequest(`unidadeFederacao.sigla=="${uf}"&sort=nome`);
    }
  };

  const cssClassList = `${uiClasses} ${secondary ? "secondary" : ""}`;

  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper
        className={cssClassList}
        value={defaultValue}
        options={options}
        onClose={() => handleOnClose()}
        onInputChange={(e: any) => setSearchText(e?.target?.value)}
        isOptionEqualToValue={(option, value) => option === value}
        renderInput={(params) => (
          <TextField label={label} {...params} variant="outlined" />
        )}
        iscompact={String(cookie)}
        onBlur={(e: React.FocusEvent<HTMLInputElement, Element>) =>
          onChangeValue(e.target.value)
        }
      />
    </ThemeMiddleware>
  );
};

export default AutoCompleteInput;
