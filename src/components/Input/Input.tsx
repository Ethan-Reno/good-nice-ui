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
            'block w-full rounded-md bg-transparent border-0 py-1.5 pl-3 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-blue-600 sm:text-sm sm:leading-6 focus:outline-none',
            error
              && 'ring-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {typeof(error) === 'string' && <div className="absolute text-xs text-red-500 top-10 left-1">* {error}</div>}
      </div>
    );
  }
);
