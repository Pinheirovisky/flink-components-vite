import Modal from "react-modal";

import styled from "styled-components";

const Wrapper = styled(Modal)`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  backdrop-filter: blur(0.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.section`
  &.has-padding {
    padding: ${({ theme }) => theme.spacing.small.bigger};
  }

  min-height: 10rem;
  min-width: 10rem;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  box-shadow: 0rem 0.2rem 1.7rem rgb(0 0 0 / 15%);
  position: relative;
  border-radius: ${({ theme }) => theme.borders.width.thick};

  &.min-modal {
    height: 37.6rem;
  }

  .close-button {
    position: absolute;
    background-color: transparent;
    top: 1.6rem;
    right: 1.6rem;
    left: auto;
    cursor: pointer;
  }
`;

const customStyles = {
  overlay: {
    zIndex: 9999,
  },
};

export default Wrapper;
export { Content, customStyles };
