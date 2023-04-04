import styled from "styled-components";

const Wrapper = styled.div`
  width: 72rem;
  height: 44rem;
  padding: ${({ theme }) =>
    `${theme.spacing.small.great} ${theme.spacing.small.medium}`};
  gap: 2rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fonts.fontSize.xm};
    color: ${({ theme }) => theme.colors.secondaryLogo};
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 6rem;

    &__item {
      display: flex;
      flex-direction: column;

      strong {
        font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
        font-size: ${({ theme }) => theme.fonts.fontSize.xm};
        color: ${({ theme }) => theme.colors.highlightDark};
      }
      p {
        font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
        font-size: ${({ theme }) => theme.fonts.fontSize.xm};
        color: ${({ theme }) => theme.colors.highlightDark};
        margin-top: ${({ theme }) => theme.spacing.small.tiny};
      }
    }
  }

  p {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
    font-size: ${({ theme }) => theme.fonts.fontSize.xm};
    color: ${({ theme }) => theme.colors.highlightDark};
    margin-top: ${({ theme }) => theme.spacing.small.tiny};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 10rem);
  align-content: space-between;
  justify-content: space-between;
`;

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export default Wrapper;
export { Content, TableWrapper };
