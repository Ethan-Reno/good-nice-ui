import React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export interface ScreenReaderProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export const ScreenReader = ({
  asChild,
  children,
}: ScreenReaderProps) => (
  <VisuallyHidden.Root asChild={asChild}>{children}</VisuallyHidden.Root>
);
