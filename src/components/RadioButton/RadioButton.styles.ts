import styled from 'styled-components';

interface RadioStylesProps {
  containerTheme: string;
}

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${({ theme }) => theme.spacing.small.great};
`;

export const RadioLabel = styled.label<RadioStylesProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;

  .children-text {
    color: ${({ containerTheme }) =>
      containerTheme === 'light' ? '#0074C0' : '#FFFFFF'};
    font-family: ${({ theme }) => theme.fonts.fontFamily.main};
    font-size: ${({ theme }) => theme.fonts.fontSize.sm};
  }
`;

export const RadioMarker = styled.span<RadioStylesProps>`
  width: 15px;
  height: 15px;
  padding: 2px;
  margin-right: 6px;
  border-radius: 15px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ containerTheme }) =>
      containerTheme === 'light' ? '#0074C0' : '#FFFFFF'};

  .marker-indicator {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 100%;
    transition: 300ms all;
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const RadioInput = styled.input<RadioStylesProps>`
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  left: 0;

  &:checked {
    & ~ ${RadioMarker} {
      .marker-indicator {
        background: ${({ containerTheme }) =>
          containerTheme === 'light' ? '#0074C0' : '#FFFFFF'};
      }
    }
  }
`;
