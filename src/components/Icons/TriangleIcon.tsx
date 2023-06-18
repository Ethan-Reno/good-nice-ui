import React from 'react';
import { IconProps } from './types';
import { Triangle } from 'lucide-react';

export const TriangleIcon = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}: IconProps) => {
  return (
    <Triangle size={size} color={color} strokeWidth={strokeWidth} />
  );
};
