import React from 'react';
import { Root } from "@radix-ui/react-accessible-icon";
import { IconProps } from './types';
import { Triangle } from 'lucide-react';

const IconRoot = Root

const TriangleIcon = ({
  label = 'Triangle Icon',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2
}: IconProps ) => {
  return (
    <IconRoot
      label={label}
    >
      <Triangle
        size={size}
        color={color}
        strokeWidth={strokeWidth}  
      />
    </IconRoot>
  );
}

TriangleIcon.displayName = 'TriangleIcon';

export default TriangleIcon;
