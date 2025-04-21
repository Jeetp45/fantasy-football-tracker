import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table.tsx';
import { teams } from '@/data/teams';

const rankOrder = (rank: string): number => {
  const rankMapping: Record<string, number> = {
    '🏆': 1,
    '🥈': 2,
    '🥉': 3,
  };

  return rankMapping[rank] ?? (parseInt(rank.replace(/\D/g, ''), 10) || 999);
};

const CurrentHistory = () => {
  const sortedTeams = [...teams]
    .map((team) => ({
      ...team,
      seasonData: team.seasonHistory.find((season) => season.year === 2024),
    }))
    .filter((team) => team.seasonData)
    .sort(
      (a, b) => rankOrder(a.seasonData!.rank) - rankOrder(b.seasonData!.rank)
    );

  return (
    <Table>
      <TableHeader>
        <TableRow className='bg-red-400'>
          <TableHead className='font-serif text-white text-lg'>Team</TableHead>
          <TableHead className='font-serif text-white text-lg'>
            Record
          </TableHead>
          <TableHead className='font-serif text-white text-lg'>
            Points For
          </TableHead>
          <TableHead className='font-serif text-white text-lg'>
            Points Against
          </TableHead>
          <TableHead className='font-serif text-white text-lg'>Rank</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedTeams.map((team) => {
          const history = team.seasonHistory.find(
            (season) => season.year === 2024
          );
          return (
            history && (
              <TableRow key={team.id}>
                <TableCell className='text-lg font-serif'>
                  {team.team}
                </TableCell>
                <TableCell className='text-lg font-serif'>
                  {history.record}
                </TableCell>
                <TableCell className='text-lg font-serif'>
                  {history.pointsFor}
                </TableCell>
                <TableCell className='text-lg font-serif'>
                  {history.pointsAgainst}
                </TableCell>
                <TableCell className='text-lg font-serif'>
                  {history.rank}
                </TableCell>
              </TableRow>
            )
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CurrentHistory;
