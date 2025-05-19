import VersusCard from './VersusCard';
import VersusTable from './VersusTable';
import { stats } from '@/data/versusstats';
import { teams } from '@/data/teams';

const Versus = () => {
  return (
    <div className='flex flex-col px-4 py-4'>
      <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 w-full'>
        {stats.map((stat, index) => (
          <VersusCard
            key={index}
            value={stat.value}
            matchup={stat.matchup}
            description={stat.description}
          />
        ))}
      </div>
      <h1 className='text-center text-gray-200 text-xl sm:text-2xl md:text-3xl font-serif font-bold py-5'>
        Head to Head
      </h1>
      <div className='py-5'>
        <VersusTable teams={teams} />
      </div>
    </div>
  );
};

export default Versus;
