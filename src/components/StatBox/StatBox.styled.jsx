import styled from 'styled-components';

export const WrapBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    align-items: start;
    justify-content: left;
  }
`;

export const StatWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const ColorBoxD = styled.span`
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 3.36px;
    background-color: rgb(23, 51, 230);
  }
`;

export const ColorBoxR = styled.span`
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 3.36px;
    background-color: rgb(239, 233, 68);
  }
`;

export const StatTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatTitle = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 15.45px;
  color: #393d54;
  margin-bottom: 7px;
  text-align: left;
`;

export const StatText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
`;

export const NumberSpan = styled.span`
  color: #0f296d;
  line-height: 24px;
  margin-right: 5px;
`;

export const TextSpan = styled.span`
  color: #bfbfbf;
  line-height: 18.4px;
`;
