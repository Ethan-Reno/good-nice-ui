import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from './icons/XIcon';
import { cn } from '../utils/cn';

const Dialog = ({
  children,
  open,
  defaultOpen,
  onOpenChange,
  modal,
}: React.ComponentProps<typeof DialogPrimitive.Root>) => (
  <DialogPrimitive.Root
    open={open}
    defaultOpen={defaultOpen}
    onOpenChange={onOpenChange}
    modal={modal}
  >
    {children}
  </DialogPrimitive.Root>
);
Dialog.displayName = 'Dialog';

const Trigger = DialogPrimitive.Trigger;
Trigger.displayName = 'Dialog.Trigger';
Dialog.Trigger = Trigger;

// Don't export Portal or Overlay because they should not be used directly
// This is because they are used by default in the Content subcomponent
// Leaving the implementation pattern intact to enable exposing it in the future
const Portal = ({
  className,
  children,
  forceMount,
  container,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal
    className={cn(className)}
    forceMount={forceMount}
    container={container}
    {...props}
  >
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
Portal.displayName = 'Dialog.Portal';

const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, asChild, forceMount, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    asChild={asChild}
    forceMount={forceMount}
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in',
      className
    )}
    {...props}
  />
));
Overlay.displayName = 'Dialog.Overlay';

const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(
  (
    {
      className,
      children,
      asChild,
      forceMount,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onInteractOutside,
      ...props
    },
    ref
  ) => (
    <Portal>
      <Overlay />
      <DialogPrimitive.Content
        ref={ref}
        asChild={asChild}
        forceMount={forceMount}
        onOpenAutoFocus={onOpenAutoFocus}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        onInteractOutside={onInteractOutside}
        className={cn(
          'fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in',
          'data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0',
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <XIcon size={16} />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </Portal>
  )
);
Content.displayName = 'Dialog.Content';
Dialog.Content = Content;

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
Header.displayName = 'Dialog.Header';
Dialog.Header = Header;

const Title = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, asChild, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    asChild={asChild}
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
>(({ className, asChild, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    asChild={asChild}
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
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
Footer.displayName = 'Dialog.Footer';
Dialog.Footer = Footer;

export { Dialog };
