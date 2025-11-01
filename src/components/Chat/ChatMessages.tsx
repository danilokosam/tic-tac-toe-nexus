import { MessageCircle } from 'lucide-react';
import type { ChatMessage } from '../../types/game';

interface ChatMessagesProps {
  messages: ChatMessage[];
  currentPlayerName: string;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export const ChatMessages = ({
  messages,
  currentPlayerName,
  messagesEndRef,
}: ChatMessagesProps) => {
  return (
    <div className='flex-1 space-y-4 overflow-y-auto bg-linear-to-b from-transparent to-white/5 p-6'>
      {messages.length === 0 ? (
        <div className='flex h-full flex-col justify-center py-12 text-center'>
          <MessageCircle className='mx-auto mb-4 h-16 w-16 text-white/20' />
          <div className='mb-2 text-lg font-medium text-white/50'>
            No messages yet
          </div>
          <p className='text-sm text-white/30'>
            Start the conversation and connect with your opponent!
          </p>
        </div>
      ) : (
        messages.map((msg, i) => (
          <div
            key={msg.id}
            className={`animate-fade-in-up ${
              msg.playerName === currentPlayerName ? 'ml-6' : 'mr-6'
            }`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div
              className={`group relative ${
                msg.playerName === currentPlayerName
                  ? 'flex justify-end'
                  : 'flex justify-start'
              }`}
            >
              <div
                className={`max-w-[85%] rounded-xl p-4 transition-all duration-300 hover:scale-105 ${
                  msg.playerName === currentPlayerName
                    ? 'border border-purple-400/40 bg-linear-to-br from-purple-500/30 to-pink-500/30'
                    : 'border border-white/20 bg-white/15'
                } text-white shadow-lg`}
              >
                <div className='mb-2 flex items-center justify-between gap-4'>
                  <span className='text-xs font-bold'>
                    {msg.playerName === currentPlayerName
                      ? 'You'
                      : msg.playerName}
                  </span>
                  <span className='font-mono text-xs text-white/50'>
                    {msg.timestamp}
                  </span>
                </div>
                <p className='text-sm leading-relaxed wrap-break-word'>
                  {msg.message}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
