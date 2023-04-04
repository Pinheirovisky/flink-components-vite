import styled from "styled-components";

export const MainBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  padding-right: 2.4rem;
  gap: 1.2rem;
  background-color: ${({ theme }) => theme.colors.secondaryWhite};
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.actionsBarButtonBg};
  border-radius: ${({ theme }) => theme.borders.width.thick};
  font-size: ${({ theme }) => theme.fonts.fontSize.sm};
  font-family: ${({ theme }) => theme.fonts.fontFamily.main};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  background-color: ${({ theme }) => theme.colors.actionsBarButtonBg};
  color: ${({ theme }) => theme.colors.actionsBarButtonFg};
  cursor: pointer;
  outline: none;
  transition: 100ms all;

  &:hover {
    box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.6);
  }

  &:disabled {
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.colors.highlightMedium};
    color: ${({ theme }) => theme.colors.actionsBarButtonFg};
    box-shadow: none;
    cursor: default;
  }
`;
