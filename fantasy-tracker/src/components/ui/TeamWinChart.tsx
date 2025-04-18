import { TeamWinChartProps } from '@/types/seasonhistory';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const TeamWinChart: React.FC<TeamWinChartProps> = ({ seasons }) => {
  const filledWinData = Array.from({ length: 2024 - 2015 + 1 }, (_, i) => {
    const year = 2015 + i;
    const season = seasons.find((s) => s.year === year);
    return {
      year,
      wins: season ? season.wins : 0,
    };
  });
  return (
    <div className='w-full h-72'>
      <ResponsiveContainer>
        <LineChart data={filledWinData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='year' />
          <YAxis />
          <Tooltip />
          <Line
            type='monotone'
            dataKey='wins'
            stroke='blue'
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TeamWinChart;
