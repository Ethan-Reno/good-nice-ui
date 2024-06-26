import * as React from 'react';
import { cn } from '../utils/cn';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, forwardedRef) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background text-base',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-accen-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
