import { Home } from 'lucide-react';

interface HomeButtonProps {
  onLeaveRoom: () => void;
}

export const HomeButton: React.FC<HomeButtonProps> = ({ onLeaveRoom }) => {
  return (
    <button
      onClick={onLeaveRoom}
      className='group flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2 font-semibold text-white shadow transition-all hover:border-white/30 hover:bg-white/20 hover:shadow-lg'
    >
      <Home className='size-4 transition-transform group-hover:scale-110 md:size-5' />
      <span className='text-sm md:text-base'>Home</span>
    </button>
  );
};
