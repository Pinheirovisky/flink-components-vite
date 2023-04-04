import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small.regular};
  transition: 300ms all;
  padding: 0.5rem;
  width: fit-content;
  margin-left: -0.5rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: rgba(33, 98, 209, 0.1);
  }
`;

export const BreadcrumbItem = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0;
    padding: 0;
    display: flex;
    /* border: none; */
    background-color: transparent;

    p {
      color: ${({ theme }) => theme.colors.highlightDark};
      font-size: ${({ theme }) => theme.fonts.fontSize.xm};
      font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  a {
    color: ${({ theme }) => theme.colors.highlightDark};
    font-size: ${({ theme }) => theme.fonts.fontSize.xm};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  small {
    color: ${({ theme }) => theme.colors.highlightDark};
    font-size: ${({ theme }) => theme.fonts.fontSize.xm};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};

    &:last-child {
      font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
    }
  }

  svg {
    margin-left: ${({ theme }) => theme.spacing.small.regular};
  }
`;
