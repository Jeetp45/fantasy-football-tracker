import VersusCard from './VersusCard';
import { stats } from '@/data/versusstats';
import { teams } from '@/data/teams'; //use this for versus table

const Versus = () => {
  return (
    <div className='flex overflow-x-auto gap-4 py-4 px-4'>
      {stats.map((stat, index) => (
        <VersusCard
          key={index}
          value={stat.value}
          matchup={stat.matchup}
          description={stat.description}
        />
      ))}
    </div>
  );
};

export default Versus;
