import { Send, Smile } from 'lucide-react';

interface ChatInputProps {
  newMessage: string;
  setNewMessage: (value: string) => void;
  showEmojiPicker: boolean;
  setShowEmojiPicker: (v: boolean) => void;
  emojis: string[];
  addEmoji: (emoji: string) => void;
  sendMessage: (e: React.FormEvent) => void;
}

export const ChatInput = ({
  newMessage,
  setNewMessage,
  showEmojiPicker,
  setShowEmojiPicker,
  emojis,
  addEmoji,
  sendMessage,
}: ChatInputProps) => {
  return (
    <div className='border-t border-white/20 bg-linear-to-r from-white/5 to-white/10 p-6'>
      <form onSubmit={sendMessage} className='space-y-4'>
        <div className='relative'>
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Type your message...'
            className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 pr-24 text-sm text-white placeholder-white/50 backdrop-blur-sm focus:ring-2 focus:ring-purple-400'
            maxLength={200}
          />
          <button
            type='button'
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className='absolute top-1/2 right-12 -translate-y-1/2 text-white/60 hover:scale-110 hover:text-white'
          >
            <Smile className='h-5 w-5' />
          </button>
          <button
            type='submit'
            disabled={!newMessage.trim()}
            className='absolute top-1/2 right-2 -translate-y-1/2 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 p-2 text-white shadow-lg hover:scale-110 disabled:from-gray-500 disabled:to-gray-600'
          >
            <Send className='h-4 w-4' />
          </button>
        </div>

        {showEmojiPicker && (
          <div className='animate-fade-in rounded-xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-xl'>
            <div className='grid grid-cols-6 gap-2'>
              {emojis.map((emoji, i) => (
                <button
                  key={i}
                  type='button'
                  onClick={() => addEmoji(emoji)}
                  className='mx-auto cursor-pointer rounded-lg text-3xl hover:scale-125 hover:bg-white/20'
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className='flex items-center justify-between text-xs text-white/50'>
          <span>Press Enter to send</span>
          <span className={newMessage.length > 180 ? 'text-red-400' : ''}>
            {newMessage.length}/200
          </span>
        </div>
      </form>
    </div>
  );
};
