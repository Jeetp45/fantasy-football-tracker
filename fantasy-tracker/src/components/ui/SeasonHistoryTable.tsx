import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table.tsx';
import { SeasonHistoryTableProps } from '@/types/seasonhistory';

const SeasonHistoryTable: React.FC<SeasonHistoryTableProps> = ({
  team,
  seasons,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-lg font-serif'>Team</TableHead>
          <TableHead className='text-lg font-serif'>Record</TableHead>
          <TableHead className='text-lg font-serif'>Points For</TableHead>
          <TableHead className='text-lg font-serif'>Points Against</TableHead>
          <TableHead className='text-lg font-serif'>Rank</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {seasons.map((season) => (
          <TableRow key={`${team.id}-${season.year}`}>
            <TableCell className='text-lg font-serif'>{team.team}</TableCell>
            <TableCell className='text-lg font-serif'>
              {season.record}
            </TableCell>
            <TableCell className='text-lg font-serif'>
              {season.pointsFor}
            </TableCell>
            <TableCell className='text-lg font-serif'>
              {season.pointsAgainst}
            </TableCell>
            <TableCell className='text-lg font-serif'>{season.rank}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SeasonHistoryTable;
