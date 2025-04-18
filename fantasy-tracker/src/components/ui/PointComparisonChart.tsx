import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { PointsComparisonChartProps } from '@/types/seasonhistory';

const PointsComparisonChart: React.FC<PointsComparisonChartProps> = ({
  seasons,
}) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={seasons}>
        <XAxis dataKey='year' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='pointsFor' fill='blue' name='Points For' />
        <Bar dataKey='pointsAgainst' fill='#ef4444' name='Points Against' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PointsComparisonChart;
