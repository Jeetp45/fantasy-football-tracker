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
  seasonData,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-md font-serif'>Team</TableHead>
          <TableHead className='text-md font-serif'>Record</TableHead>
          <TableHead className='text-md font-serif'>Points For</TableHead>
          <TableHead className='text-md font-serif'>Points Against</TableHead>
          <TableHead className='text-md font-serif'>Rank</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className='text-md font-serif'>{team.name}</TableCell>
          <TableCell className='text-md font-serif'>
            {seasonData.record}
          </TableCell>
          <TableCell className='text-md font-serif'>
            {seasonData.pointsFor}
          </TableCell>
          <TableCell className='text-md font-serif'>
            {seasonData.pointsAgainst}
          </TableCell>
          <TableCell className='text-md font-serif'>
            {seasonData.rank}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SeasonHistoryTable;
