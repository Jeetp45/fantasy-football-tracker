import { useState } from 'react';
import { Button } from './button.tsx';
import { ChevronDown } from 'lucide-react';
import griffin from '/src/assets/griffin.jpeg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className='bg-blue-400 p-2'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-8'>
          <img src={griffin} className='h-13 w-13 rounded-lg'></img>
          <h1 className='text-xl font-semibold text-white'>
            SDS Freshmen League
          </h1>
        </div>
        <nav className='hidden md:flex space-x-6'>
          <Button
            variant='ghost'
            className='text-[1rem] text-white hover:text-red-600 hover:cursor-pointer'
            onClick={() => navigate('/home')}
          >
            League Home
          </Button>
          <Button
            variant='ghost'
            className='text-[1rem] text-white hover:text-red-600 hover:cursor-pointer'
            onClick={() => navigate('/leaderboard')}
          >
            Leaderboard
          </Button>
          <Button
            variant='ghost'
            className='text-[1rem] text-white hover:text-red-600 hover:cursor-pointer'
            onClick={() => navigate('/history')}
          >
            History
          </Button>
          <Button
            variant='ghost'
            className='text-[1rem] text-white hover:text-red-600 hover:cursor-pointer'
            onClick={() => navigate('/versus')}
          >
            Versus
          </Button>
        </nav>
        <Button
          className='md:hidden'
          variant='outline'
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu <ChevronDown className='ml-2 w-4 h-4' />
        </Button>
        {isOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg'>
            <Button
              variant='ghost'
              className='w-full'
              onClick={() => setIsOpen(false)}
            >
              Home
            </Button>
            <Button
              variant='ghost'
              className='w-full'
              onClick={() => setIsOpen(false)}
            >
              Leaderboard
            </Button>
            <Button
              variant='ghost'
              className='w-full'
              onClick={() => setIsOpen(false)}
            >
              Matches
            </Button>
            <Button
              variant='ghost'
              className='w-full'
              onClick={() => setIsOpen(false)}
            >
              Teams
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
