import React from 'react';
import * as AccessibleIconPrimitive from "@radix-ui/react-accessible-icon";
import { IconProps } from './types';
import { Triangle } from 'lucide-react';

const TriangleIcon = ({
  label = 'Triangle Icon',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2
}: IconProps ) => {
  return (
    <AccessibleIconPrimitive.Root
      label={label}
    >
      <Triangle
        size={size}
        color={color}
        strokeWidth={strokeWidth}  
      />
    </AccessibleIconPrimitive.Root>
  );
}

TriangleIcon.displayName = 'TriangleIcon';

export default TriangleIcon;
