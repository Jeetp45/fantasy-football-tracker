import { TableRow, TableCell } from '@/components/ui/table';
import { Avatar } from '@/components/ui/avatar';
import { TeamProps } from '@/types/leaderboardteam.ts';

const TeamRow: React.FC<TeamProps> = ({ team }) => {
  return (
    <TableRow key={team.id}>
      <TableCell className='flex items-center space-x-3'>
        <Avatar className='w-10 h-10'>
          <img src={team.logo} alt={team.name} />
        </Avatar>
        <span className='font-serif'>{team.name}</span>
      </TableCell>
      <TableCell className='font-serif'>{team.seasons}</TableCell>
      <TableCell className='font-serif'>{team.record}</TableCell>
      <TableCell className='font-serif'>{team.winPercentage}</TableCell>
      <TableCell className='font-serif'>{team.leagueRating}</TableCell>
      <TableCell className='font-serif text-lg'>{team.trophies}</TableCell>
    </TableRow>
  );
};

export default TeamRow;
