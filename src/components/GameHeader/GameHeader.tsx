import { HomeButton } from './HomeButton';
import { RoomInfo } from './RoomInfo';
import { GameActions } from './GameActions';
import { PlayerCountBadge } from './PlayerCountBadge';

interface GameHeaderProps {
  roomCode: string;
  playersCount: number;
  onLeaveRoom: () => void;
  onStartGame: () => void;
  onResetGame: () => void;
  canStartGame: boolean;
  isGameStarted: boolean;
  isGameOver: boolean;
  copied: boolean;
  onCopyRoomCode: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  roomCode,
  playersCount,
  onLeaveRoom,
  onStartGame,
  onResetGame,
  canStartGame,
  isGameStarted,
  isGameOver,
  copied,
  onCopyRoomCode,
}) => {
  return (
    <header className='flex h-[70px] w-full items-center justify-between gap-4 overflow-x-auto border-b border-white/20 bg-white/10 px-4 shadow-2xl backdrop-blur-xl sm:px-10'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-4'>
        <div className='flex w-full items-center justify-between gap-4 md:w-auto'>
          <HomeButton onLeaveRoom={onLeaveRoom} />

          {playersCount < 2 ? (
            <RoomInfo
              roomCode={roomCode}
              copied={copied}
              onCopyRoomCode={onCopyRoomCode}
            />
          ) : (
            <GameActions
              canStartGame={canStartGame}
              isGameStarted={isGameStarted}
              isGameOver={isGameOver}
              onStartGame={onStartGame}
              onResetGame={onResetGame}
            />
          )}
        </div>

        <div className='hidden flex-wrap items-center justify-center gap-4 sm:flex'>
          <PlayerCountBadge playersCount={playersCount} />
        </div>
      </div>
    </header>
  );
};
