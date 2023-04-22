import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large' | 'square';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'medium', className, isLoading, ...props },
    ref
  ) => {
    const baseStyles =
      'shadow-none border text-zinc-50 inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 disabled:opacity-50 dark:focus-visible:ring-zinc-200 disabled:pointer-events-none data-[state=open]:bg-transparent data-[state=open]:text-zinc-900 dark:data-[state=open]:text-zinc-50';

    const variantStyles = {
      primary:
        'bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 active:bg-blue-800',
      secondary:
        'bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 active:bg-red-700',
      outline:
        'bg-transparent border-zinc-900 dark:border-zinc-50 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:bg-zinc-300 dark:active:bg-zinc-600',
      ghost:
        'bg-transparent border-transparent text-zinc-900 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700 active:bg-zinc-300 dark:active:bg-zinc-600',
    };

    const sizeStyles = {
      small: 'py-1 px-2',
      medium: 'py-2 px-4',
      large: 'py-3 px-6',
      square: 'p-2',
    };

    return (
      <button
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
