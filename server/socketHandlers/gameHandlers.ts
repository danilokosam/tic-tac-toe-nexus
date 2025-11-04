import { Server, Socket } from 'socket.io';
import { checkWinner, createGameState } from '@/gameLogic.js';
import type { Room, MakeMoveData } from '@/types.js';

export const handleGameEvents = (
  io: Server,
  socket: Socket,
  rooms: Map<string, Room>,
) => {
  const getRoom = (code: string) => rooms.get(code);

  socket.on('start-game', (roomCode: string) => {
    const room = getRoom(roomCode);
    if (!room || room.players.length !== 2)
      return socket.emit('game-error', 'Need 2 players to start');

    Object.assign(room.gameState, {
      gameStarted: true,
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      isDraw: false,
    });

    io.to(roomCode).emit('game-started', room);
    console.log(`🎮 Game started in room ${roomCode}`);
  });

  socket.on('make-move', (data: MakeMoveData) => {
    const { roomCode, position } = data;
    const room = getRoom(roomCode);
    if (!room || !room.gameState.gameStarted)
      return socket.emit('game-error', 'Game not started');

    const player = room.players.find((p) => p.id === socket.id);
    if (!player || player.symbol !== room.gameState.currentPlayer)
      return socket.emit('game-error', 'Not your turn');

    if (room.gameState.board[position] !== null)
      return socket.emit('game-error', 'Position already taken');

    room.gameState.board[position] = room.gameState.currentPlayer;
    const result = checkWinner(room.gameState.board);

    if (result === 'draw') room.gameState.isDraw = true;
    else if (result) room.gameState.winner = result;
    else
      room.gameState.currentPlayer =
        room.gameState.currentPlayer === 'X' ? 'O' : 'X';

    io.to(roomCode).emit('game-updated', room.gameState);
  });

  socket.on('reset-game', (roomCode: string) => {
    const room = getRoom(roomCode);
    if (!room) return socket.emit('game-error', 'Room not found');

    room.gameState = createGameState();
    room.gameState.gameStarted = true;

    io.to(roomCode).emit('game-reset', room.gameState);
    console.log(`🔄 Game reset in room ${roomCode}`);
  });
};
