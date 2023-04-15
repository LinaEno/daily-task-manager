import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ChartContainer, ChartLabel, DoughnutBox } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.overrides.doughnut.plugins = {
  ...ChartJS.overrides.doughnut.plugins,
  legend: {
    display: false,
  },
};

export const Chart = ({ activePercentage, completedPercentage }) => {
  const data = {
    labels: ['Active', 'Completed'],
    datasets: [
      {
        label: '',
        data: [activePercentage, completedPercentage],
        backgroundColor: ['rgb(239, 233, 68)', 'rgb(23, 51, 230)'],
        borderWidth: 0,
        cutout: '65%',
        borderRadius: 20,
        spacing: -20,
        borderJoinStyle: 'round',
      },
    ],
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
        tooltip: {
          boxWidth: 200,
        },
      },
    },
  };

  return (
    <ChartContainer>
      <DoughnutBox data={data} />
      <ChartLabel>Tasks</ChartLabel>
    </ChartContainer>
  );
};
