import styled from "@emotion/styled";

export const TableHistory = styled.table`
  table-layout: auto;
  border: 2px solid silver;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  width: 400px;
  margin: 60px auto;
  padding: 5px;
  background-color: beige;
`;

export const Thead = styled.thead`
  background-color: #1A1A82 ;
  color: #EFEFF5;
`;
export const TrColumn = styled.tr`
  :nth-of-type(even) {
    background-color: #E2A90F;
  }
`;
export const TdString = styled.td`
  border: 2px solid silver;
`;