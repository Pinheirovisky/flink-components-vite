import { Fonts } from "./protocols";

const fonts: Fonts = {
  fontFamily: {
    main: `'Inter', Helvetica, Arial, sans-serif`,
    logo: `'Manrope'`,
  },
  fontSize: {
    xs: "10px",
    xm: "12px",
    sm: "14px",
    md: "16px",
    g: "20px",
    gg: "24px",
    xg: "32px",
    xxg: "48px",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    tight: "12px",
    medium: "14px",
    distance: "16px",
    superDistance: "20px",
  },
};

export default fonts;
