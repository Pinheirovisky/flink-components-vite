import React from "react";
import { Link } from "react-router-dom";

import { Props } from "components/Button/Button";

type ButtonLinkProps = Pick<
  Props,
  "external" | "href" | "children" | "disabled" | "id"
> & {
  href: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  external,
  href,
  children,
  id,
}: ButtonLinkProps) => {
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" id={id}>
      {children}
    </a>
  ) : (
    <Link to={href} id={id}>
      {children}
    </Link>
  );
};

export default ButtonLink;
