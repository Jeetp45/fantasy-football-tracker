import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Team } from '@/types/leaderboardteam.ts';
import TeamRow from './TeamRow';

const Leaderboard = () => {
  const teams: Team[] = [
    {
      id: 1,
      logo: '/src/assets/patriots.jpg',
      name: 'Hank',
      seasons: 10,
      record: '87-47',
      winPercentage: 0.649,
      leagueRating: 1843,
      trophies: '🏆🏆🏆 🥈 🥉🥉🥉',
    },
    {
      id: 2,
      logo: '/src/assets/panthers.png',
      name: 'Cooper',
      seasons: 10,
      record: '75-59',
      winPercentage: 0.56,
      leagueRating: 1659,
      trophies: '🏆🏆 🥈🥈🥈 🥉',
    },
    {
      id: 3,
      logo: '/src/assets/falcons.png',
      name: 'Rett',
      seasons: 10,
      record: '82-52',
      winPercentage: 0.612,
      leagueRating: 1873,
      trophies: '🏆 🥈🥈 🥉🥉',
    },
    {
      id: 4,
      logo: '/src/assets/giants.png',
      name: 'Jeet',
      seasons: 9,
      record: '64-57',
      winPercentage: 0.529,
      leagueRating: 1581,
      trophies: '🏆 🥈 🥉🥉 ',
    },
    {
      id: 5,
      logo: '/src/assets/panthers.png',
      name: 'Campbell',
      seasons: 8,
      record: '54-54',
      winPercentage: 0.5,
      leagueRating: 1630,
      trophies: '🏆 🥉',
    },
    {
      id: 6,
      logo: '/src/assets/cowboys.png',
      name: 'Noah',
      seasons: 9,
      record: '60-61',
      winPercentage: 0.496,
      leagueRating: 1397,
      trophies: '🏆 🥈',
    },
    {
      id: 7,
      logo: '/src/assets/bears.png',
      name: 'Clay',
      seasons: 7,
      record: '41-54',
      winPercentage: 0.432,
      leagueRating: 1450,
      trophies: '🏆',
    },
    {
      id: 8,
      logo: '/src/assets/panthers.png',
      name: 'Bishop',
      seasons: 10,
      record: '73-61',
      winPercentage: 0.545,
      leagueRating: 1424,
      trophies: '🥈',
    },
    {
      id: 9,
      logo: '/src/assets/packers.png',
      name: 'Anthony',
      seasons: 10,
      record: '47-87',
      winPercentage: 0.351,
      leagueRating: 1152,
      trophies: '🥉',
    },
    {
      id: 10,
      logo: '/src/assets/lions.png',
      name: 'Robert',
      seasons: 8,
      record: '33-75',
      winPercentage: 0.306,
      leagueRating: 1141,
      trophies: '🥈',
    },
  ];

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
