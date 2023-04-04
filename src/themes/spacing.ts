import { Spacing } from "./protocols";

const spacing: Spacing = {
  small: {
    tiny: "4px",
    little: "8px",
    regular: "12px",
    medium: "16px",
    great: "24px",
    bigger: "32px",
  },
  mid: {
    tiny: "40px",
    little: "48px",
    medium: "56px",
    great: "64px",
    bigger: "72px",
  },
  large: {
    tiny: "80px",
    little: "120px",
    medium: "160px",
    great: "200px",
    bigger: "240px",
  },
  boxes: {
    even: {
      tiny: "4px",
      little: "8px",
      medium: "16px",
      great: "32px",
      bigger: "40px",
    },
    double: {
      tiny: "4px 8px",
      little: "8px 16px",
      medium: "16px 24px",
      great: "16px 32px",
      bigger: "16px 40px",
    },
  },
};

export default spacing;
