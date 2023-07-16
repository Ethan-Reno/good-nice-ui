import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../utils/cn';

const Tabs = ({
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root {...props}>{children}</TabsPrimitive.Root>
);
Tabs.displayName = 'Tabs';

const List = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex',
      className
    )}
    {...props}
  />
));
List.displayName = 'Tabs.List';
Tabs.List = List;

const Trigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex items-center justify-center text-muted-foreground whitespace-nowrap border-b-2 border-transparent px-3 py-1.5 text-sm font-medium ring-offset-background transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-sm disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:border-primary data-[state=active]:focus-visible:border-transparent',
      className
    )}
    {...props}
  />
));
Trigger.displayName = 'Tabs.Trigger';
Tabs.Trigger = Trigger;

const Content = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    tabIndex={-1}
    className={cn(
      'mt-2 outline-none',
      className
    )}
    {...props}
  />
));
Content.displayName = 'Tabs.Content';
Tabs.Content = Content;

export { Tabs };
