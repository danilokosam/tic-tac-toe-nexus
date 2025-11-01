import { Play, Sparkles, Trophy, Users, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { TextInput } from './TextInput';
import { GradientButton } from './GradientButton';

interface GameJoinFormProps {
  onCreateRoom: (playerName: string) => void;
  onJoinRoom: (roomCode: string, playerName: string) => void;
}

export const GameJoinForm = ({
  onCreateRoom,
  onJoinRoom,
}: GameJoinFormProps) => {
  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [isJoining, setIsJoining] = useState(false);

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) onCreateRoom(playerName.trim());
  };

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim() && roomCode.trim()) {
      onJoinRoom(roomCode.trim().toUpperCase(), playerName.trim());
    }
  };

  const handleChange = (newValue: string) => {
    const upperCase = newValue.toUpperCase();
    setRoomCode(upperCase);
  };

  return (
    <div className='animate-fade-in-up relative mx-auto w-full max-w-md delay-500'>
      <div className='absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/30 to-pink-500/30 blur-2xl transition-all duration-500 group-hover:blur-3xl'></div>

      <div className='relative rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl'>
        <div className='mb-8 space-y-2 text-center'>
          <h2 className='text-2xl font-bold text-white md:text-3xl'>
            🎮 Ready to Play?
          </h2>
          <p className='text-sm text-white/70 md:text-base'>
            Create a room or join one to challenge your friends!
          </p>
        </div>

        <TextInput
          label='Player Name'
          icon={<Trophy className='h-5 w-5 text-yellow-400' />}
          value={playerName}
          onChange={setPlayerName}
          placeholder='e.g., LegendKiller'
          maxLength={20}
        />

        {isJoining && (
          <div className='animate-fade-in'>
            <TextInput
              label='Room Code'
              icon={<Sparkles className='h-5 w-5 text-blue-400' />}
              value={roomCode}
              onChange={handleChange}
              placeholder='6-digit code'
              maxLength={6}
              centered
              color='blue'
            />
          </div>
        )}

        <div className='space-y-3 pt-4'>
          {isJoining ? (
            <>
              <form onSubmit={handleJoinRoom}>
                <GradientButton
                  type='submit'
                  icon={<Zap className='h-5 w-5' />}
                  text='Join Room'
                  variant='secondary'
                  disabled={!playerName.trim() || !roomCode.trim()}
                />
              </form>
              <button
                type='button'
                onClick={() => {
                  setIsJoining(false);
                  setRoomCode('');
                }}
                className='w-full text-sm text-white/80 underline hover:text-white'
              >
                ← Back to Create or Join
              </button>
            </>
          ) : (
            <>
              <form onSubmit={handleCreateRoom}>
                <GradientButton
                  type='submit'
                  icon={<Play className='h-5 w-5' />}
                  text='Create New Room'
                  disabled={!playerName.trim()}
                />
              </form>
              <GradientButton
                icon={<Users className='h-5 w-5' />}
                text='Join Existing Room'
                variant='outline'
                onClick={() => setIsJoining(true)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
