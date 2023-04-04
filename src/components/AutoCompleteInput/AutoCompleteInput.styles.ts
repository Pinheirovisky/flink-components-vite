import { Autocomplete } from "@mui/material";
import styled, { css } from "styled-components";

interface AutocompleteInputProps {
  iscompact: string;
}

const Wrapper = styled(Autocomplete)<AutocompleteInputProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  label {
    color: ${({ theme }) => theme.colors.highlightDark};
  }

  svg {
    fill: ${({ theme }) => theme.colors.highlightDark};
    stroke: ${({ theme }) => theme.colors.highlightDark};
  }

  &.secondary {
    & > div {
      height: 100%;

      & > div {
        height: 100%;
        color: ${({ theme }) => theme.colors.highlightDark};
      }
    }

    input {
      font-size: ${({ theme }) => theme.fonts.fontSize.md};
    }

    fieldset {
      border: 0.1rem solid #a8afc1;
    }
  }
  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root {
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.fontFamily.main};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  ${(props) =>
    props.iscompact === "compact" &&
    css`
      .MuiOutlinedInput-root {
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .MuiOutlinedInput-input {
        margin-top: -1.7rem;
      }
    `}
`;

export default Wrapper;
