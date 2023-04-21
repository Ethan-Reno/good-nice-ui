import {
  Item,
  RadioItem,
  Label,
  DropdownMenuItemProps,
  DropdownMenuRadioItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuContentProps,
  DropdownMenuLabelProps,
} from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DropdownMenuDefaultItemProps
  extends DropdownMenuItemProps,
    ComponentPropsWithoutRef<typeof Item> {
  inset?: boolean;
  hasSeparator?: boolean;
  value?: any;
}

export interface DropdownMenuLabelCustomProps
  extends DropdownMenuLabelProps,
    ComponentPropsWithoutRef<typeof Label> {
  inset?: boolean;
}

export interface DropdownMenuItemGroup {
  type: 'default' | 'checkbox' | 'radio';
  items:
    | DropdownMenuDefaultItemProps[]
    | DropdownMenuCheckboxItemProps[]
    | DropdownMenuRadioItemProps[];
  label?: string;
  radioValue?: any;
  onRadioValueChange?: any;
}

export interface DropdownMenuProps {
  trigger: ReactNode;
  groupedMenuItems: DropdownMenuItemGroup[];
  label?: string;
  contentProps?: DropdownMenuContentProps;
}
