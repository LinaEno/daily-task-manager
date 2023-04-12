import styled from 'styled-components';

export const Box = styled.div`
  /* font-family: Poppins; */
  padding: 16px;
  margin: 16px;
  background-color: #ffffff;
  border-radius: 25px;
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
  font-weight: 700;
  font-size: 20px;
  line-height: 25.2px;
  color: #393d54;
  margin: 0;
  text-align: center;

  @media screen and (min-width: 1280px) {
    text-align: left;
  }
`;
