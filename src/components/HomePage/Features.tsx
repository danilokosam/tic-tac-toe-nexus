import React from 'react';
import { featuresData } from './featuresData';

export const Features: React.FC = () => {
  return (
    <section className='animate-fade-in-up mb-16 grid max-w-5xl grid-cols-1 gap-8 delay-300 md:grid-cols-3'>
      {featuresData.map(({ icon, title, description, bgGlow, iconBg }, i) => (
        <article key={i} className='group relative'>
          <div
            className={`absolute inset-0 bg-linear-to-r ${bgGlow} rounded-2xl blur-xl transition-all duration-500 ease-out group-hover:blur-2xl`}
          />
          <div className='relative rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-500 ease-out hover:scale-[1.01] hover:border-white/30 hover:shadow-2xl'>
            <div
              className={`bg-linear-to-br ${iconBg} mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl shadow-lg`}
            >
              {icon}
            </div>
            <h3 className='mb-4 text-center text-xl font-bold text-white'>
              {title}
            </h3>
            <p className='text-center leading-relaxed text-white/70'>
              {description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
