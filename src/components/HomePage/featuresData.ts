import { MessageCircle, Users, Zap } from 'lucide-react';
import React from 'react';
import type { ReactElement } from 'react';

export interface FeatureItem {
  icon: ReactElement;
  title: string;
  description: string;
  bgGlow: string;
  iconBg: string;
}

export const featuresData: FeatureItem[] = [
  {
    icon: React.createElement(Users, { className: 'h-8 w-8 text-white' }),
    title: 'Room-Based Play',
    description:
      'Create private rooms and invite friends for exclusive matches.',
    bgGlow: 'from-blue-500/20 to-purple-500/20',
    iconBg: 'from-blue-400 to-blue-600',
  },
  {
    icon: React.createElement(Zap, { className: 'h-8 w-8 text-white' }),
    title: 'Lightning Fast',
    description:
      'Experience instant moves and real-time updates with zero lag.',
    bgGlow: 'from-green-500/20 to-emerald-500/20',
    iconBg: 'from-green-400 to-emerald-600',
  },
  {
    icon: React.createElement(MessageCircle, {
      className: 'h-8 w-8 text-white',
    }),
    title: 'Live Chat',
    description: 'Communicate with opponents through chat with emoji support.',
    bgGlow: 'from-pink-500/20 to-rose-500/20',
    iconBg: 'from-pink-400 to-rose-600',
  },
];
