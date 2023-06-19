import React from 'react';
import { IconProps } from '../types/Icon.types';

export const ChevronLeftIcon = ({
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
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};
