import styled from "@emotion/styled";

export const FriendItem = styled.li`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center; 
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const Name = styled.p`
  margin-left: 10px;
  color: #21219D;
  font-weight: 500;
`;