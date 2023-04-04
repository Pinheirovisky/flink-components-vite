import React from "react";

import Wrapper from "./Tbody.styles";

interface TbodyProps {
  data: any[];
  currentPage: number;
}

const Tbody: React.FC<TbodyProps> = ({ data, currentPage }: TbodyProps) => {
  return (
    <Wrapper>
      {data.map((row, key) => {
        return (
          key >= (currentPage - 1) * 5 &&
          key < currentPage * 5 && (
            <tr key={`row-${key}`}>
              <td>{row.descricao}</td>
            </tr>
          )
        );
      })}
    </Wrapper>
  );
};

export default Tbody;
