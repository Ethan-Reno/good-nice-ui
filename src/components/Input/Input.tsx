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
            'flex h-10 w-full rounded-md border  bg-transparent py-2 px-3 text-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-400 focus:border-transparent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-zinc-300 focus:ring-zinc-400 dark:border-zinc-700 dark:focus:ring-zinc-400',
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

Input.displayName = 'Input';
