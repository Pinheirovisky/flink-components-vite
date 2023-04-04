import { Button } from "@mui/material";
import styled from "styled-components";

interface Props {
  variant: string;
  disabled: boolean;
}

const ButtonStyles = styled.div<Props>`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.fonts.fontSize.sm + 1};
  }

  button,
  a {
    border: 0.1rem solid transparent;
    border-radius: ${({ theme }) => theme.borders.width.thick};
    font-size: ${({ theme }) => theme.fonts.fontSize.sm};
    font-family: ${({ theme }) => theme.fonts.fontFamily.main};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
    padding: 1rem 1.4rem;
    line-height: 1.9rem;
    letter-spacing: 0.1rem;
    text-align: center;
    transition: 0.2s;
    cursor: pointer;

    &.has-icon {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    &:hover {
      box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.3);
    }
  }

  &.small {
    button,
    a {
      height: 4rem;
    }
  }

  &.full {
    width: 100%;

    button,
    a {
      width: 100%;
    }
  }

  &.primary {
    button,
    a {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
      color: ${({ theme }) => theme.colors.whitePermanent};
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

      :hover:enabled {
        background-color: ${({ theme }) => theme.colors.primaryLightDark};
      }
    }
  }

  &.secondary {
    button,
    a {
      background-color: ${({ theme }) => theme.colors.secondaryPermanent};
      opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
      color: ${({ theme }) => theme.colors.whitePermanent};
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
      font-size: ${({ theme }) => theme.fonts.fontSize.xm};
      font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
      height: 3.2rem;

      :hover:enabled {
        background-color: ${({ theme }) => theme.colors.secondaryLight};
      }
    }
  }

  &.hollow {
    button,
    a {
      background-color: ${({ theme }) => theme.colors.primaryLightest};
      opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
      color: ${({ theme }) => theme.colors.primaryWhite};
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
      font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
      border: 1px solid ${({ theme }) => theme.colors.primaryWhite};
    }
  }
`;

const ButtonComponent = styled(Button)``;

export default ButtonStyles;
export { ButtonComponent };
