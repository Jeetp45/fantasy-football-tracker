import MemberCard from './MemberCard';

const LeagueMembers = () => {
  const members = [
    {
      name: 'Anthony Ramirez',
      team: 'Cooper loves cock',
      avatar: '/src/assets/griffin.jpeg',
      wins: 0,
    },
    {
      name: 'Bishop Richardson',
      team: 'columbus flyz',
      avatar: '/src/assets/griffin.jpeg',
      wins: 0,
    },
    {
      name: 'Campbell Wildrick',
      team: 'Flaming Fetuses',
      avatar: '/src/assets/griffin.jpeg',
      wins: 1,
    },
    {
      name: 'Clay Killoren',
      team: 'ckilla',
      avatar: '/src/assets/griffin.jpeg',
      wins: 1,
    },
    {
      name: 'Cooper Hannah',
      team: 'The StickyFingers',
      avatar: '/src/assets/griffin.jpeg',
      wins: 2,
    },
    {
      name: 'Hank Barron',
      team: 'Red Barons',
      avatar: '/src/assets/griffin.jpeg',
      wins: 3,
    },
    {
      name: 'Jeet Patel',
      team: 'RIP Harambe',
      avatar: '/src/assets/griffin.jpeg',
      wins: 1,
    },
    {
      name: 'Noah Beason',
      team: 'Norts',
      avatar: '/src/assets/griffin.jpeg',
      wins: 1,
    },
    {
      name: 'Rett Foust',
      team: 'Atlanta ReJulios',
      avatar: '/src/assets/griffin.jpeg',
      wins: 1,
    },
    {
      name: 'Robert Lyon',
      team: 'Detroit Lyons',
      avatar: '/src/assets/griffin.jpeg',
      wins: 0,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-r from-[#006847] to-[#2eac4e] p-8'>
      <section className='py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='flex justify-center text-2xl font-semibold font-serif text-red-800 mb-8'>
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
