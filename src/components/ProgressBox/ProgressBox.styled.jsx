import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  padding: 30px;
  margin: 30px;
  background-color: #ffffff;
  border-radius: 25px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 25.2px;
  color: #393d54;
  margin: 0;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    text-align: left;
  }
`;

export const Btn = styled.button`
  border-style: none;
  background-color: transparent;
`;
