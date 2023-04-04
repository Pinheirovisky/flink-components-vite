import styled from "styled-components";

const Wrapper = styled.button`
  height: 3.2rem;
  margin: 0;
  padding: 0.6rem 1.6rem;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fonts.fontSize.xm} !important;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  letter-spacing: 0.1rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export default Wrapper;
