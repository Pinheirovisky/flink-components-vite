import styled from "styled-components";

const Wrapper = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fonts.fontSize.sm};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  line-height: ${({ theme }) => theme.fonts.lineHeight.superDistance};
  letter-spacing: 0rem;
  text-align: left;
  margin-left: ${({ theme }) => theme.spacing.small.tiny};
  margin-top: ${({ theme }) => theme.spacing.small.tiny};
`;

export default Wrapper;
