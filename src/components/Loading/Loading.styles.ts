import styled from "styled-components";

interface WrapperProps {
  noMargin: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: transparent;
  margin-top: ${({ noMargin }) => (noMargin ? "0" : "50px")};

  @keyframes loading-content {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */

  div {
    left: 99px;
    top: 49px;
    position: absolute;
    animation: loading-content linear 1s infinite;
    background: ${({ theme }) => theme.colors.secondaryTitle};
    width: 2px;
    height: 18px;
    border-radius: 1px / 2.88px;
    transform-origin: 1px 51px;
    box-sizing: content-box;
  }

  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.8888888888888888s;
    background: ${({ theme }) => theme.colors.secondaryTitle};
  }

  div:nth-child(2) {
    transform: rotate(40deg);
    animation-delay: -0.7777777777777778s;
    background: ${({ theme }) => theme.colors.secondaryTitle};
  }

  div:nth-child(3) {
    transform: rotate(80deg);
    animation-delay: -0.6666666666666666s;
    background: ${({ theme }) => theme.colors.secondaryTitle};
  }

  div:nth-child(4) {
    transform: rotate(120deg);
    animation-delay: -0.5555555555555556s;
    background: ${({ theme }) => theme.colors.secondaryTitle};
  }

  div:nth-child(5) {
    transform: rotate(160deg);
    animation-delay: -0.4444444444444444s;
    background: ${({ theme }) => theme.colors.secondaryTitle};
  }

  div:nth-child(6) {
    transform: rotate(200deg);
    animation-delay: -0.3333333333333333s;
    background: ${({ theme }) => theme.colors.secondaryTitle};
  }

  div:nth-child(7) {
    transform: rotate(240deg);
    animation-delay: -0.2222222222222222s;
    background: ${({ theme }) => theme.colors.secondaryTitle};
  }

  div:nth-child(8) {
    transform: rotate(280deg);
    animation-delay: -0.1111111111111111s;
    background: ${({ theme }) => theme.colors.secondaryTitle};
  }

  div:nth-child(9) {
    transform: rotate(320deg);
    animation-delay: 0s;
    background: ${({ theme }) => theme.colors.secondaryTitle};
  }
`;

export default Wrapper;
export { Content };
