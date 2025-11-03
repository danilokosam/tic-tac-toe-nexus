import { Circle, Sparkles, X } from 'lucide-react';
import React from 'react';
import clsx from 'clsx';
import type { PlayerSymbol } from '../../types/game';

interface CellProps {
  index: number;
  symbol: PlayerSymbol | null;
  disabled: boolean;
  isWinning: boolean;
  onClick: () => void;
}

export const Cell: React.FC<CellProps> = React.memo(
  ({ index, symbol, disabled, isWinning, onClick }) => {
    const renderSymbol = (symbol: PlayerSymbol | null) => {
      switch (symbol) {
        case 'X':
          return (
            <X
              className='h-14 w-14 text-blue-400 drop-shadow-lg md:h-16 md:w-16'
              strokeWidth={4}
            />
          );
        case 'O':
          return (
            <Circle
              className='h-14 w-14 text-red-400 drop-shadow-lg md:h-16 md:w-16'
              strokeWidth={4}
            />
          );
        default:
          return null;
      }
    };

    return (
      <button
        onClick={onClick}
        disabled={disabled || !!symbol}
        className={clsx(
          'group/cell relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 transition-all duration-300',
          !disabled && !symbol
            ? 'cursor-pointer hover:scale-105 hover:border-white/40 hover:bg-white/20'
            : 'cursor-not-allowed',
          isWinning &&
            'animate-pulse border-green-400/60 bg-linear-to-br from-green-500/20 to-emerald-500/20 shadow-green-500/30',
        )}
      >
        {!disabled && !symbol && (
          <div className='absolute inset-0 rounded-xl bg-linear-to-br from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover/cell:opacity-100' />
        )}
        <div className='relative z-10 transition-transform duration-300 group-hover/cell:scale-110'>
          {renderSymbol(symbol)}
        </div>
        {isWinning && (
          <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
            <Sparkles className='h-6 w-6 animate-spin text-yellow-300 opacity-50' />
          </div>
        )}
        {!symbol && !disabled && (
          <div className='absolute top-1 left-1 font-mono text-[10px] text-white/20'>
            {index + 1}
          </div>
        )}
      </button>
    );
  },
);
Cell.displayName = 'Cell';
