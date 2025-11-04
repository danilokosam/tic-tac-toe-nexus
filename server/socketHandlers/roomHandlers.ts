import { Server, Socket } from 'socket.io';
import { generateRoomCode, createGameState } from '@/gameLogic.js';
import type { Room, JoinRoomData, ChatMessage } from '@/types.js';

export const handleRoomEvents = (
  io: Server,
  socket: Socket,
  rooms: Map<string, Room>,
  ChatMessages: Map<string, ChatMessage[]>,
) => {
  socket.on('create-room', (playerName: string) => {
    const roomCode = generateRoomCode();
    const room: Room = {
      code: roomCode,
      players: [{ id: socket.id, name: playerName, symbol: 'X' }],
      gameState: createGameState(),
    };

    rooms.set(roomCode, room);
    ChatMessages.set(roomCode, []);

    socket.join(roomCode);
    socket.emit('room-created', { roomCode, room });

    console.log(`🏠 Room created: ${roomCode}`);
  });

  socket.on('join-room', (data: JoinRoomData) => {
    const { roomCode, playerName } = data;
    const room = rooms.get(roomCode);

    if (!room) return socket.emit('room-error', 'Room not found');
    if (room.players.length >= 2)
      return socket.emit('room-error', 'Room is full');

    const player = { id: socket.id, name: playerName, symbol: 'O' as const };
    room.players.push(player);

    socket.join(roomCode);
    io.to(roomCode).emit('room-updated', { room });

    console.log(`👥 Player joined room ${roomCode}: ${playerName}`);
  });
};
