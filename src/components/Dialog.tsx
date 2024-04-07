import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from './icons/XIcon';
import { cn } from '../utils/cn';

const Dialog = ({
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) => (
  <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
);
Dialog.displayName = 'Dialog';

const Trigger = DialogPrimitive.Trigger;
Trigger.displayName = 'Dialog.Trigger';
Dialog.Trigger = Trigger;

// Don't export Portal or Overlay because they should not be used directly
// This is because they are used by default in the Content subcomponent
// Leaving the implementation pattern intact to enable exposing it in the future
const Portal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
);
Portal.displayName = 'Dialog.Portal';

const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, forwardedRef) => (
  <DialogPrimitive.Overlay
    ref={forwardedRef}
    className={cn(
      'fixed inset-0 z-50 bg-surface/80 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
Overlay.displayName = 'Dialog.Overlay';

const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, forwardedRef) => (
  <Portal>
    <Overlay />
    <DialogPrimitive.Content
      ref={forwardedRef}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full rounded-lg md:w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cn(
          'absolute right-4 top-4 rounded-sm ring-offset-surface text-lowContrast-foreground hover:text-foreground transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
          'data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
        )}
      >
        <XIcon size={20} />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </Portal>
));
Content.displayName = 'Dialog.Content';
Dialog.Content = Content;

const Title = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, forwardedRef) => (
  <DialogPrimitive.Title
    ref={forwardedRef}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
Title.displayName = 'Dialog.Title';
Dialog.Title = Title;

const Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, forwardedRef) => (
  <DialogPrimitive.Description
    ref={forwardedRef}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
Description.displayName = 'Dialog.Description';
Dialog.Description = Description;

const Footer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse gap-y-4 sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
Footer.displayName = 'Dialog.Footer';
Dialog.Footer = Footer;

export { Dialog };
