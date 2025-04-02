import MemberCard from './MemberCard';
import { members } from '@/data/membersInfo.ts';

const LeagueMembers = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-[#006847] to-[#2eac4e] p-8'>
      <section className='py-10'>
        <div className='container mx-auto px-4'>
          <h2 className='flex justify-center text-3xl font-semibold font-serif text-red-800 mb-8'>
            League Members
          </h2>
          <div className='flex flex-wrap gap-6 justify-center'>
            {members.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeagueMembers;
