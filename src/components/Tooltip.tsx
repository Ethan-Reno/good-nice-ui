import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../utils/cn';

const TooltipProvider = TooltipPrimitive.Provider;
TooltipProvider.displayName = 'TooltipProvider';

const Tooltip = ({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) => (
  <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
);
Tooltip.displayName = 'Tooltip';

const Trigger = TooltipPrimitive.Trigger;
Trigger.displayName = 'Tooltip.Trigger';
Tooltip.Trigger = Trigger;

const Content = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, forwardedRef) => (
  <TooltipPrimitive.Content
    ref={forwardedRef}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md border bg-surface px-3 py-1.5 text-sm text-foreground shadow-md',
      'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
Content.displayName = 'Tooltip.Content';
Tooltip.Content = Content;

export { Tooltip, TooltipProvider };
