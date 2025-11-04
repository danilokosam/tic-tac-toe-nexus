import { Server, Socket } from 'socket.io';
import type { Room, ChatMessage } from '../types.js';

export const handleDisconnect = (
  io: Server,
  socket: Socket,
  rooms: Map<string, Room>,
  chatMessages: Map<string, ChatMessage[]>,
) => {
  socket.on('disconnect', (reason) => {
    console.log(`👋 User disconnected: ${socket.id} - Reason: ${reason}`);
    for (const [roomCode, room] of rooms.entries()) {
      const index = room.players.findIndex((p) => p.id === socket.id);
      if (index !== -1) {
        room.players.splice(index, 1);
        console.log(`👋 Player left room ${roomCode}`);

        if (room.players.length === 0) {
          rooms.delete(roomCode);
          chatMessages.delete(roomCode);
          console.log(`🗑️ Room ${roomCode} deleted (empty)`);
        } else {
          io.to(roomCode).emit('room-updated', room);
          console.log(`👋 Player left room ${roomCode}`);
        }

        break;
      }
    }
  });
};
