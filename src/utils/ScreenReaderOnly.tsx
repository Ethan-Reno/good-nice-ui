import React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export interface ScreenReaderOnlyProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export const ScreenReaderOnly = ({
  asChild,
  children,
}: ScreenReaderOnlyProps) => (
  <VisuallyHidden.Root asChild={asChild}>{children}</VisuallyHidden.Root>
);
