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
  const filledPointsData = Array.from({ length: 2024 - 2015 + 1 }, (_, i) => {
    const year = 2015 + i;
    const season = seasons.find((s) => s.year === year);
    return {
      year,
      pointsFor: season ? season.pointsFor : 0,
      pointsAgainst: season ? season.pointsAgainst : 0,
    };
  });

  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={filledPointsData}>
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
