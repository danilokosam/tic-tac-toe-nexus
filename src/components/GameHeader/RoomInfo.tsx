import { Copy, Crown } from 'lucide-react';

interface RoomInfoProps {
  roomCode: string;
  copied: boolean;
  onCopyRoomCode: () => void;
}

export const RoomInfo: React.FC<RoomInfoProps> = ({
  roomCode,
  copied,
  onCopyRoomCode,
}) => {
  return (
    <div className='flex items-center gap-3'>
      <Crown className='size-3.5 text-yellow-400 md:size-5' />
      <span className='text-xs font-semibold text-white md:text-lg'>Room:</span>
      <button
        onClick={onCopyRoomCode}
        className='group flex cursor-pointer items-center gap-2 rounded-lg border border-purple-400/30 bg-linear-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 font-mono text-xs font-bold tracking-wide text-purple-200 transition-all hover:border-purple-400/50 hover:from-purple-500/30 hover:to-pink-500/30 md:text-base'
      >
        {roomCode}
        <Copy className='size-3.5 transition-transform group-hover:scale-110 md:size-5' />
      </button>
      {copied && (
        <span className='animate-fade-in rounded-full border border-green-400/30 bg-green-500/20 px-3 py-1 text-sm font-medium text-green-300'>
          ✓ Copied!
        </span>
      )}
    </div>
  );
};
