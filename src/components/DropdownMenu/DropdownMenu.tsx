import React from 'react';
import {
  Root,
  Portal,
  Trigger,
  Item,
  ItemIndicator,
  CheckboxItem,
  Content,
  RadioItem,
  RadioGroup,
  Label,
  Separator,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioItemProps,
  DropdownMenuSeparatorProps,
  DropdownMenuContentProps,
} from '@radix-ui/react-dropdown-menu';
import { cn } from '../../utils/cn';
import { Check, Circle } from 'lucide-react';
import {
  DropdownMenuItemCustomProps,
  DropdownMenuItemGroup,
  DropdownMenuLabelCustomProps,
  DropdownMenuProps,
} from './types';

const DropdownMenuRoot = Root;

const DropdownMenuTrigger = Trigger;

const DropdownMenuContent = ({
  className,
  align = 'start',
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) => (
  <Portal>
    <Content
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'animate-in bg-white dark:bg-zinc-800 z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-400 dark:border-zinc-500 p-1',
        'data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </Portal>
);

const DropdownMenuItem = ({ inset, ...props }: DropdownMenuItemCustomProps) => (
  <Item
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-zinc-200 dark:focus:bg-zinc-700',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8'
    )}
    {...props}
  />
);

const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) => (
  <CheckboxItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-zinc-100 dark:focus:bg-zinc-700',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
);

const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) => (
  <RadioItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-zinc-100 dark:focus:bg-zinc-700',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
);

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: DropdownMenuLabelCustomProps) => (
  <Label
    className={cn(
      'underline underline-offset-2 px-2 py-1.5 text-sm font-semi-bold text-zinc-900 dark:text-zinc-300',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
);

const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuSeparatorProps) => (
  <Separator
    className={cn('mx-2 my-1 h-px bg-zinc-400 dark:bg-zinc-500', className)}
    {...props}
  />
);

const constructMenuItemGroup = (menuItemGroup: DropdownMenuItemGroup) => {
  const { type, label, items } = menuItemGroup;
  switch (type) {
    case 'default': {
      return (
        <>
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
          {items.map((menuItem: DropdownMenuItemCustomProps) => {
            const { key, hasSeparator, ...props } = menuItem;
            return (
              <>
                <DropdownMenuItem key={key} {...props} />
                {hasSeparator && <DropdownMenuSeparator />}
              </>
            );
          })}
        </>
      );
    }
    case 'checkbox': {
      return (
        <>
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
          {items.map((menuItem: DropdownMenuCheckboxItemProps) => {
            const { key, checked, ...props } = menuItem;
            return (
              <DropdownMenuCheckboxItem
                key={key}
                checked={checked}
                {...props}
              />
            );
          })}
        </>
      );
    }
    case 'radio': {
      const { radioValue, onRadioValueChange } = menuItemGroup;
      return (
        <RadioGroup value={radioValue} onValueChange={onRadioValueChange}>
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
          {/* TODO: tsconfig strict to true, resolve ts error */}
          {items.map((menuItem: DropdownMenuRadioItemProps) => {
            const { key, value, ...props } = menuItem;
            return <DropdownMenuRadioItem key={key} value={value} {...props} />;
          })}
        </RadioGroup>
      );
    }
  }
};

export const DropdownMenu = ({
  trigger,
  groupedMenuItems,
  label,
  contentProps,
}: DropdownMenuProps) => {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent {...contentProps}>
        <>
          {label && (
            <>
              <DropdownMenuLabel>{label}</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          )}
          {groupedMenuItems.map((menuItemGroup) =>
            constructMenuItemGroup(menuItemGroup)
          )}
        </>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};
