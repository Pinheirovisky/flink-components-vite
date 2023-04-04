import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  height: ${({ theme }) => theme.spacing.mid.medium};
  padding: ${({ theme }) =>
    `${theme.spacing.small.great} 0 ${theme.spacing.small.little} 0`};
  display: flex;
  align-items: center;
  gap: 16px;

  .action-area {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondaryLogo};
    font-size: ${({ theme }) => theme.fonts.fontSize.xm};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
    height: 24px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;

    &.back {
      svg {
        transform: rotate(180deg);
      }
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const Form = styled.div`
  width: 102px;
  height: 24px;
  color: ${({ theme }) => theme.colors.highlightDark};
  font-size: ${({ theme }) => theme.fonts.fontSize.xm};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};

  input {
    width: 44px;
    height: 24px;
    padding: ${({ theme }) =>
      `${theme.spacing.small.tiny} 0 ${theme.spacing.small.tiny} ${theme.spacing.small.little}`};
    border: 1px solid ${({ theme }) => theme.colors.highlightMedium};
    border-radius: ${({ theme }) => theme.borders.width.thick};
    margin-right: ${({ theme }) => theme.spacing.small.little};
  }
`;

export default Wrapper;
export { Form };
