import React, { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string; 
  error?: string | boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className='relative'>
        <input
          className={clsx(
            'flex h-10 w-full rounded-md border bg-transparent py-2 px-3 text-sm placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 border-zinc-400',
            'focus-styles',
            error
              && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {typeof(error) === 'string' && <div className="absolute text-xs text-left text-red-400 top-12 right-1">* {error}</div>}
      </div>
    );
  }
);
