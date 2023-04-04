import styled from "styled-components";

const Wrapper = styled.thead`
  tr {
    height: 3.6rem;

    & + tr {
      box-shadow: 0rem -0.1rem 0rem #d4e1ea;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.highlightSemiLightDark};
    }

    td {
      color: ${({ theme }) => theme.colors.highlightDark};
      font-size: ${({ theme }) => theme.fonts.fontSize.sm};
      font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
      padding: ${({ theme }) => `${theme.spacing.small.medium} 0`};
    }
  }
`;

export default Wrapper;
