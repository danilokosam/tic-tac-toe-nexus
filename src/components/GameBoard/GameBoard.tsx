import { Sparkles } from 'lucide-react';
import React, { useMemo } from 'react';
import type { GameState } from '../../types/game';
import { Cell } from './Cell';
interface GameBoardProps {
  gameState: GameState;
  onMove: (position: number) => void;
  disabled: boolean;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  gameState,
  onMove,
  disabled,
}) => {
  const winningLine = useMemo(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (
        gameState.board[a] &&
        gameState.board[a] === gameState.board[b] &&
        gameState.board[a] === gameState.board[c]
      ) {
        return [a, b, c];
      }
    }
    return [];
  }, [gameState.board]);

  return (
    <div className='group relative w-full sm:w-2/3 md:w-[400px]'>
      <div className='absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/10 to-pink-500/10 blur-2xl transition-all duration-500 group-hover:blur-3xl' />

      <div className='relative rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl md:p-8'>
        <div className='mb-4 text-center md:mb-6'>
          <div className='flex items-center justify-center gap-2 text-sm font-medium text-white/70'>
            <Sparkles className='h-4 w-4' />
            <span>Game Board</span>
            <Sparkles className='h-4 w-4' />
          </div>
        </div>

        <div className='mx-auto grid max-w-lg grid-cols-3 gap-3 md:gap-4'>
          {gameState.board.map((cell, i) => (
            <Cell
              key={i}
              index={i}
              symbol={cell}
              disabled={disabled}
              isWinning={winningLine.includes(i)}
              onClick={() => !disabled && !cell && onMove(i)}
            />
          ))}
        </div>

        <div className='mt-5 text-center md:mt-6'>
          <div className='flex items-center justify-center gap-4 text-xs text-white/50'>
            <div className='flex items-center gap-1'>
              <div className='h-3 w-3 rounded-full bg-blue-400' />
              <span>Player X</span>
            </div>
            <div className='h-4 w-px bg-white/20' />
            <div className='flex items-center gap-1'>
              <div className='h-3 w-3 rounded-full bg-red-400' />
              <span>Player O</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
