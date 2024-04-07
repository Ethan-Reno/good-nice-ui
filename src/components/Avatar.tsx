import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../utils/cn';

const Avatar = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) => (
  <AvatarPrimitive.Root
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  >
    {children}
  </AvatarPrimitive.Root>
);
Avatar.displayName = 'Avatar';

const Image = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, forwardedRef) => (
  <AvatarPrimitive.Image
    ref={forwardedRef}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
Image.displayName = 'Avatar.Image';
Avatar.Image = Image;

const Fallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, forwardedRef) => (
  <AvatarPrimitive.Fallback
    ref={forwardedRef}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
Fallback.displayName = 'Avatar.Fallback';
Avatar.Fallback = Fallback;

export { Avatar };
