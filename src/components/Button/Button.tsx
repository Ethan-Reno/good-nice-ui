import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../../utils/cn"
 
const buttonVariants = cva(
  "border items-center justify-center rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ring-zinc-400 ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-sky-700 text-white hover:bg-sky-800 active:bg-sky-900",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
        outline:
          "bg-transparent hover:bg-zinc-200 active:bg-zinc-300 border-zinc-400 hover:border-zinc-500 dark:border-zinc-700 dark:text-white",
        ghost:
          "bg-transparent border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:hover:text-zinc-100",
        link:
          "bg-transparent underline-offset-4 hover:underline text-zinc-900 dark:text-white",
      },
      size: {
        default: "px-4 py-1.5",
        compact: "px-2.5 py-0.5",
        square: "p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)
 
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button';

export default Button;
