import { Server, Socket } from 'socket.io';
import type { Room, ChatMessage } from './types';
import { handleRoomEvents } from './socketHandlers/roomHandlers';
import { handleChatEvents } from './socketHandlers/chatHandlers';
import { handleGameEvents } from './socketHandlers/gameHandlers';
import { handleDisconnect } from './socketHandlers/disconnectedHandler';

const rooms = new Map<string, Room>();
const chatMessages = new Map<string, ChatMessage[]>();

export const setupSocketHandlers = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`🔌 User connected: ${socket.id}`);

    handleRoomEvents(io, socket, rooms, chatMessages);
    handleGameEvents(io, socket, rooms);
    handleChatEvents(io, socket, rooms, chatMessages);
    handleDisconnect(io, socket, rooms, chatMessages);
  });
};
