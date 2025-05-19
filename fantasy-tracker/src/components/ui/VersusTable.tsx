import { TeamsProps } from '@/types/versushistory';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import VersusRow from './VersusRow';

const opponents = [
  'Anthony',
  'Bishop',
  'Campbell',
  'Clay',
  'Cooper',
  'Hank',
  'Jeet',
  'Noah',
  'Rett',
  'Robert',
];

const VersusTable = ({ teams }: TeamsProps) => {
  return (
    <div>
      <Table className='w-full border border-gray-300 shadow-xl'>
        <TableHeader>
          <TableRow className='font-serif'>
            <TableHead className='text-white bg-red-800 '>Team</TableHead>
            {opponents.map((name, index) => (
              <TableHead className='text-white bg-red-800' key={index}>
                VS. {name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <VersusRow key={team.id} team={team} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VersusTable;
