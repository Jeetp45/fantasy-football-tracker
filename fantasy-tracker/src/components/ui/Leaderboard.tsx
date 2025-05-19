import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import TeamRow from './TeamRow';
import { teams } from '@/data/teams';

const Leaderboard = () => {
  const headers = [
    'Team',
    'Seasons',
    'Record',
    'Win%',
    'League Rating',
    'Trophies',
  ];
  return (
    <div className='container mx-auto p-8'>
      <h1 className='flex justify-center text-gray-200 text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-10'>
        Leaderboard
      </h1>
      <Table className='w-full border border-gray-300 shadow-xl'>
        <TableHeader>
          <TableRow className='font-serif'>
            {headers.map((name, index) => (
              <TableHead className='text-white bg-red-500 ' key={index}>
                {name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TeamRow key={team.id} team={team} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Leaderboard;
