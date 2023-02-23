import React from 'react';
import * as AccessibleIconPrimitive from "@radix-ui/react-accessible-icon";
import { X } from 'lucide-react';
import { IconProps } from './types';

const XIcon = ({
  label = 'X Icon',
  size = 24,
  color = 'currentColor',
  strokeWidth = 2
}: IconProps ) => {
  return (
    <AccessibleIconPrimitive.Root
      label={label}
    >
      <X
        size={size}
        color={color}
        strokeWidth={strokeWidth}  
      />
    </AccessibleIconPrimitive.Root>
  );
}

XIcon.displayName = 'XIcon';

export default XIcon;
