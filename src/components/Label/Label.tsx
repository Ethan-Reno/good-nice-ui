import React, { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { clsx } from 'clsx';

const LabelRoot = Root;

export const Label = forwardRef<
  ElementRef<typeof LabelRoot>,
  ComponentPropsWithoutRef<typeof LabelRoot>
>(({ className, ...props }, ref) => (
  <LabelRoot
    ref={ref}
    className={clsx(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));
