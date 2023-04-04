import React, { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";

import classnames from "classnames";
import { useFormik } from "formik";
import { ThemeMiddleware } from "middlewares";
import { buildValidQueryParam } from "utils";
import * as Yup from "yup";

import { IconNextInitial, IconNext, IconListFilled } from "components/Icons";

import Wrapper, { Form } from "./Pagination.styles";

export interface Props {
  changePage?: (page: number, value?: string) => void;
  clearData?: (value?: any[]) => void;
  currentPage: number;
  searchItem?: (endpoint: string) => void;
  seeAllButton?: boolean;
  total: number;
  uiClasses?: string;
  theme: "light" | "dark";
}

const Pagination: React.FC<Props> = ({
  changePage,
  clearData,
  currentPage,
  searchItem,
  seeAllButton = false,
  total,
  uiClasses = "",
  theme,
}: Props) => {
  const { push } = useHistory();

  const initialValues = {
    page: currentPage,
  };

  const urlSearchParams = useMemo(
    () => new URLSearchParams(window.location.search),
    [window.location.search],
  );

  const params = useMemo(
    () => Object.fromEntries(urlSearchParams.entries()),
    [urlSearchParams],
  );

  // ? Change page on URL query param:
  const changeUrlPage = (page: string) => {
    push({
      pathname: location.pathname,
      search:
        "?" +
        new URLSearchParams({
          ...params,
          page,
        }).toString(),
    });
    //? Fix page to pass correct endpoint:
    delete params.page;
    const endpoint = buildValidQueryParam(
      new URLSearchParams({
        ...params,
      }),
    );
    return `${endpoint}&page=${(Number(page) - 1).toString()}`;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      page: Yup.number().required().positive().integer(),
    }),
    onSubmit: async ({ page }) => {
      if (clearData) {
        clearData();
      }

      if (searchItem) {
        // ? Set on URL the params os filter:
        const endpoint = changeUrlPage(page.toString());
        searchItem(endpoint);
      }
    },
  });

  const { setFieldValue, handleSubmit } = formik;

  // ? Handle when change initialPage:
  useEffect(() => {
    setFieldValue("page", currentPage);
  }, [currentPage]);

  const handleOnChange = (value: string, submit?: boolean) => {
    const newValue = Number(value);
    if (newValue >= 0 && newValue <= total) {
      setFieldValue("page", value);
      if (changePage) {
        changePage(Number(value));
      }
      if (newValue && submit) {
        handleSubmit();
      }
    }
  };

  // ? Change page with buttons:
  const handleChangePage = (page: string) => {
    if (!(Number(page) < 1 || Number(page) > total)) {
      handleOnChange(page, true);
      // ? Doesnt change the URL if it has a own changePage:
      if (!changePage) {
        changeUrlPage(page);
      }
    }
  };

  const cssClassList = `pagination-wrapper ${uiClasses}`;

  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper className={cssClassList}>
        <Form className="input-area">
          <input
            type="text"
            name="page"
            max={total}
            min={1}
            inputMode="numeric"
            value={formik.values.page}
            onChange={(e) => handleOnChange(e.target.value)}
            data-testid="pagination-input"
          />
          DE {total}
        </Form>
        <button
          onClick={() => handleChangePage("1")}
          type="button"
          className={classnames("action-area", {
            disabled: Number(formik.values.page) === 1,
          })}
          data-testid="pagination-first-button"
        >
          <IconNextInitial theme={theme} title="Ir para o início" /> INÍCIO
        </button>
        <button
          onClick={() =>
            handleChangePage((Number(formik.values.page) - 1).toString())
          }
          type="button"
          className={classnames("action-area back", {
            disabled: Number(formik.values.page) <= 1,
          })}
          data-testid="pagination-back-button"
        >
          <IconNext theme={theme} title="Anterior" /> ANTERIOR
        </button>
        <button
          onClick={() =>
            handleChangePage((Number(formik.values.page) + 1).toString())
          }
          type="button"
          className={classnames("action-area", {
            disabled: Number(formik.values.page) === total,
          })}
          data-testid="pagination-foward-button"
        >
          <IconNext theme={theme} title="Próximo" /> PRÓXIMO
        </button>
        <button
          onClick={() => handleChangePage(total.toString())}
          type="button"
          className={classnames("action-area back", {
            disabled: Number(formik.values.page) === total,
          })}
          data-testid="pagination-last-button"
        >
          <IconNextInitial theme={theme} title="Ir para o final" /> ÚLTIMO
        </button>

        {seeAllButton && (
          <button className={classnames("action-area back", {})} type="button">
            <IconListFilled title="Ver todos" /> VER TODOS
          </button>
        )}
      </Wrapper>
    </ThemeMiddleware>
  );
};

export default Pagination;
