import { Server, Socket } from 'socket.io';
import type { ChatMessage, Room, SendMessageData } from 'server/types';

export const handleChatEvents = (
  io: Server,
  socket: Socket,
  rooms: Map<string, Room>,
  chatMessages: Map<string, ChatMessage[]>,
) => {
  socket.on('send-message', (data: SendMessageData) => {
    const { roomCode, message, playerName } = data;
    const room = rooms.get(roomCode);
    if (!room) return socket.emit('chat-error', 'Room not found');

    const chatMessage: ChatMessage = {
      id: Date.now(),
      playerName,
      message,
      timestamp: new Date().toLocaleTimeString(),
    };

    const messages = chatMessages.get(roomCode) || [];
    messages.push(chatMessage);
    chatMessages.set(roomCode, messages);

    io.to(roomCode).emit('new-message', chatMessage);
  });
};
