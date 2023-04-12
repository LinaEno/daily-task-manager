import styled from 'styled-components';

export const Box = styled.div`
  padding: 16px;
  margin: 16px;
  background-color: #ffffff;
  border-radius: 25px;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Img = styled.img`
  width: 160px;
  height: 160px;
  border: 1px solid #a89fee;
  box-shadow: 0px 0px 14px #a89fee;
  border-radius: 20px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 25.2px;
  color: #393d54;
  margin: 0;
`;

export const Signature = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #393d54;
  margin: 0;
`;
