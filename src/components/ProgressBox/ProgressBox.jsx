import { Box, TopBox, Title, Btn, BottomBox } from './ProgressBox.styled';
import brush from '../../img/brush.png';
import { Chart } from 'components/Chart/Chart';
import { StatBox } from 'components/StatBox/StatBox';

export const Progress = () => {
  return (
    <Box>
      <TopBox>
        <Title>Activity Graph</Title>
        <Btn>
          <img src={brush} alt="brush" />
        </Btn>
      </TopBox>
      <BottomBox>
        <StatBox />
        <Chart />
      </BottomBox>
    </Box>
  );
};
