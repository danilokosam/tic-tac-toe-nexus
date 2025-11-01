import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className='animate-fade-in-up mt-16 text-center delay-700'>
      <div className='mb-4 flex items-center justify-center gap-2 text-sm text-white/60'>
        <div className='h-px w-8 bg-linear-to-r from-transparent to-white/30' />
        <span>Built with passion using React, Socket.io & TypeScript</span>
        <div className='h-px w-8 bg-linear-to-l from-transparent to-white/30' />
      </div>

      <p className='mb-4 text-xs text-white/60'>
        Built by{' '}
        <a
          href='https://github.com/danilokosam'
          target='_blank'
          rel='noopener noreferrer'
          className='underline transition-colors hover:text-white'
        >
          Daniel Duarte
        </a>{' '}
        — just because sometimes I need it 😄
      </p>

      <div className='flex items-center justify-center gap-4 text-white/40'>
        <div className='h-2 w-2 animate-pulse rounded-full bg-purple-400' />
        <div className='h-2 w-2 animate-pulse rounded-full bg-pink-400 delay-500' />
        <div className='h-2 w-2 animate-pulse rounded-full bg-blue-400 delay-1000' />
      </div>
    </footer>
  );
};
