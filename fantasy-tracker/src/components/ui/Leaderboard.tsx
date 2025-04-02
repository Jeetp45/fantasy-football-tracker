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
  return (
    <div className='container mx-auto p-8'>
      <h1 className='flex justify-center text-gray-200 text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-10'>
        Leaderboard
      </h1>
      <Table className='w-full border border-gray-300 shadow-xl'>
        <TableHeader>
          <TableRow className='font-serif'>
            <TableHead className='text-white bg-red-500 '>Team</TableHead>
            <TableHead className='text-white bg-red-500 '>Seasons</TableHead>
            <TableHead className='text-white bg-red-500'>Record</TableHead>
            <TableHead className='text-white bg-red-500'>Win%</TableHead>
            <TableHead className='text-white bg-red-500'>
              League Rating
            </TableHead>
            <TableHead className='text-white bg-red-500'>Trophies</TableHead>
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
