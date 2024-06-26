import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { XIcon } from './icons';
import { cn } from '../utils/cn';

const Sheet = ({
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) => (
  <SheetPrimitive.Root {...props}>{children}</SheetPrimitive.Root>
);
Sheet.displayName = 'Sheet';

const Trigger = SheetPrimitive.Trigger;
Trigger.displayName = 'Sheet.Trigger';
Sheet.Trigger = Trigger;

const Close = SheetPrimitive.Close;
Close.displayName = 'Sheet.Close';

const Portal = ({ ...props }: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal {...props} />
);
Portal.displayName = 'Sheet.Portal';
Sheet.Portal = Portal;

const Overlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, forwardedRef) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={forwardedRef}
  />
));
Overlay.displayName = 'Sheet.Overlay';
Sheet.Overlay = Overlay;

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  hasClose?: boolean;
  animationDuration?: number;
}

const Content = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({side = 'right', hasClose = true, animationDuration = 300, className, children, ...props}, forwardedRef) => (
  <Portal>
    <Overlay />
    <SheetPrimitive.Content
      ref={forwardedRef}
      className={cn(sheetVariants({ side }), `data-[state=closed]:duration-${animationDuration} data-[state=open]:duration-${animationDuration}`, className)}
      {...props}
    >
      {children}
      {hasClose && (
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <XIcon size={16} />
          <span className="sr-only">Close</span>
        </Close>
      )}
    </SheetPrimitive.Content>
  </Portal>
));
Content.displayName = 'Sheet.Content';
Sheet.Content = Content;

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
Header.displayName = 'Sheet.Header';
Sheet.Header = Header;

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
Footer.displayName = 'Sheet.Footer';
Sheet.Footer = Footer;

const Title = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, forwardedRef) => (
  <SheetPrimitive.Title
    ref={forwardedRef}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
Title.displayName = 'Sheet.Title';
Sheet.Title = Title;

const Description = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, forwardedRef) => (
  <SheetPrimitive.Description
    ref={forwardedRef}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
Description.displayName = 'Sheet.Description';
Sheet.Description = Description;

export { Sheet, sheetVariants };
