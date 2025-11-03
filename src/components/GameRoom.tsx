import React from 'react';
import { Socket } from 'socket.io-client';
import type { Room, PlayerSymbol } from '../types/game';
import { Chat } from './Chat/Chat';
import { GameBoard } from './GameBoard/GameBoard';
import { GameHeader } from './GameHeader/GameHeader';
import { GameStatusBanner } from './GameStatusBanner';
import { PlayersInfo } from './PlayersInfo';
import { useGameRoom } from '../hooks/useGameRoom';

interface GameRoomProps {
  room: Room;
  socket: Socket | null;
  currentPlayerId: PlayerSymbol;
  onLeaveRoom: () => void;
}

export const GameRoom: React.FC<GameRoomProps> = ({
  room,
  socket,
  currentPlayerId,
  onLeaveRoom,
}) => {
  const {
    gameState,
    copied,
    canStartGame,
    isGameOver,
    startGame,
    resetGame,
    makeMove,
    copyRoomCode,
  } = useGameRoom(room, socket);

  const currentPlayer = room.players.find((p) => p.symbol === currentPlayerId);
  const isCurrentPlayerTurn =
    gameState.gameStarted && gameState.currentPlayer === currentPlayer?.symbol;

  const getGameStatusMessage = () => {
    if (!gameState.gameStarted)
      return room.players.length < 2
        ? 'Waiting for another player...'
        : 'Ready to start!';
    if (gameState.isDraw) return "It's a draw! 🤝";
    if (gameState.winner) {
      const winnerPlayer = room.players.find(
        (p) => p.symbol === gameState.winner,
      );
      return `${winnerPlayer?.name?.split(' ')?.[0]} wins! 🎉`;
    }
    const currentTurnPlayer = room.players.find(
      (p) => p.symbol === gameState.currentPlayer,
    );
    return `${currentTurnPlayer?.name}'s turn`;
  };
  return (
    <div className='relative min-h-screen overflow-hidden bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900'>
      <GameHeader
        canStartGame={canStartGame}
        copied={copied}
        isGameOver={!!isGameOver}
        isGameStarted={gameState.gameStarted}
        onCopyRoomCode={copyRoomCode}
        onLeaveRoom={onLeaveRoom}
        onStartGame={startGame}
        onResetGame={resetGame}
        playersCount={room.players.length}
        roomCode={room.code}
      />
      {/* Main Content */}
      <div className='z-10 flex h-[calc(100dvh-70px)] flex-1'>
        <div className='flex w-full flex-1 flex-col overflow-y-auto lg:flex-row'>
          <div className='flex w-full flex-col-reverse justify-center gap-4 self-center p-4 md:w-[350px] lg:flex-col'>
            <GameStatusBanner
              isCurrentPlayerTurn={isCurrentPlayerTurn}
              isGameOver={!!isGameOver}
              message={getGameStatusMessage()}
            />
            <PlayersInfo
              currentPlayerId={(currentPlayer?.id as PlayerSymbol) || 'X'}
              gameState={gameState}
              room={room}
            />
            {/* Game Board */}
          </div>
          <div className='flex h-full flex-1 flex-col p-4 pt-0 pb-16 md:p-8 md:pb-4'>
            <div className='flex flex-1 items-center justify-center'>
              <GameBoard
                gameState={gameState}
                onMove={makeMove}
                disabled={
                  !gameState.gameStarted || !!isGameOver || !isCurrentPlayerTurn
                }
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          {/* Enhanced Chat Area - 30% */}
          <Chat
            roomCode={room.code}
            currentPlayerName={currentPlayer?.name || ''}
            socket={socket}
          />
        </div>
      </div>
    </div>
  );
};
