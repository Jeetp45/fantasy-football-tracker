import MemberCard from './MemberCard';

const LeagueMembers = () => {
  const members = [
    {
      name: 'Anthony Ramirez',
      team: 'Cooper sucks',
      avatar: '/src/assets/packers.png',
      wins: 0,
    },
    {
      name: 'Bishop Richardson',
      team: 'columbus flyz',
      avatar: '/src/assets/panthers.png',
      wins: 0,
    },
    {
      name: 'Campbell Wildrick',
      team: 'LoveMeCujo',
      avatar: '/src/assets/panthers.png',
      wins: 1,
    },
    {
      name: 'Clay Killoren',
      team: 'ckilla',
      avatar: '/src/assets/bears.png',
      wins: 1,
    },
    {
      name: 'Cooper Hannah',
      team: 'The Fitzgeralds',
      avatar: '/src/assets/panthers.png',
      wins: 2,
    },
    {
      name: 'Hank Barron',
      team: 'Red Barons',
      avatar: '/src/assets/patriots.jpg',
      wins: 3,
    },
    {
      name: 'Jeet Patel',
      team: 'Patel Brothers',
      avatar: '/src/assets/giants.png',
      wins: 1,
    },
    {
      name: 'Noah Beason',
      team: 'Norts',
      avatar: '/src/assets/cowboys.png',
      wins: 1,
    },
    {
      name: 'Rett Foust',
      team: 'Atlanta ReJulios',
      avatar: '/src/assets/falcons.png',
      wins: 1,
    },
    {
      name: 'Robert Lyon',
      team: 'Detroit Lyons',
      avatar: '/src/assets/lions.png',
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
