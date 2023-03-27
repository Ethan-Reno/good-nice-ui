import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cn } from "utils/cn"
import { Check, Circle } from "lucide-react"

const DropdownMenuRoot = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.DropdownMenuGroup

const DropdownMenuRadioGroup = DropdownMenuPrimitive.DropdownMenuRadioGroup

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean,
  }
>(({ inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-700",
      inset && "pl-8",
    )}
    {...props}
  />
))

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-300",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-700", className)}
    {...props}
  />
))

export interface DropdownMenuItemGroup {
  type: 'item' | 'checkbox' | 'radio';
  items:
    DropdownMenuPrimitive.DropdownMenuItemProps[] |
    DropdownMenuPrimitive.DropdownMenuCheckboxItemProps[] |
    DropdownMenuPrimitive.DropdownMenuRadioItemProps[]
  label?: string;
  value?: any;
  onValueChange?: any;
}

export interface DropdownMenuProps {
  trigger: React.ReactNode;
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
        <DropdownMenuGroup>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          {menuItemGroup.items.map((menuItem: DropdownMenuPrimitive.DropdownMenuItemProps) => {
            const { disabled, onSelect, ...props } = menuItem;
            return (
              <DropdownMenuItem
                disabled={disabled}
                onSelect={onSelect}
                {...props}
              />
            )
          })}
        </DropdownMenuGroup>
      )
    case 'checkbox':
      return (
        <DropdownMenuGroup>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          {menuItemGroup.items.map((menuItem: DropdownMenuPrimitive.DropdownMenuCheckboxItemProps) => {
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
        </DropdownMenuGroup>
      )
    case 'radio':
      return (
        <DropdownMenuRadioGroup
          value={menuItemGroup.value}
          onValueChange={menuItemGroup.onValueChange}
        >
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          {menuItemGroup.items.map((menuItem: DropdownMenuPrimitive.DropdownMenuRadioItemProps) => {
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
        </DropdownMenuRadioGroup>
      )
  }
};


const DropdownMenu = ({ trigger, groupedMenuItems, label }: DropdownMenuProps) => {
  console.log(groupedMenuItems);
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
          <DropdownMenuPrimitive.DropdownMenuGroup>
            {groupedMenuItems.map((menuItemGroup) => constructMenuItemGroup(menuItemGroup))}
          </DropdownMenuPrimitive.DropdownMenuGroup>
        </>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
