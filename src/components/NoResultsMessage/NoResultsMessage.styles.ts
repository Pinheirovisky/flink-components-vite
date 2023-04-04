import styled from "styled-components";

interface Props {
  isComponentSearch?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.highlightDark};
`;

export const ImageHolder = styled.div`
  display: flex;
  padding-bottom: 4rem;
`;

export const Title = styled.h2<Props>`
  color: ${({ theme }) => theme.colors.secondaryLogo};
  font-size: ${({ theme, isComponentSearch }) =>
    isComponentSearch ? theme.fonts.fontSize.g : theme.fonts.fontSize.gg};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
  padding-bottom: 2rem;
`;

export const Subtitle = styled.p<Props>`
  width: 40rem;
  text-align: center;
  font-size: ${({ isComponentSearch }) =>
    isComponentSearch ? "1.6rem" : "1.8rem"};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
  margin-bottom: ${({ isComponentSearch }) =>
    isComponentSearch ? "2rem" : ""};

  button {
    font-family: ${({ theme }) => theme.fonts.fontFamily.main};
    font-size: 1.8rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};

    &:hover {
      text-decoration: underline;
    }
  }
`;
