import styled from "styled-components";

interface Props {
  type: "small" | "mid";
  size: "tiny" | "little" | "regular" | "medium" | "great" | "bigger";
}

const Wrapper = styled.svg<Props>``;

export default Wrapper;
