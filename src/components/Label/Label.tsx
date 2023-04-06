import React, { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { cn } from '../../utils/cn';

const LabelRoot = Root;

export const Label = forwardRef<
  ElementRef<typeof LabelRoot>,
  ComponentPropsWithoutRef<typeof LabelRoot>
>(({ className, ...props }, ref) => (
  <LabelRoot
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));

Label.displayName = 'Label';
