import { Play, RotateCcw } from 'lucide-react';

interface GameActionsProps {
  canStartGame: boolean;
  isGameStarted: boolean;
  isGameOver: boolean;
  onStartGame: () => void;
  onResetGame: () => void;
}

export const GameActions: React.FC<GameActionsProps> = ({
  canStartGame,
  isGameStarted,
  isGameOver,
  onStartGame,
  onResetGame,
}) => {
  return (
    <>
      {canStartGame && (
        <button
          onClick={onStartGame}
          className='group flex items-center gap-2 rounded-lg bg-linear-to-r from-green-500 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow transition-transform hover:scale-105 hover:from-green-600 hover:to-emerald-600 hover:shadow-xl md:text-base'
        >
          <Play className='size-4 md:size-5' />
          Start Game
        </button>
      )}
      {isGameStarted && isGameOver && (
        <button
          onClick={onResetGame}
          className='group flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 px-5 py-2 text-sm font-bold text-white shadow transition-transform hover:scale-105 hover:from-blue-600 hover:to-purple-600 hover:shadow-xl md:text-base'
        >
          <RotateCcw className='size-4 transition-transform duration-500 group-hover:rotate-180 md:size-5' />
          New Game
        </button>
      )}
    </>
  );
};
