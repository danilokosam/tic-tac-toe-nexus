import { Users } from 'lucide-react';

export const PlayerCountBadge = ({
  playersCount,
}: {
  playersCount: number;
}) => {
  return (
    <div className='flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2'>
      <Users className='size-4 text-blue-400 md:size-5' />
      <span className='text-sm font-semibold text-white md:text-base'>
        {playersCount}/2 Players
      </span>
    </div>
  );
};
