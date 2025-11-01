import { GamepadIcon, Sparkles } from 'lucide-react';
import React from 'react';

export const Header: React.FC = () => (
  <header className='animate-fade-in-up mb-16 pt-12 text-center'>
    <div className='relative mb-8 flex items-center justify-center'>
      <div className='absolute inset-0 animate-pulse rounded-full bg-linear-to-r from-purple-400 to-pink-400 opacity-30 blur-xl'></div>
      <div className='relative rounded-full border border-white/20 bg-linear-to-br from-white/20 to-white/5 p-6 shadow-2xl backdrop-blur-xl'>
        <GamepadIcon className='h-16 w-16 text-white drop-shadow-lg' />
        <div className='absolute -top-2 -right-2'>
          <Sparkles className='h-6 w-6 animate-spin text-yellow-300' />
        </div>
      </div>
    </div>

    <h1 className='mb-6 bg-linear-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl'>
      Tic-Tac-Toe Nexus
    </h1>

    <div className='relative'>
      <h2 className='mb-6 text-xl font-light tracking-wide text-purple-200 sm:text-2xl md:text-3xl'>
        Real-Time Multiplayer Experience
      </h2>
      <div className='absolute -bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 transform rounded-full bg-linear-to-r from-purple-400 to-pink-400' />
    </div>

    <p className='mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70'>
      Challenge friends in an immersive real-time gaming experience with
      seamless chat integration and stunning visual effects.
    </p>
  </header>
);
