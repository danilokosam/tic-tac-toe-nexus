import { useEffect, useState } from 'react';
import type { GameState, Room } from '../types/game';
import { Socket } from 'socket.io-client';

export const useGameRoom = (room: Room, socket: Socket | null) => {
  const [gameState, setGameState] = useState<GameState>(room.gameState);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleGameStarted = (updatedRoom: Room) =>
      setGameState(updatedRoom.gameState);
    const handleGameUpdated = (updatedGameState: GameState) =>
      setGameState(updatedGameState);
    const handleGameReset = (updatedGameState: GameState) =>
      setGameState(updatedGameState);

    socket?.on('game-started', handleGameStarted);
    socket?.on('game-updated', handleGameUpdated);
    socket?.on('game-reset', handleGameReset);

    return () => {
      socket?.off('game-started', handleGameStarted);
      socket?.off('game-updated', handleGameUpdated);
      socket?.off('game-reset', handleGameReset);
    };
  }, [socket]);

  const startGame = () => socket?.emit('start-game', room.code);
  const resetGame = () => socket?.emit('reset-game', room.code);
  const makeMove = (position: number) =>
    socket?.emit('make-move', { roomCode: room.code, position });

  const copyRoomCode = async () => {
    try {
      await navigator.clipboard.writeText(room.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy room code:', err);
    }
  };

  const canStartGame = room.players.length === 2 && !gameState.gameStarted;
  const isGameOver = !!(gameState.winner || gameState.isDraw);

  return {
    gameState,
    copied,
    canStartGame,
    isGameOver,
    startGame,
    resetGame,
    makeMove,
    copyRoomCode,
  };
};
