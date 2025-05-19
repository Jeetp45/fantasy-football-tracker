import { TeamProps } from '@/types/leaderboardteam';
import { TableRow, TableCell } from '@/components/ui/table';
import { Avatar } from '@/components/ui/avatar';
import { VersusHistory } from '@/types/versushistory';

const VersusRow = ({ team }: TeamProps) => {
  const versusHistory: VersusHistory = team.versusHistory;
  const opponentKeys: (keyof VersusHistory)[] = [
    'vsAnthony',
    'vsBishop',
    'vsCampbell',
    'vsClay',
    'vsCooper',
    'vsHank',
    'vsJeet',
    'vsNoah',
    'vsRett',
    'vsRobert',
  ];
  return (
    <TableRow>
      <TableCell className='flex items-center space-x-3'>
        <Avatar className='w-10 h-10'>
          <img src={team.logo} alt={team.name} />
        </Avatar>
        <span className='font-serif text-white'>{team.team}</span>
      </TableCell>
      {opponentKeys.map((key) => (
        <TableCell className='font-serif text-blue-300' key={key}>
          {versusHistory[key]}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default VersusRow;
