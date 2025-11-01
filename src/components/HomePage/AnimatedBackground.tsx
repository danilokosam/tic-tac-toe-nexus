import React from 'react';

interface AnimatedBackgroundProps {
  showParticles?: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  showParticles = false,
}) => {
  return (
    <>
      {/* Gradient glows */}
      <div className='absolute inset-0'>
        <div className='pointer-events-none absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-purple-500/10 blur-3xl' />
        <div className='pointer-events-none absolute top-40 right-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-1000' />
        <div className='pointer-events-none absolute bottom-32 left-1/3 h-80 w-80 animate-pulse rounded-full bg-pink-500/10 blur-3xl delay-2000' />
      </div>

      {/* Floating particles */}
      {showParticles && (
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className='animate-float absolute h-2 w-2 rounded-full bg-white/20'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};
