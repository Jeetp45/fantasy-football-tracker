import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { VersusCardProps } from '@/types/versushistory';

const VersusCard = ({ value, matchup, description }: VersusCardProps) => {
  return (
    <Card className='w-full sm:w-80 sm:h-45 p-4 bg-transparent border border-gray-500 rounded-2xl shadow-md hover:scale-105 transition-transform'>
      <CardHeader>
        <h1 className='text-center text-lg sm:text-xl text-blue-600 font-bold font-serif'>
          {value}
        </h1>
      </CardHeader>
      <CardContent className='flex flex-col items-center space-y-2'>
        <span className='text-center text-base sm:text-lg font-serif font-semibold text-red-400'>
          {matchup}
        </span>
        <span className='text-center text-base sm:text-lg font-serif text-gray-400'>
          {description}
        </span>
      </CardContent>
    </Card>
  );
};

export default VersusCard;
