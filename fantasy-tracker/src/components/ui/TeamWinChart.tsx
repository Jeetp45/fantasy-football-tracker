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
  return (
    <div className='w-full h-72'>
      <ResponsiveContainer>
        <LineChart data={seasons}>
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
