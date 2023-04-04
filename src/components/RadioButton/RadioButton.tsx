import { ThemeMiddleware } from "@middlewares";
import React from "react";

import {
  RadioContainer,
  RadioInput,
  RadioLabel,
  RadioMarker,
} from "./RadioButton.styles";

export interface RadioProps {
  checked?: boolean;
  id: string;
  name: string;
  onChange: () => void;
  uiClasses?: string;
  value: string;
  children: string;
  theme: "light" | "dark";
}

const RadioButton: React.FC<RadioProps> = ({
  checked,
  children,
  id,
  name,
  onChange,
  uiClasses = "",
  value,
  theme,
}) => {
  return (
    <ThemeMiddleware theme={theme}>
      <RadioContainer className={uiClasses}>
        <RadioLabel htmlFor={id} containerTheme={theme}>
          <RadioInput
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            containerTheme={theme}
          />
          <RadioMarker containerTheme={theme}>
            <span className="marker-indicator"></span>
          </RadioMarker>
          <span className="children-text">{children}</span>
        </RadioLabel>
      </RadioContainer>
    </ThemeMiddleware>
  );
};

export default RadioButton;
