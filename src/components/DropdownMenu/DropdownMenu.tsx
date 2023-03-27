import React, {
  forwardRef,
  ReactNode,
  ElementRef,
  ComponentPropsWithoutRef
} from "react"

import {
  Root,
  Portal,
  Trigger,
  Item,
  ItemIndicator,
  Group,
  CheckboxItem,
  Content,
  RadioItem,
  RadioGroup,
  Label,
  Separator,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioItemProps,
} from "@radix-ui/react-dropdown-menu"

import { cn } from "utils/cn"
import { Check, Circle } from "lucide-react"

const DropdownMenuRoot = Root

const DropdownMenuTrigger = Trigger

const DropdownMenuContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "animate-in bg-white dark:bg-zinc-900 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1",
        className
      )}
      {...props}
    />
  </Portal>
))

const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean,
  }
>(({ inset, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-700",
      inset && "pl-8",
    )}
    {...props}
  />
))

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  ComponentPropsWithoutRef<typeof CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
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
))

const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
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
))

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-300",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-700", className)}
    {...props}
  />
))

export interface DropdownMenuItemGroup {
  type: 'item' | 'checkbox' | 'radio';
  items:
    DropdownMenuItemProps[] |
    DropdownMenuCheckboxItemProps[] |
    DropdownMenuRadioItemProps[]
  label?: string;
  radioValue?: any;
  onRadioValueChange?: any;
}

export interface DropdownMenuProps {
  trigger: ReactNode;
  groupedMenuItems: DropdownMenuItemGroup[];
  label?: string;
}

const constructMenuItemGroup = (menuItemGroup: DropdownMenuItemGroup) => {
  const {
    type,
    label,
    items,
  } = menuItemGroup;
  switch (type) {
    case 'item':
      return (
        <Group>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          {items.map((menuItem: DropdownMenuItemProps) => {
            const { disabled, onSelect, ...props } = menuItem;
            return (
              <DropdownMenuItem
                disabled={disabled}
                onSelect={onSelect}
                {...props}
              />
            )
          })}
        </Group>
      )
    case 'checkbox':
      return (
        <Group>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          {items.map((menuItem: DropdownMenuCheckboxItemProps) => {
            const { disabled, onSelect, checked, ...props } = menuItem;
            return (
              <DropdownMenuCheckboxItem
                disabled={disabled}
                onSelect={onSelect}
                checked={checked}
                {...props}
              />
            )
          })}
        </Group>
      )
    case 'radio':
      const { radioValue, onRadioValueChange } = menuItemGroup;
      return (
        <RadioGroup
          value={radioValue}
          onValueChange={onRadioValueChange}
        >
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          {items.map((menuItem: DropdownMenuRadioItemProps) => {
            const { disabled, onSelect, value, ...props } = menuItem;
            return (
              <DropdownMenuRadioItem
                value={value}
                disabled={disabled}
                onSelect={onSelect}
                {...props}
              />
            )
          })}
        </RadioGroup>
      )
  }
};

const DropdownMenu = ({
  trigger,
  groupedMenuItems,
  label
}: DropdownMenuProps) => {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <>
          {label &&
            <>
              <DropdownMenuLabel>{label}</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          }
          {groupedMenuItems.map((menuItemGroup) => constructMenuItemGroup(menuItemGroup))}
        </>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
