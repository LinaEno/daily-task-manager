import { Box, Title, BottomBox } from './ProgressBox.styled';
// import brush from '../../img/brush.png';
import { Chart } from 'components/Chart/Chart';
import { StatBox } from 'components/StatBox/StatBox';

export const Progress = () => {
  return (
    <Box>
      <Title>Activity Graph</Title>
      <BottomBox>
        <StatBox />
        <Chart />
      </BottomBox>
    </Box>
  );
};
