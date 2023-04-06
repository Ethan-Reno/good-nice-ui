import React from 'react';
import { Root } from '@radix-ui/react-accessible-icon';
import { X } from 'lucide-react';
import { IconProps } from './types';

const IconRoot = Root;

const XIcon = ({
  label = 'X Icon',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}: IconProps) => {
  return (
    <IconRoot label={label}>
      <X size={size} color={color} strokeWidth={strokeWidth} />
    </IconRoot>
  );
};

XIcon.displayName = 'XIcon';

export default XIcon;
