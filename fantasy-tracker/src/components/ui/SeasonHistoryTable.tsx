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
        <TableRow className='bg-red-400'>
          <TableHead className='text-lg text-white font-serif'>Team</TableHead>
          <TableHead className='text-lg text-white font-serif'>Year</TableHead>
          <TableHead className='text-lg text-white font-serif'>
            Record
          </TableHead>
          <TableHead className='text-lg text-white font-serif'>
            Points For
          </TableHead>
          <TableHead className='text-lg text-white font-serif'>
            Points Against
          </TableHead>
          <TableHead className='text-lg text-white font-serif'>Rank</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {seasons.map((season) => (
          <TableRow key={`${team.id}-${season.year}`}>
            <TableCell className='text-lg font-serif'>{team.team}</TableCell>
            <TableCell className='text-lg font-serif'>{season.year}</TableCell>
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
