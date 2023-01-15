import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #14172C;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const Description = styled.div`
  background-color: #eeeed9;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 350px;
  border: 1px solid #180352;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Avatar = styled.img`
  display: block;
  height: 220px;
  width: 200px;
  margin-top: 20px;
`;

export const UserName = styled.p`
  font-size: 22px;
  line-height: 1.62;
  color: #22076C;
  margin-top: 20px;
`;

export const UserInfo = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.58;
  color: #484137;
`;

export const Stats = styled.ul`
  width: 100%;
  background-color: #fff;
  display: flex;
  margin: 0 auto;
  padding: 0px;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid #0f0f4f;
`;

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :nth-last-of-type(1n) {
    border-right: 1px solid #180352;
  }
  padding: 5px;
`;
export const Label = styled.span`
  display: flex;
  font-size: 14px;
  line-height: 1.62;
  text-align: center;
  color: #22076C;
`;

export const Quantity = styled.span`
  color: #484137;
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  margin: 10px auto;
`;
