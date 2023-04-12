import React from "react";

import classnames from "classnames";
import { ThemeMiddleware } from "middlewares";

import { IconClose } from "components/Icons";

// styles
import Wrapper, { Content, customStyles } from "./Modal.styles";

export interface Props {
  buttonTestId?: string;
  children: React.ReactNode;
  onClose?: () => void;
  padding?: boolean;
  uiClasses?: string;
  uiContentClasses?: string;
  theme: "light" | "dark";
}

const Modal: React.FC<Props> = ({
  buttonTestId = "",
  children,
  onClose,
  padding = false,
  uiClasses = "",
  uiContentClasses = "",
  theme,
}: Props) => {
  const handleOnClick = () => {
    if (onClose) onClose();
  };

  const contentStyles = classnames({
    "has-padding": padding,
    [uiContentClasses]: uiContentClasses,
  });

  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper
        isOpen={true}
        onRequestClose={onClose}
        ariaHideApp={false}
        style={customStyles}
        className={uiClasses}
      >
        <Content className={contentStyles}>
          {onClose && (
            <button
              type="button"
              onClick={handleOnClick}
              className="close-button"
              data-testid={buttonTestId}
            >
              <IconClose theme={theme} title="fechar" />
            </button>
          )}
          {children}
        </Content>
      </Wrapper>
    </ThemeMiddleware>
  );
};

export default Modal;
