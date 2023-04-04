import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid #a8afc1;
  border-radius: ${({ theme }) => theme.borders.width.thick};
  padding: ${({ theme }) =>
    `${theme.spacing.small.medium} ${theme.spacing.small.medium}`};
`;

const Header = styled.header`
  display: flex;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
  font-size: ${({ theme }) => theme.fonts.fontSize.xm};
  color: ${({ theme }) => theme.colors.highlightDark};
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small.medium};
`;

const ColumnMap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 25.6rem;

  svg {
    transform: rotate(90deg);
  }
`;

const Main = styled.main`
  overflow: hidden;
`;

const Row = styled.label`
  height: 5.6rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small.medium};
  box-shadow: 0rem -0.1rem 0rem #d4e1ea;
  cursor: pointer;

  :first-child {
    box-shadow: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.highlightSemiLightDark};
  }
`;

const Item = styled.div`
  max-width: 25.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.highlightDark};

  button {
    float: right;
    background: transparent;
  }
`;

export default Wrapper;
export { Header, Main, ColumnMap, Row, Item };
