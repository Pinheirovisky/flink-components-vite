import styled from "styled-components";

interface Props {
  avatar: string;
}

const Wrapper = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.highlightExtraLightLogo};
  width: 18.2rem;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.small.little};
  border-radius: ${({ theme }) => theme.borders.width.thick};

  &:hover {
    .separator {
      display: block;
    }

    .exit {
      display: block;
    }
  }

  &.closed {
    width: 6.4rem;

    h5,
    h3 {
      display: none;
    }
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  gap: 0.8rem;
  border-radius: ${({ theme }) => theme.borders.width.thick};
  cursor: pointer;

  .avatar {
    width: 2.4rem;
    height: 2.4rem;
  }

  h5 {
    color: ${({ theme }) => theme.colors.highlightDark};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
    font-size: ${({ theme }) => theme.fonts.fontSize.xm};
    line-height: 2.2rem;
  }
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarName = styled.h3`
  margin-left: 0.8rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fonts.fontSize.xm};
  color: ${({ theme }) => theme.colors.highlightDark};
`;

const Separator = styled.div`
  display: none;
  height: 0.1rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.highlightLight};
  margin-top: 1rem;
`;

const Exit = styled.div`
  display: none;
  margin-top: 0.5rem;

  button {
    color: ${({ theme }) => theme.colors.danger};
    background: transparent;
  }
`;

export default Wrapper;
export { AvatarGroup, AvatarName, Exit, ProfileInfo, Separator };
