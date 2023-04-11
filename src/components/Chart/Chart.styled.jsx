import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutBox = styled(Doughnut)`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const ChartContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 120px;
  height: 120px;
`;

export const ChartLabel = styled.p`
  position: absolute;
  margin: 0;
  /* z-index: -1; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Poppins;
  font-weight: 600;
  font-size: 16.8px;
  line-height: 25.2px;
  color: #393d54;
`;
