import { Card, CardHeader } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { MemberCardProps } from '@/types/member.ts';

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <Card className='w-full sm:max-w-xs md:max-w-sm lg:max-w-sm mx-auto p-6 bg-transparent border animate-[gradient-border_3s_infinite] rounded-2xl shadow-xl hover:scale-105 transition-all'>
      <CardHeader className='text-center'>
        <Avatar className='mx-auto rounded-full w-24 h-24 mb-4'>
          <img src={member.avatar} alt={member.name} />
        </Avatar>
        <h3 className='text-lg font-semibold font-serif text-white'>
          {member.name}
        </h3>
      </CardHeader>
      <p className='flex justify-center text-md font-serif text-gray-300'>
        Team: {member.team}
      </p>
      <div className='flex justify-center items-center space-x-2 mt-0'>
        <span className='text-lg font-semibold font-serif text-gray-700'>
          Championships:
        </span>
        {member.wins > 0 ? (
          Array.from({ length: member.wins }).map((_, index) => (
            <span key={index} className='text-2xl'>
              🏆
            </span>
          ))
        ) : (
          <span className='text-xl font-serif text-gray-700'>O</span>
        )}
      </div>
    </Card>
  );
};

export default MemberCard;
