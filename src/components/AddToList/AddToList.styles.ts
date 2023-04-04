import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-width: 30rem;
`;

export const ListContainer = styled.div`
  width: 100%;
  padding: 1rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.width.thick};
  border: 0.1rem solid ${({ theme }) => theme.colors.highlightMedium};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  padding-bottom: 0.5rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.highlightMedium};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.highlightDark};
  font-size: ${({ theme }) => theme.fonts.fontSize.xs};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
`;

export const AddRemoveButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  margin: 0;
  padding: 0;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const OptionsMenu = styled.div`
  width: 30rem;
  height: 30rem;

  background-color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.width.thick};
  border: 0.1rem solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 5px 12px 2px rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 3.5rem;
  right: -1rem;
  z-index: 2;
  overflow-y: auto;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`;

export const OptionButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: transparent;

  &:last-of-type {
    border: none;
    box-shadow: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};

    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const CurrentList = styled.ul`
  display: block;
  width: 100%;

  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 1rem 0.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.highlightLight};

  &:last-of-type {
    border: none;
  }
`;

export const ItemName = styled.span`
  color: ${({ theme }) => theme.colors.highlightDark};
  font-size: ${({ theme }) => theme.fonts.fontSize.md};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
`;
