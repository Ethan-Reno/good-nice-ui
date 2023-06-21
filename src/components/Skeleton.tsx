import React from 'react';
import { cn } from '../utils/cn';

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('animate-pulse rounded-md bg-muted', className)}
    {...props}
  />
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
