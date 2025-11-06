import { MessageCircle, X } from 'lucide-react';
import { useChat } from '../../hooks/useChat';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { Socket } from 'socket.io-client';

interface ChatProps {
  roomCode: string;
  currentPlayerName: string;
  socket: Socket | null;
}

export const Chat = ({ roomCode, currentPlayerName, socket }: ChatProps) => {
  const chat = useChat({ socket, roomCode, currentPlayerName });
  return (
    <div
      className={`fixed top-0 right-0 h-full transform border-l border-white/20 bg-linear-to-b from-white/5 to-white/10 backdrop-blur-xl transition-all duration-300 md:static md:h-full ${
        chat.isSideBarOpen
          ? 'w-full translate-x-0'
          : 'w-0 translate-x-full'
      }`}
    >
      <button
        onClick={chat.toggleSidebar}
        className={`absolute z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${
          chat.isSideBarOpen ? 'top-3 right-4' : 'top-[72px] -left-12'
        } ${
          chat.messages.some((m) => !m.isRead)
            ? 'animate-pulse bg-pink-500'
            : ''
        } backdrop-blur-2xl hover:bg-white/30`}
      >
        {chat.isSideBarOpen ? (
          <X className='size-6 text-white' />
        ) : (
          <MessageCircle className='size-6 text-white' />
        )}
      </button>

      <div className='relative flex h-full flex-col overflow-hidden'>
        <ChatHeader messageCount={chat.messages.length} />
        <ChatMessages
          messages={chat.messages}
          currentPlayerName={currentPlayerName}
          messagesEndRef={chat.messagesEndRef}
        />
        <ChatInput {...chat} />
      </div>
    </div>
  );
};
