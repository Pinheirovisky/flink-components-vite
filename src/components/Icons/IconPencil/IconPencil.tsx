import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconPencil: React.FC<Props> = ({
  className = "",
  color = "#596073",
  title = "",
}: Props) => (
  <IconWrapper
    className={className}
    fill="none"
    height="20"
    size="great"
    type="small"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== "" && <title>{title}</title>}

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.00671 18.4844C0.856102 18.8863 1.24849 19.2787 1.65037 19.1281L7.40641 16.971L19.4272 4.95021C19.8178 4.55969 19.8178 3.92652 19.4272 3.536L16.5988 0.707571C16.2083 0.317047 15.5751 0.317047 15.1846 0.707571L12.5002 3.39199L12.4999 3.39174L11.6514 4.24027L11.6516 4.24051L4.01482 11.8773L4.01458 11.8771L3.16605 12.7256L3.16629 12.7259L3.16377 12.7284L1.00671 18.4844ZM12.5015 5.09032L4.86463 12.7271L7.40894 15.2714L15.0458 7.63463L12.5015 5.09032ZM15.8943 6.7861L18.0865 4.59392C18.2817 4.39866 18.2817 4.08208 18.0865 3.88682L16.2493 2.04962C16.054 1.85436 15.7374 1.85436 15.5422 2.04962L13.35 4.24179L15.8943 6.7861ZM2.4594 17.6754L4.09134 13.6509L6.48509 16.0447L2.4594 17.6754Z"
      fill={color}
    />
  </IconWrapper>
);

IconPencil.displayName = "IconPencil";

export default React.memo(IconPencil);
