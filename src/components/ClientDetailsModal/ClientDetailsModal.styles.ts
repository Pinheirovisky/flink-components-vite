import styled from "styled-components";

const Wrapper = styled.div`
  width: 72rem;
  height: 44rem;
  padding: ${({ theme }) =>
    `${theme.spacing.small.great} ${theme.spacing.small.medium}`};
  gap: 2rem;
  display: flex;
  flex-direction: column;

  h3,
  h4 {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fonts.fontSize.xm};
    color: ${({ theme }) => theme.colors.secondaryLogo};
  }

  h4 {
    font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.8rem;
  column-gap: 1.6rem;
`;

const ListGroups = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.8rem;
  column-gap: 1.6rem;
  overflow: auto;
  height: 30rem;
  row-gap: 1.6rem;
  overflow: auto;

  p {
    color: ${({ theme }) => theme.colors.highlightDark};
  }
`;

const Footer = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.small.great};
  display: flex;
  gap: 3rem;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.small.great};

  button {
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondaryLogo};
    font-size: ${({ theme }) => theme.fonts.fontSize.xm};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};

    &.inactive {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:first-of-type svg {
      transform: rotate(180deg);
    }
  }
`;

const ItemGroup = styled.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;

  .item {
    &:first-of-type {
      min-width: 25.6rem;
    }
  }
`;

const Item = styled.div`
  width: 50%;
  max-width: 28.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Fieldname = styled.p`
  color: ${({ theme }) => theme.colors.highlightDark};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fonts.fontSize.xm};
`;
const Fieldvalue = styled.p`
  color: ${({ theme }) => theme.colors.highlightDark};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fonts.fontSize.xm};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  font-size: ${({ theme }) => theme.fonts.fontSize.sm};

  li {
    list-style-type: none;
  }
`;

export default Wrapper;
export {
  Content,
  List,
  ListGroups,
  Footer,
  ItemGroup,
  Item,
  Fieldname,
  Fieldvalue,
};
