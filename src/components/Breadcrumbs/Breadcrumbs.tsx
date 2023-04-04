import React from "react";
import { Link, Router } from "react-router-dom";

import { createMemoryHistory } from "history";
import { ThemeMiddleware } from "middlewares";

import { IconChevronFilled } from "components/Icons";

import { Wrapper, BreadcrumbItem } from "./Breadcrumbs.styles";

export interface Props {
  paths: { label: string; url?: string }[];
  uiClasses?: string;
  theme: "light" | "dark";
}

const Breadcrumbs: React.FC<Props> = ({
  paths,
  uiClasses = "",
  theme,
}: Props) => {
  const isCurrentTheme = theme === "light" ? "#596073" : "#FFF";

  const history = createMemoryHistory();

  return (
    <Router history={history}>
      <ThemeMiddleware theme={theme}>
        <Wrapper data-testid="breadcrumbs-component" className={uiClasses}>
          <BreadcrumbItem>
            <button onClick={() => (window.location.href = "/")}>
              <p>Página inicial</p>
            </button>
            <IconChevronFilled theme={theme} color={isCurrentTheme} />
          </BreadcrumbItem>
          {paths.map((path, key) => (
            <BreadcrumbItem key={`breadcrumb-item-${path.label}`}>
              <button onClick={() => (window.location.href = "/")}>
                <p>{path.label}</p>
              </button>
              {key + 1 !== paths.length && (
                <IconChevronFilled theme={theme} color={isCurrentTheme} />
              )}
            </BreadcrumbItem>
          ))}
          {/* {paths.map((path, key) =>
            path.url ? (
              <BreadcrumbItem key={`breadcrumb-item-${path.label}`}>
                <Link to={path.url}>{path.label}</Link>
                {key + 1 !== paths.length && (
                  <IconChevronFilled theme={theme} color={isCurrentTheme} />
                )}
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={`breadcrumb-item-${path.label}`}>
                <small>{path.label}</small>
                {key + 1 !== paths.length && (
                  <IconChevronFilled theme={theme} color={isCurrentTheme} />
                )}
              </BreadcrumbItem>
            ),
          )} */}
        </Wrapper>
      </ThemeMiddleware>
    </Router>
  );
};

export default Breadcrumbs;
