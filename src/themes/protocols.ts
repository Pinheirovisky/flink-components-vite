export interface Breakpoints {
  smaller: string;
  small: string;
  medium: string;
  big: string;
  bigger: string;
  maxSize: string;
  maxWidth: string;
}

export interface Colors {
  [key: string]: string;
}
export interface Fonts {
  fontFamily: { main: string; logo: string };
  fontSize: {
    xs: string;
    xm: string;
    sm: string;
    md: string;
    g: string;
    gg: string;
    xg: string;
    xxg: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  };
  lineHeight: {
    tight: string;
    medium: string;
    distance: string;
    superDistance: string;
  };
}
export interface Spacing {
  small: {
    tiny: string;
    little: string;
    regular: string;
    medium: string;
    great: string;
    bigger: string;
  };
  mid: {
    tiny: string;
    little: string;
    medium: string;
    great: string;
    bigger: string;
  };
  large: {
    tiny: string;
    little: string;
    medium: string;
    great: string;
    bigger: string;
  };
  boxes: {
    even: {
      tiny: string;
      little: string;
      medium: string;
      great: string;
      bigger: string;
    };
    double: {
      tiny: string;
      little: string;
      medium: string;
      great: string;
      bigger: string;
    };
  };
}
export interface Borders {
  width: {
    none: string;
    hairline: string;
    thin: string;
    thick: string;
    heavy: string;
  };
  radius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    circular: string;
  };
}

export interface ThemeBody {
  breakpoints: Breakpoints;
  colors: Colors;
  fonts: Fonts;
  spacing: Spacing;
  borders: Borders;
}
