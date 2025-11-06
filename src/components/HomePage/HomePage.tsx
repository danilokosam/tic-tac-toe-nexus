import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { Header } from './Header';
import { Features } from './Features';
import { Footer } from './Footer';
import { GameJoinForm } from '../GameJoinForm/GameJoinForm';

interface HomePageProps {
  onCreateRoom: (playerName: string) => void;
  onJoinRoom: (roomCode: string, playerName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onCreateRoom,
  onJoinRoom,
}) => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-linear-to-br from-gray-950 via-black to-purple-950'>
      <AnimatedBackground showParticles />
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-center p-4'>
        <Header />
        <Features />
        <GameJoinForm onCreateRoom={onCreateRoom} onJoinRoom={onJoinRoom} />
        <Footer />
      </div>
    </div>
  );
};
