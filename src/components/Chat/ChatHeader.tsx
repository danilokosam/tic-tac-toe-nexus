import { MessageCircle } from 'lucide-react';

interface ChatHeaderProps {
  messageCount: number;
}

export const ChatHeader = ({ messageCount }: ChatHeaderProps) => {
  return (
    <div className='border-b border-white/20 bg-linear-to-r from-white/5 to-white/10 px-6 py-2'>
      <div className='flex items-center space-x-4'>
        <MessageCircle className='h-6 w-6 text-white' />
        <div>
          <h3 className='text-lg font-bold text-white'>Live Chat</h3>
          <p className='text-sm text-white/60'>{messageCount} messages</p>
        </div>
      </div>
    </div>
  );
};
