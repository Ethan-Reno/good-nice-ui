import React from "react"

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: 'primary' | 'secondary' | 'outline',
  size?: 'small' | 'medium' | 'large' | 'square';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'medium',
    className,
    isLoading,
    ...props
  }, ref) => {
    const baseStyles = 'active:scale-95 border text-white inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-zinc-400 disabled:pointer-events-none dark:focus:ring-offset-zinc-900 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800';
  
    const variantStyles = {
      primary: 'bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700',
      secondary: 'bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600',
      outline: 'border-zinc-900 dark:border-zinc-50 text-zinc-900 dark:text-white',
    };
  
    const sizeStyles = {
      small: "h-9 px-2",
      medium: "h-10 py-2 px-4",
      large: "h-11 px-8",
      square: "p-2"
    };
  
    let baseClasses = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
    ];
  
    if (className) {
      baseClasses = [...baseClasses, ...className.split(' ')];
    }

    return (
      <button
        className={baseClasses.join(' ')}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button';

export default Button;
