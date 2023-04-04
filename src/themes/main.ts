import borders from "./borders";
import breakpoints from "./breakpoints";
import { darkColors, lightColors } from "./colors";
import fonts from "./fonts";
import { ThemeBody } from "./protocols";
import spacing from "./spacing";

const darkMain: ThemeBody = {
  breakpoints: breakpoints,
  colors: darkColors,
  fonts: fonts,
  spacing: spacing,
  borders: borders,
};

const lightMain: ThemeBody = {
  breakpoints: breakpoints,
  colors: lightColors,
  fonts: fonts,
  spacing: spacing,
  borders: borders,
};

export { darkMain, lightMain };
