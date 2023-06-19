import React from 'react';
import { IconProps } from '../types/Icon.types';

export const CircleIcon = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className,
}: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};
