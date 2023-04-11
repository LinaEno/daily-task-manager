import styled from 'styled-components';

export const Box = styled.div`
  /* font-family: Poppins; */
  padding: 16px;
  margin: 16px;
  background-color: #ffffff;
  box-shadow: 0px 7.56px 47.88px rgba(0, 0, 0, 0.04);
  border-radius: 25px;
`;

export const TopBox = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 30px;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 25.2px;
  color: #393d54;
  margin: 0;
  text-align: center;

  @media screen and (min-width: 1280px) {
    text-align: left;
  }
`;

export const Btn = styled.button`
  border-style: none;
  background-color: transparent;
`;
