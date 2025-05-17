import { Card, CardHeader } from '@/components/ui/card';
import { VersusCardProps } from '@/types/versushistory';

const VersusCard = ({ value, matchup, description }: VersusCardProps) => {
  return (
    <Card className='w-full sm:max-w-xs md:max-w-sm lg:max-w-sm mx-auto p-3 mt-5 bg-transparent border border-gray-500 rounded-2xl shadow-md hover:scale-105 transition-all'>
      <CardHeader className='text-center'>
        <h1 className='text-xl text-blue-600 font-bold font-serif'>{value}</h1>
      </CardHeader>
      <CardHeader className='text-center'>
        <span className='text-lg font-serif font-semibold text-red-400'>
          {matchup}
        </span>
      </CardHeader>
      <CardHeader className='text-center'>
        <span className='text-lg font-serif text-gray-400'>{description}</span>
      </CardHeader>
    </Card>
  );
};

export default VersusCard;
